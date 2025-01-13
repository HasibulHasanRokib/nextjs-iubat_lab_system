import { Card, CardContent } from "@/components/ui/card";

export default function Header() {
  return (
    <Card>
      <CardContent className="flex items-start justify-between p-3">
        <div>
          <h2>Computer Lab 1</h2>
          <p className="text-sm text-muted-foreground">Seat: 48/70</p>
          <p>Sign out</p>
        </div>
        <div>
          <p>Ict Center</p>
        </div>
        <div>
          <h2>Wednesday - October 04,2023 </h2>
          <p className="text-sm text-muted-foreground">03:59:16 PM</p>
        </div>
      </CardContent>
    </Card>
  );
}
