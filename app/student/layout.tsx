import { Card } from "@/components/ui/card";
import React, { ReactNode } from "react";

export default function StudentLayout({
  activeLists,
  studentRegister,
  studentLogin,
  studentHeader,
}: {
  activeLists: ReactNode;
  studentRegister: ReactNode;
  studentLogin: ReactNode;
  studentHeader: ReactNode;
}) {
  return (
    <>
      <div className="grid grid-cols-3 space-x-2 p-1">
        <div>{studentRegister}</div>
        <div className="col-span-2">
          <div className="relative flex min-h-screen flex-col space-y-2">
            <div>{studentHeader}</div>
            <div>{studentLogin}</div>
            <Card className="flex-grow">{activeLists}</Card>
          </div>
        </div>
      </div>
    </>
  );
}
