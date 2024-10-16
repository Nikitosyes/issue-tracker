"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "@/app/schemas/validationSchemas";
import { z } from "zod";
import classNames from "classnames";
import { ErrorMessage, Spinner } from "@/app/components";
import { Issue } from "@prisma/client";
import SimpleMDE from "react-simplemde-editor";

type IssueFormData = z.infer<typeof issueSchema>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IssueForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });
  const [error, setError] = useState<string>();

  const submitLogic = async (data: IssueFormData) => {
    try {
      if (issue) await axios.patch("/api/issues/" + issue.id, data);
      else await axios.post("/api/issues", data);
      router.push("/issues/list");
      router.refresh();
    } catch (error) {
      setError("error occured");
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg ">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form className="space-y-3" onSubmit={handleSubmit(submitLogic)}>
        <TextField.Root
          defaultValue={issue?.title}
          {...register("title")}
          placeholder="Title…"
        ></TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description..." {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button
          className={classNames({ isSubmitting: "bg-gray-400" })}
          disabled={isSubmitting}
        >
          {issue ? "Update issue" : "Submit new issue"}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
