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
import Image from "next/image";
import Avatar from "@/public/images/avatar.png";

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
                <TableCell className="flex items-center space-x-2">
                  <div className="relative h-10 w-10 rounded-full object-cover">
                    <Image src={Avatar} alt="avatar" fill />
                  </div>

                  <p className="capitalize">{student.fullName}</p>
                </TableCell>
                <TableCell>{student.studentId}</TableCell>
                <TableCell>{student.program}</TableCell>
                <TableCell className="text-right">
                  {student.loginTime?.toLocaleTimeString()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
