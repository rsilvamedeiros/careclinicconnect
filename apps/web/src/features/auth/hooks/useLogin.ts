import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/providers/AuthProvider";

import { loginSchema, type LoginFormValues } from "../schemas/loginSchema";

export function useLogin() {
  const { login, isLoggingIn, loginError } = useAuth();
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "camila@lumiereclinica.com.br", password: "", rememberMe: true },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await login(values);
      navigate("/dashboard");
    } catch {
      // loginError from context already surfaces the message to the form.
    }
  });

  return { form, onSubmit, isLoggingIn, loginError };
}
