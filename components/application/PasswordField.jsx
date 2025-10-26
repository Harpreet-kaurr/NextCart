// components/form/PasswordField.tsx
"use client";
import { useState } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

export default function PasswordField({
  className = "",
  control,
  name,
  label,
  placeholder,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className={className}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="relative">
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Input
                {...field}
                type={show ? "text" : "password"}
                placeholder={placeholder}
              />
            </FormControl>

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-2 top-1/2 text-gray-500 hover:text-gray-700"
            >
              {show ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
