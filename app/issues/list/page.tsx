import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import IssueActions from "./IssueActions";
import { IssueStatusBadge, Link } from "@/app/components";

const IssuesPage = async () => {
  const mentalIssues = await prisma.issue.findMany();

  return (
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {mentalIssues.map((i) => (
            <Table.Row key={i.id}>
              <Table.RowHeaderCell>
                <Link href={`/issues/${i.id}`}>
                  <span className="font-bold">{i.title}</span>
                </Link>
                <div className="md:hidden">
                  Status:
                  <IssueStatusBadge status={i.status} />
                </div>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={i.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {i.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
