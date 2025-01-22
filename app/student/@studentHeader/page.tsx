import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import DateAndTime from "./dateAndTime";
import Link from "next/link";

export default async function Header() {
  const totalActiveStudents = await db.student.count({
    where: {
      isLoggedIn: true,
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <p className="text-xl">Computer Lab 1</p>
            <p className="text-xl">Ict Center</p>
            <p className="text-xl">{new Date().toDateString()}</p>
          </div>
        </CardTitle>
        <CardDescription className="flex items-start justify-between">
          <span>
            <p className="text-sm text-muted-foreground">
              Seat: {totalActiveStudents}/30
            </p>
            <Link
              className="text-gray-800 underline underline-offset-2"
              href={"#"}
            >
              System Logout
            </Link>
          </span>
          <DateAndTime />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
