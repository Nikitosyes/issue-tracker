import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueBtn = ({ issueId }: { issueId: string | number }) => {
  return (
    <Link href={`/issues/${issueId}/edit/${issueId}`}>
      <Button variant="classic" style={{ width: "100%" }}>
        <Pencil2Icon />
        Edit Issue
      </Button>
    </Link>
  );
};

export default EditIssueBtn;
