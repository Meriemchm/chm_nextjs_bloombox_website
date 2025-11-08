"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Button from "../ui/button";
import { Container } from "../ui/container";
import { useGsapFade } from "@/hooks/gsap-animations";

const membershipSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

type MembershipFormData = z.infer<typeof membershipSchema>;

export const Membership = () => {
  const fadeRef = useGsapFade("up");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MembershipFormData>({
    resolver: zodResolver(membershipSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: MembershipFormData) => {
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { email: data.email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success("Subscription successful!");
      reset();
    } catch (err) {
      console.error("Error sending email:", err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-secondary py-30 relative z-40">
      <Container>
        <div
          ref={fadeRef}
          className="relative z-40 flex flex-col justify-center items-center w-full"
        >
          <h2 className="pinyon-script-regular md:text-7xl text-5xl">
            Stay in Bloom
          </h2>
          <p className="py-8 max-w-sm text-center">
            Get tips, special offers, and first looks at new collections
            straight to your inbox.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 justify-center items-center w-full max-w-sm"
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              {...register("email")}
              className={`p-2 border ${
                errors.email ? "border-red-500" : "border-black"
              } w-full`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm self-start">
                {errors.email.message}
              </p>
            )}

            <Button
              type="submit"
              className="bg-fourthary self-end px-8"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
        </div>

        <Image
          src="/Images/flower-sub.png"
          alt="flower-sub"
          width={500}
          height={500}
          className="absolute md:left-0 md:-top-38 -top-50 -left-50"
        />
      </Container>
    </div>
  );
};
