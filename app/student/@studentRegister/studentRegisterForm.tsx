"use client";

import {
  studentRegisterSchema,
  TStudentRegisterSchema,
} from "@/lib/student/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { registration } from "@/app/student/@studentRegister/action";
import ErrorMessage from "@/components/errorMessage";
import SuccessMessage from "@/components/successMessage";
import { useState } from "react";

export default function StudentRegisterForm() {
  const [showMessage, setShowMessage] = useState(false);

  const form = useForm<TStudentRegisterSchema>({
    resolver: zodResolver(studentRegisterSchema),
    defaultValues: {
      studentId: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      gender: undefined,
      program: undefined,
    },
  });

  const { mutate, data, isPending } = useMutation({
    mutationKey: ["student-registration"],
    mutationFn: registration,
    onSuccess: () => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    },
  });

  const submit = (values: TStudentRegisterSchema) => {
    mutate(values);
    form.reset();
  };

  return (
    <>
      {data && data.error ? <ErrorMessage message={data.error} /> : ""}
      {showMessage && data && data.success ? (
        <SuccessMessage message={data.success} />
      ) : (
        ""
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)} className="space-y-3">
          <FormField
            control={form.control}
            name="studentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student ID</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter Student ID" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="program"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Program</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue="">
                    <SelectTrigger>
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BCSE">BCSE</SelectItem>
                      <SelectItem value="BSEEE">BSEEE</SelectItem>
                      <SelectItem value="BBA">BBA</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter Full Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue="">
                    <SelectTrigger>
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter Mobile Number" />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter Password"
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
    </>
  );
}
