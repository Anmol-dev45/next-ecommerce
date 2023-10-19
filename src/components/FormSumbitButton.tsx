"use client";

import { ComponentProps } from "react";
import { experimental_useFormStatus  as useFormStatus} from "react-dom";

type FormSumbmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;
export default function FormSumbmitButton({
  children,
  className,
  ...props
}: FormSumbmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      disabled={pending}
      type="submit"
      className={`btn btn-primary ${className}`}
    >
      {children}
      {pending && <span className="loading loading-spinner" />}
    </button>
  );
}
