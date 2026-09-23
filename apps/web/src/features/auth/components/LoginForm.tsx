import { Controller } from "react-hook-form";

import { Button, Checkbox, FormField, Input, Label } from "@/shared/ui";

import { useLogin } from "../hooks/useLogin";

export function LoginForm() {
  const { form, onSubmit, isLoggingIn, loginError } = useLogin();
  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="space-y-1.5">
        <h1 className="font-display text-2xl font-semibold text-ink">Bem-vinda de volta</h1>
        <p className="text-sm text-ink-muted">Entre para acompanhar a operação da sua clínica.</p>
      </div>

      <div className="space-y-4">
        <FormField id="email" label="E-mail" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
        </FormField>

        <FormField id="password" label="Senha" error={errors.password?.message}>
          <Input id="password" type="password" autoComplete="current-password" {...register("password")} />
        </FormField>

        {loginError && (
          <p role="alert" className="text-sm font-medium text-danger">
            {loginError}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Controller
              control={control}
              name="rememberMe"
              render={({ field }) => (
                <Checkbox id="rememberMe" checked={field.value} onCheckedChange={field.onChange} />
              )}
            />
            <Label htmlFor="rememberMe" className="font-normal text-ink-muted">
              Manter conectado
            </Label>
          </div>
          <button
            type="button"
            className="text-sm font-medium text-accent hover:text-accent-strong"
          >
            Esqueci minha senha
          </button>
        </div>
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isLoggingIn}>
        {isLoggingIn ? "Entrando..." : "Entrar"}
      </Button>

      <p className="text-center text-xs text-ink-muted">
        Ambiente de demonstração — use qualquer senha com 4+ caracteres.
      </p>
    </form>
  );
}
