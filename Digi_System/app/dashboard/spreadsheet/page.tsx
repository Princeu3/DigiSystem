"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

// Sample data for the events
const events = [
  {
    id: 1,
    orgName: "Org 1",
    eventName: "Community Outreach",
    submittedBy: "Admin User",
    eventDate: "2023-07-15",
    submittedOn: "2023-06-30",
    coins: 150,
    holders: 45
  },
  {
    id: 2,
    orgName: "Org 1",
    eventName: "Fundraising Campaign",
    submittedBy: "Manager",
    eventDate: "2023-08-22",
    submittedOn: "2023-08-01",
    coins: 200,
    holders: 78
  },
  {
    id: 3,
    orgName: "Org 1",
    eventName: "Environmental Cleanup",
    submittedBy: "Coordinator",
    eventDate: "2023-09-10",
    submittedOn: "2023-08-25",
    coins: 120,
    holders: 32
  },
  {
    id: 4,
    orgName: "Org 1",
    eventName: "Educational Workshop",
    submittedBy: "Admin User",
    eventDate: "2023-10-05",
    submittedOn: "2023-09-20",
    coins: 180,
    holders: 65
  },
  {
    id: 5,
    orgName: "Org 1",
    eventName: "Health Awareness",
    submittedBy: "Manager",
    eventDate: "2023-11-12",
    submittedOn: "2023-10-25",
    coins: 250,
    holders: 92
  }
];

export default function SpreadsheetPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Events Spreadsheet</CardTitle>
          <CardDescription>
            List of all events submitted by organizations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="relative flex items-center justify-between p-4 border rounded-md hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1 pr-4">
                  <h3 className="font-medium">{event.orgName} - {event.eventName}</h3>
                  <p className="text-sm text-muted-foreground">
                    Submitted By: {event.submittedBy}, Event Date: {event.eventDate}, Submitted On: {event.submittedOn}
                  </p>
                  <p className="text-sm">
                    # Coins: {event.coins}, # Holders: {event.holders}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/dashboard">Return to Dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 