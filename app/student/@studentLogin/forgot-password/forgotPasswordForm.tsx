"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { forgotPasswordAction } from "./action";
import SuccessMessage from "@/components/successMessage";
import ErrorMessage from "@/components/errorMessage";
import {
  forgotPasswordSchema,
  TForgotPasswordSchema,
} from "@/lib/student/validation";

export default function ForgotPasswordForm() {
  const form = useForm<TForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const { mutate, data, isPending } = useMutation({
    mutationKey: ["forgot-password"],
    mutationFn: forgotPasswordAction,
    onSuccess: (data) => {
      if (data.success) {
        form.reset();
      }
    },
  });

  const submit = (values: TForgotPasswordSchema) => {
    mutate(values);
  };
  return (
    <div className="space-y-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)} className="flex gap-2">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} type="submit">
            {isPending ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Form>
      <div>
        {data && data.success ? <SuccessMessage message={data.success} /> : ""}
        {data && data.error ? <ErrorMessage message={data.error} /> : ""}
      </div>
    </div>
  );
}
