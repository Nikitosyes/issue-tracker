import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Grid, Heading, Flex, Card, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <Grid gap="3">
      <Heading>{issue.title}</Heading>
      <Flex gap="3" align="center">
        <IssueStatusBadge status={issue.status} />
        <Text>Created: {issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </Grid>
  );
};

export default IssueDetails;
