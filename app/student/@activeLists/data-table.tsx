"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { activeStudentList } from "./action";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DataTable() {
  const { data } = useQuery({
    queryKey: ["active-students"],
    queryFn: activeStudentList,
  });
  return (
    <div>
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
          {data &&
            data.map((student, index) => (
              <TableRow key={student.studentId}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.fullName}</TableCell>
                <TableCell>{student.studentId}</TableCell>
                <TableCell>{student.program}</TableCell>
                <TableCell className="text-right">
                  {student.lastLogin?.toLocaleTimeString()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
