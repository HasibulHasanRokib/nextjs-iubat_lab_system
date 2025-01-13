import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Avatar from "@/public/images/avatar.png";

export default function ActiveStudentLists() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active students list</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of login students.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Student ID</TableHead>
              <TableHead>Program</TableHead>
              <TableHead className="text-right">Login Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell className="flex items-center space-x-2">
                <div className="relative h-10 w-10 rounded-full object-cover">
                  <Image src={Avatar} alt="avatar" fill />
                </div>
                <p>Hasibul Hasan Rokib</p>
              </TableCell>
              <TableCell>19303027</TableCell>
              <TableCell>BCSE</TableCell>
              <TableCell className="text-right">12/12/2025</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
