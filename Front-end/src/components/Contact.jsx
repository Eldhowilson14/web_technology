import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import LoadingButton from "./ui/custom/LoadingButton";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  // const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const contactUs = async (data) => {
    // console.log(data);
    setLoading(true);
    try {
      const contactUs = await axios.post("/api/v1/users/contactus", data);
      if (contactUs) {
        setLoading(false);
        alert("Form Submitted Successfully");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <div>
      <section className="bg-[#003566]">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            Contact Us
          </h2>
          <p className="mb-8  font-light text-center text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback? Any Query? Let us
            know.
          </p>
          <div className=" flex flex-col  items-start content-center ml-[30%] max-[480px]:ml-[0%] lg:mb-16">
            <div className=" flex flex-row text-white">
              <Phone className="mr-3" />
              <p>+91 987xxxxxxx</p>
            </div>
            {/*  */}
            <div className=" flex flex-row mt-2 text-white">
              <Mail className="mr-3" />
              <p>InfoSystem@gmail.com</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(contactUs)} className="space-y-8">
            <div>
              <Label htmlFor="email" className=" text-blue-50">
                Your email
              </Label>
              <Input
                placeholder="Enter your email"
                type="email"
                className="mb-5"
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
              <Label htmlFor="subject" className=" text-blue-50">
                Subject
              </Label>
              <Input
                placeholder="Let us know how we can help you"
                type="text"
                className="mb-5"
                {...register("subject", {
                  required: false,
                })}
              />
              <Label htmlFor="message" className=" text-blue-50">
                Your message
              </Label>
              <Textarea
                placeholder="Leave a comment..."
                className="mb-5"
                rows="6"
                {...register("message", {
                  required: true,
                })}
              />

              <Button
                type="submit"
                // disabled
                className="w-full font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 "
              >
                Submit
              </Button>
            </div>
          </form>
          {loading && <LoadingButton />}
        </div>
      </section>
    </div>
  );
};

export default Contact;
