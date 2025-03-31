"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function VerifyInformationPage() {
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(false);
  
  const handleVerify = () => {
    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      router.push("/dashboard/verification-success");
    }, 2000);
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Verify Given Information</CardTitle>
          <CardDescription>
            Review and verify the provided information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-md p-4 space-y-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="font-medium">Name:</div>
              <div>Sample Organization</div>
              
              <div className="font-medium">Owner:</div>
              <div>John Doe</div>
              
              <div className="font-medium">License ID:</div>
              <div>LIC-12345-EID</div>
              
              <div className="font-medium">Contact:</div>
              <div>+1 (555) 123-4567</div>
              
              <div className="font-medium">Email:</div>
              <div>contact@sampleorg.com</div>
              
              <div className="font-medium">Address:</div>
              <div>123 Sample St, Business District</div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Please carefully review the information above before verification. 
            This action will complete the onboarding process.
          </p>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full" 
            onClick={handleVerify}
            disabled={isVerifying}
          >
            {isVerifying ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...
              </>
            ) : "Verify Information"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 