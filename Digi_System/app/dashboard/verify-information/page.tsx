"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function VerifyInformationPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="absolute inset-0 bg-grid-black/10 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-white/5" />
      <div className="relative w-full max-w-4xl">
        <Card className="hover-lift glass-effect animate-in">
          <CardHeader>
            <CardTitle className="text-2xl">Others</CardTitle>
            <CardDescription>Additional options and features</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Content will be added here */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 