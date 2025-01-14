import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Link from "next/link";
import ForgotPasswordForm from "./forgotPasswordForm";
import { ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  return (
    <>
      <Card>
        <CardHeader>
          <Link className="flex items-center space-x-3" href={"/student"}>
            <ArrowLeft size={15} /> Back
          </Link>
        </CardHeader>
        <div className="flex flex-col items-center justify-center">
          <CardContent>
            <ForgotPasswordForm />
          </CardContent>
          <CardFooter className="text-muted-foreground">
            Note: To reset your password enter your email address.
          </CardFooter>
        </div>
      </Card>
    </>
  );
}
