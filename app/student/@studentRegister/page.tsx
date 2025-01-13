import StudentRegisterForm from "@/components/student/studentRegisterForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StudentRegister() {
  return (
    <Card>
      <CardHeader>
        <div className="space-y-1 text-center">
          <CardTitle>IUBAT Computer Lab</CardTitle>
          <CardDescription>Registration Form</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <StudentRegisterForm />
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        IUBAT - ICT Center
      </CardFooter>
    </Card>
  );
}
