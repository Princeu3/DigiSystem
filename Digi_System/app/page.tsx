import { SignInButton, SignedIn, SignedOut, UserButton, SignOutButton } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="absolute inset-0 bg-grid-black/10 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-white/5" />
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <ModeToggle />
        <SignedIn>
          <SignOutButton>
            <Button variant="outline" size="sm" className="hover:bg-destructive hover:text-destructive-foreground">
              Sign Out
            </Button>
          </SignOutButton>
        </SignedIn>
      </div>
      <div className="relative w-full max-w-md mx-auto">
        <Card className="shadow-xl hover-lift glass-effect animate-in">
          <CardHeader className="space-y-1">
            <CardTitle className="text-4xl font-bold text-center">
              DigiSystem
            </CardTitle>
            <CardDescription className="text-center text-base">
              System Admin Portal
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-6 py-6">
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            
            <SignedIn>
              <div className="flex flex-col items-center space-y-4">
                <p className="text-center text-muted-foreground">Welcome</p>
                <Button asChild className="w-full bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </div>
            </SignedIn>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
