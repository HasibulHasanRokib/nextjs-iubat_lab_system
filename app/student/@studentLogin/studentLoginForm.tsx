"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { studentLogin } from "@/app/student/@studentLogin/action";
import SuccessMessage from "@/components/successMessage";
import ErrorMessage from "@/components/errorMessage";
import {
  studentLoginSchema,
  TStudentLoginSchema,
} from "@/lib/student/validation";

export default function StudentLoginForm() {
  const form = useForm<TStudentLoginSchema>({
    resolver: zodResolver(studentLoginSchema),
    defaultValues: {
      studentId: "",
      password: "",
    },
  });

  const queryClient = useQueryClient();

  const { mutate, data, isPending } = useMutation({
    mutationKey: ["student-login/logout"],
    mutationFn: studentLogin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["active-students"] });
    },
  });

  function onSubmit(values: TStudentLoginSchema) {
    mutate(values);
    form.reset();
  }

  return (
    <div className="space-y-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-2">
          <FormField
            control={form.control}
            name="studentId"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter Student ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button disabled={isPending} type="submit">
              {isPending ? "Loading..." : "Login / Logout"}
            </Button>
          </div>
        </form>
      </Form>

      <div className="text-center">
        {data && data.success ? <SuccessMessage message={data.success} /> : ""}
        {data && data.error ? <ErrorMessage message={data.error} /> : ""}
      </div>
    </div>
  );
}
