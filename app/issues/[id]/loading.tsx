import { Card, Flex, Grid, Skeleton } from "@radix-ui/themes";

const LoadingIssueDetailPage = async () => {
  return (
    <Grid gap="3">
      <Skeleton width="5rem" height="50px" />
      <Flex gap="3" align="center">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose">
        <Grid gap="2">
          <Skeleton height="85px" />
        </Grid>
      </Card>
    </Grid>
  );
};

export default LoadingIssueDetailPage;
