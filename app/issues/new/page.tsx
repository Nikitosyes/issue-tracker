"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-lg spcae-y-3">
      <TextField.Root placeholder="Title…"></TextField.Root>
      <TextArea placeholder="Description..." />
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssuePage;
