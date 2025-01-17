import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
// ----------------------------------------------------
import { AlertCircle, Github } from "lucide-react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import LoadingButton from "@/components/ui/custom/LoadingButton";
import AlertPopup from "@/components/ui/custom/AlertPopup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// #########################################################
const SignupForm = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const [registerEmail, setRegisterEmail] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const handlePicture = (e) => {
    setFile(e.target.files[0]);
    // setVideo('')
  };
  // ####################################################

  const createAccount = async (data) => {
    data.file = file;
    setDialogOpen(true);
    setLoading(true);
    console.log(data);
    setRegisterEmail(data.email);
    setError("");
    if (data.password !== data.confirmpassword) {
      setLoading(false);
      setDialogOpen(false);
      setError("New password and Confirm Password Should be same");
    } else {
      setError("");
      try {
        const userData = await axios.post("/api/v1/users/register", data);
        if (userData) {
          setLoading(false);
          // openPopup();
          // alert("Account created Successfully");
          // navigate("/login");
        }
      } catch (error) {
        setLoading(false);
        setDialogOpen(false);
        setError(error.response.data.message);
      }
    }
  };
  // ----------------------------------------
  const currentYear = new Date().getFullYear();
  const yearRange = 100;
  const [yearOptions, setYearOptions] = useState([]);

  useEffect(() => {
    const options = [];
    for (let i = currentYear; i >= currentYear - yearRange; i--) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    setYearOptions(options);
  }, []);
  return (
    <div className="w-full py-8 max-[640px]:py-0">
      <Card className="flex-1 md:max-w-2xl mx-auto max-[640px]:my-0 max-[640px]:rounded-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            <p className="mt-4">
              Already have an account?&nbsp;
              <Link to="/login">
                <Button variant="link">Login</Button>
              </Link>
            </p>
          </CardDescription>
        </CardHeader>

        {error && (
          <CardHeader>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </CardHeader>
        )}
        <form onSubmit={handleSubmit(createAccount)}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                {...register("fullName", {
                  required: true,
                })}
              />
            </div>{" "}
            <div className="grid gap-2">
              <Label htmlFor="schoolIdNo">School ID No</Label>
              <Input
                id="schoolIdNo"
                type="text"
                placeholder="Enter your School ID No"
                {...register("schoolIdNo", {
                  required: true,
                })}
              />
            </div>{" "}
            {/* --------------------------- */}
            <div className="grid gap-2">
              <Label htmlFor="joinYear">Joining Year</Label>
              <select
                id="joinYear"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                {...register("joinYear", { required: true })}
              >
                {yearOptions}
              </select>
            </div>
            {/* ------------------------------------------ */}
            <div className="grid gap-2">
              <Label htmlFor="passYear">Passing Year</Label>
              <select
                id="passYear"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                {...register("passYear", { required: true })}
              >
                {yearOptions}
              </select>
            </div>
            {/* ---------------------------------------- */}
            <div className="grid gap-2">
              <Label htmlFor="name">Current Profession</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your profession"
                {...register("profession", {
                  required: true,
                })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="confirm password"
                {...register("confirmpassword", {
                  required: true,
                })}
              />
            </div>
          </CardContent>
          {/* ----------------------------- */}
          <CardFooter>
            <div className="items-top flex space-x-2">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </CardFooter>
          <CardFooter>
            <Button
              type="submit"
              className="w-[90%] mx-auto bg-[#003566] hover:bg-[#003566] hover:bg-opacity-80"
            >
              Create account
            </Button>
          </CardFooter>
          <div className="relative mb-3">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>
          <CardFooter>
            <Button disabled variant="outline" className=" w-[80%] mx-auto">
              {/* <Github color="#000000" /> */}
              Signup with Google
            </Button>
          </CardFooter>
        </form>
        {dialogOpen && (
          <AlertPopup open={dialogOpen} onOpenChange={false} className="w-min">
            {loading ? (
              <LoadingButton className="" />
            ) : (
              <AlertDialogDescription>
                <AlertDialogTitle>Check your inbox</AlertDialogTitle>
                <AlertDialogDescription>
                  We are glad, that you're with us ? We've sent you a
                  verification link to the email address &nbsp;
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    {registerEmail || "null"}
                  </code>
                  <AlertDialogTitle className="text-center text-black py-2">
                    If You have Verified below
                  </AlertDialogTitle>
                  <div className="relative flex justify-center flex-row mx-auto space-x-12">
                    <Link to="/">
                      <Button variant="">Home</Button>
                    </Link>
                    <Link to="/login">
                      <Button variant="">Login</Button>
                    </Link>
                  </div>
                </AlertDialogDescription>
              </AlertDialogDescription>
            )}
          </AlertPopup>
        )}
      </Card>
    </div>
  );
};

export default SignupForm;
