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
          <div className="flex flex-col space-y-2">
            <div>{studentHeader}</div>
            <div>{studentLogin}</div>
            <div className="flex-1">{activeLists}</div>
          </div>
        </div>
      </div>
    </>
  );
}
