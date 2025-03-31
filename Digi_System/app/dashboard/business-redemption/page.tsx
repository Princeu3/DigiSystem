"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

// Define the form schema
const formSchema = z.object({
  busName: z.string().min(2, { message: "Business name must be at least 2 characters." }),
  busPhone: z.string().min(10, { message: "Please enter a valid phone number." }),
  ownerName: z.string().min(2, { message: "Owner name must be at least 2 characters." }),
  busLicense: z.string().min(3, { message: "License ID is required." }),
  busAddress: z.string().min(5, { message: "Please enter a valid address." }),
  busEmail: z.string().email({ message: "Please enter a valid email address." })
});

type FormValues = z.infer<typeof formSchema>;

export default function BusinessRedemptionPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      busName: "",
      busPhone: "",
      ownerName: "",
      busLicense: "",
      busAddress: "",
      busEmail: ""
    }
  });
  
  const onSubmit = (data: FormValues) => {
    setIsVerifying(true);
    
    // Show processing toast
    toast({
      title: "Submitting information",
      description: "Your business details are being processed...",
    });
    
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      
      // Show success toast
      toast({
        title: "Success!",
        description: "Your business has been registered successfully.",
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
          <CardTitle className="text-xl font-bold">Business Redeemer</CardTitle>
          <CardDescription>
            Please fill in the business redemption details
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="busName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bus Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Business name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="busPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bus Phone No.</FormLabel>
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
                  name="busLicense"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bus License EID</FormLabel>
                      <FormControl>
                        <Input placeholder="License ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="busAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bus Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Full address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="busEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bus Email ID</FormLabel>
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