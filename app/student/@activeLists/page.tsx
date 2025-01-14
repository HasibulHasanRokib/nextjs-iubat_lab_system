import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTable from "./data-table";

export default function ActiveStudentLists() {
  return (
    <>
      <CardHeader>
        <CardTitle>Active students list</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable />
      </CardContent>
    </>
  );
}
