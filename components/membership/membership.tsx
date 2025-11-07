"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
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
    try {
      setLoading(true);
      const res = await axios.post("/api/subscribe", data);

      toast.success(res.data.message || "Subscription successful!");
      reset();
    } catch (err: any) {
      console.error(err);
      toast.error(
        err.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-secondary py-30 relative z-40">
      <Container>
        <div ref={fadeRef} className="relative z-40 flex flex-col justify-center items-center w-full">
          <h2 className="pinyon-script-regular md:text-7xl text-5xl">
            Stay in Bloom
          </h2>
          <p className="py-8 max-w-sm text-center">
            Get tips, special offers, and first looks at new collections
            straight to your inbox.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              {...register("email")}
              className={`p-2 border ${
                errors.email ? "border-red-500" : "border-black"
              } w-64 md:w-96 `}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
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
