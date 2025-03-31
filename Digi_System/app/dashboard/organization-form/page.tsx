"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

// Define the form schema
const formSchema = z.object({
  orgName: z.string().min(2, { message: "Organization name must be at least 2 characters." }),
  orgPhone: z.string().min(10, { message: "Please enter a valid phone number." }),
  ownerName: z.string().min(2, { message: "Owner name must be at least 2 characters." }),
  orgLicense: z.string().min(3, { message: "License ID is required." }),
  orgAddress: z.string().min(5, { message: "Please enter a valid address." }),
  orgEmail: z.string().email({ message: "Please enter a valid email address." })
});

type FormValues = z.infer<typeof formSchema>;

export default function OrganizationFormPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orgName: "",
      orgPhone: "",
      ownerName: "",
      orgLicense: "",
      orgAddress: "",
      orgEmail: ""
    }
  });
  
  const onSubmit = (data: FormValues) => {
    setIsVerifying(true);
    
    // Show processing toast
    toast({
      title: "Submitting information",
      description: "Your details are being processed...",
    });
    
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      
      // Show success toast
      toast({
        title: "Success!",
        description: "Your organization has been registered successfully.",
        variant: "default",
      });
      
      // Redirect to verification page
      router.push("/dashboard/verify-information");
    }, 1500);
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Organization Registration</CardTitle>
          <CardDescription>
            Please fill in the details to register your organization
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="orgName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Org Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Organization name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="orgPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Org Phone No.</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="ownerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Owner Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Owner name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="orgLicense"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Org License EID</FormLabel>
                      <FormControl>
                        <Input placeholder="License ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="orgAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Org Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Full address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="orgEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Org Email ID</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                type="submit"
                disabled={isVerifying}
              >
                {isVerifying ? "Verifying..." : "Submit"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
} 