"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

type IssueForm = {
  title: string;
  description: string;
};

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  const submitLogic = async (data: IssueForm) => {
    await axios.post("/api/issues", data);
    router.push("/issues");
  };

  return (
    <form className="max-w-lg space-y-3" onSubmit={handleSubmit(submitLogic)}>
      <TextField.Root
        {...register("title")}
        placeholder="Title…"
      ></TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description..." {...field} />
        )}
      />
      <Button>Submit new issue</Button>
    </form>
  );
};

export default NewIssuePage;
