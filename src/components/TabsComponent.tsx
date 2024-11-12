"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const TabsComponent = () => {
  const [tabValue, setTabValue] = useState("login"); // State for active tab

  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/tabs"
        className="font-bold underline cursor-pointer"
      >
        Tabs
      </a>
      <Tabs value={tabValue} onValueChange={setTabValue} className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back!</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Soluta, est!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="login-name">Name</Label>
                <Input id="login-name" />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="login-password">Password</Label>
                <Input id="login-password" />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember Me</Label>
                </div>
                <Button variant="ghost">Forgot Password?</Button>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col w-full gap-2">
                <Button>LOGIN</Button>
                <Button variant="ghost" onClick={() => setTabValue("register")}>
                  SIGN UP
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Create an Account</CardTitle>
              <CardDescription>
                Fill in the details below to sign up.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="register-name">Name</Label>
                <Input id="register-name" />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="register-email">Email</Label>
                <Input id="register-email" />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="register-password">Password</Label>
                <Input id="register-password" />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col w-full gap-2">
                <Button>SIGN UP</Button>
                <Button variant="ghost" onClick={() => setTabValue("login")}>
                  LOGIN
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
