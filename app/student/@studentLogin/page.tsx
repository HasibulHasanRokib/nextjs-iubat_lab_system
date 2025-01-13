import StudentLoginForm from "@/components/student/studentLoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function StudentLogin() {
  return (
    <Card className="flex flex-col items-center justify-center">
      <CardHeader>
        <CardDescription className="text-orange-600">
          Note: You have to logout when you will leave the lab. Otherwise you
          will be blocked.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <StudentLoginForm />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
