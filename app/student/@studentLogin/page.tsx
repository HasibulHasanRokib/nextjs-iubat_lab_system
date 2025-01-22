import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StudentLoginForm from "./studentLoginForm";
import Link from "next/link";

export default function StudentLogin() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Login & Logout</CardTitle>
        <CardDescription className="text-center">
          Note: You have to logout when you will leave the lab. Otherwise you
          will be blocked.
        </CardDescription>
      </CardHeader>
      <div className="flex flex-col items-center justify-center">
        <CardContent>
          <StudentLoginForm />
        </CardContent>
        <CardFooter>
          <Link className="hover:underline" href={"/student/forgot-password"}>
            Forgot your password
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
