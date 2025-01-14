import { OctagonAlert } from "lucide-react";
import React from "react";

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <>
      {message && (
        <div className="flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
          <OctagonAlert />
          {message}
        </div>
      )}
    </>
  );
}
