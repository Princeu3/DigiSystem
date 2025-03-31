import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Onboarding Options Section */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Onboarding Options</CardTitle>
              <CardDescription>Select an onboarding path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {/* Onboarding Coin Issuance */}
                <Link href="/dashboard/organization-form" className="no-underline">
                  <div className="flex items-center justify-center p-6 rounded-lg border border-muted hover:border-primary cursor-pointer transition-colors">
                    <div className="text-center">
                      <h3 className="font-medium">Onboarding Coin Issuance (WPO)</h3>
                    </div>
                  </div>
                </Link>
                
                {/* Onboarding Coin Redeemer */}
                <Link href="/dashboard/business-redemption" className="no-underline">
                  <div className="flex items-center justify-center p-6 rounded-lg border border-muted hover:border-primary cursor-pointer transition-colors">
                    <div className="text-center">
                      <h3 className="font-medium">Onboarding Coin Redeemer</h3>
                    </div>
                  </div>
                </Link>
                
                {/* Coin Minting */}
                <Link href="/dashboard/spreadsheet" className="no-underline">
                  <div className="flex items-center justify-center p-6 rounded-lg border border-muted hover:border-primary cursor-pointer transition-colors">
                    <div className="text-center">
                      <h3 className="font-medium">Coin Minting</h3>
                    </div>
                  </div>
                </Link>
                
                {/* Others (Verification) */}
                <Link href="/dashboard/verify-information" className="no-underline">
                  <div className="flex items-center justify-center p-6 rounded-lg border border-muted hover:border-primary cursor-pointer transition-colors">
                    <div className="text-center">
                      <h3 className="font-medium">Others (Verification)</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Activity Section */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest system activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center p-3 border rounded-md">
                  <div className="ml-3">
                    <p className="text-sm font-medium">New organization registered</p>
                    <p className="text-xs text-muted-foreground">Today, 10:30 AM</p>
                  </div>
                </div>
                <div className="flex items-center p-3 border rounded-md">
                  <div className="ml-3">
                    <p className="text-sm font-medium">Business redemption verified</p>
                    <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
                  </div>
                </div>
                <div className="flex items-center p-3 border rounded-md">
                  <div className="ml-3">
                    <p className="text-sm font-medium">Coin minting completed</p>
                    <p className="text-xs text-muted-foreground">Yesterday, 11:20 AM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 