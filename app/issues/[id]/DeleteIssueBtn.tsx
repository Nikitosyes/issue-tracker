"use client";
import { Spinner } from "@/app/components";
import { Issue } from "@prisma/client";
import { EraserIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DeleteIssueBtn = ({ issue }: { issue: Issue }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`/api/issues/${issue.id}`);
      router.push("/issues/list");
      toast.success(
        <div>
          You have deleted an issue{" "}
          <span className="font-bold">{issue.title}</span>.
        </div>
      );
      router.refresh();
    } catch (error) {
      console.log(error);
      setError(true);
      setIsDeleting(false);
      toast.error(`Error occured during delete process`);
    }
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button
            className={classNames({ isDeleting: "bg-orange" })}
            disabled={isDeleting}
            color="red"
            style={{ width: "100%" }}
          >
            <EraserIcon />
            Delete Issue
            {isDeleting && <Spinner />}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>
            Deleting issue <span className="underline">{issue.title}</span>
          </AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? This will erase all info regarding this issue. This
            action cannot be undone.
          </AlertDialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={handleDelete}>
                Delete issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This issue could not be deleted
          </AlertDialog.Description>
          <Flex justify="end" mt="2">
            <Button color="gray" variant="soft" onClick={() => setError(false)}>
              OK
            </Button>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueBtn;
