import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Coins, 
  FileSpreadsheet, 
  CheckCircle2,
  Activity
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="absolute inset-0 bg-grid-black/10 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-white/5" />
      <div className="relative w-full max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              DigiSystem
            </h1>
            <p className="text-muted-foreground mt-2">Digi Dashboard</p>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Onboarding Options Section */}
          <Card className="w-full hover-lift glass-effect animate-in">
            <CardHeader>
              <CardTitle className="text-2xl">Onboarding Options</CardTitle>
              <CardDescription className="text-base">Select an onboarding path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {/* Onboarding Coin Issuance */}
                <Link href="/dashboard/organization-form" className="no-underline">
                  <div className="group flex flex-col items-center justify-center p-6 rounded-lg border border-muted hover:border-primary cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-accent/50">
                    <Building2 className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="font-medium text-center group-hover:text-primary transition-colors">Onboarding Coin Issuance (WPO)</h3>
                  </div>
                </Link>
                
                {/* Onboarding Coin Redeemer */}
                <Link href="/dashboard/business-redemption" className="no-underline">
                  <div className="group flex flex-col items-center justify-center p-6 rounded-lg border border-muted hover:border-primary cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-accent/50">
                    <Coins className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="font-medium text-center group-hover:text-primary transition-colors">Onboarding Coin Redeemer</h3>
                  </div>
                </Link>
                
                {/* Coin Minting */}
                <Link href="/dashboard/spreadsheet" className="no-underline">
                  <div className="group flex flex-col items-center justify-center p-6 rounded-lg border border-muted hover:border-primary cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-accent/50">
                    <FileSpreadsheet className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="font-medium text-center group-hover:text-primary transition-colors">Coin Minting</h3>
                  </div>
                </Link>
                
                {/* Others (Verification) */}
                <Link href="/dashboard/verify-information" className="no-underline">
                  <div className="group flex flex-col items-center justify-center p-6 rounded-lg border border-muted hover:border-primary cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-accent/50">
                    <CheckCircle2 className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="font-medium text-center group-hover:text-primary transition-colors">Others (Verification)</h3>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Activity Section */}
          <Card className="w-full hover-lift glass-effect animate-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
              <CardDescription className="text-base">Latest system activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="group flex items-center p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="ml-3">
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">New organization registered</p>
                    <p className="text-xs text-muted-foreground">Today, 10:30 AM</p>
                  </div>
                </div>
                <div className="group flex items-center p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="ml-3">
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">Business redemption verified</p>
                    <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
                  </div>
                </div>
                <div className="group flex items-center p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="ml-3">
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">Coin minting completed</p>
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