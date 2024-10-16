import { Grid, Skeleton, Text } from "@radix-ui/themes";

const IssueFormSkeleton = () => {
  return (
    <Grid gap="3" className="max-w-xl">
      <Skeleton height="30px" />
      <Skeleton height="250px" />
      <Skeleton>
        <Text className="w-fit">Submit new issue</Text>
      </Skeleton>
    </Grid>
  );
};

export default IssueFormSkeleton;
