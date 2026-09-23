import { Controller } from "react-hook-form";

import { Lock } from "@/shared/icons";
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
    <form onSubmit={onSubmit} className="space-y-9" noValidate>
      <div>
        <p className="mb-3 text-[11px] font-semibold tracking-[.16em] text-[#416f7d] uppercase">
          Portal da clínica
        </p>
        <h1 className="font-display text-[2.35rem] leading-none font-semibold tracking-[-.055em] text-[#172a3a]">
          Acesse seu espaço
        </h1>
        <p className="text-ink-muted mt-4 text-[15px] leading-6">
          Use seu e-mail profissional para continuar.
        </p>
      </div>

      <div className="space-y-5.5">
        <FormField id="email" label="E-mail" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="nome@clinica.com.br"
            className="h-12 border-[#d6dddf] bg-white focus:border-[#719eab]"
            {...register("email")}
          />
        </FormField>

        <FormField id="password" label="Senha" error={errors.password?.message}>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="Digite sua senha"
            className="h-12 border-[#d6dddf] bg-white focus:border-[#719eab]"
            {...register("password")}
          />
        </FormField>

        {loginError && (
          <p role="alert" className="text-danger text-sm font-medium">
            {loginError}
          </p>
        )}

        <div className="flex items-center justify-between gap-4 pt-0.5">
          <div className="flex items-center gap-2">
            <Controller
              control={control}
              name="rememberMe"
              render={({ field }) => (
                <Checkbox
                  id="rememberMe"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:border-[#416f7d] data-[state=checked]:bg-[#416f7d]"
                />
              )}
            />
            <Label htmlFor="rememberMe" className="text-ink-muted text-xs font-normal sm:text-sm">
              Lembrar neste dispositivo
            </Label>
          </div>
          <button
            type="button"
            className="shrink-0 text-xs font-semibold text-[#416f7d] hover:text-[#294f5b] sm:text-sm"
          >
            Esqueci minha senha
          </button>
        </div>
      </div>

      <div className="space-y-5">
        <Button
          type="submit"
          className="h-12 w-full bg-[#24495a] text-white hover:bg-[#172a3a]"
          size="lg"
          disabled={isLoggingIn}
        >
          {isLoggingIn ? "Entrando..." : "Entrar"}
        </Button>

        <div className="border-border flex items-start gap-2.5 border-t pt-5">
          <Lock size={15} weight="duotone" className="text-ink-muted mt-0.5 shrink-0" />
          <p className="text-ink-muted text-[11px] leading-[1.55]">
            Seus dados são protegidos. Neste ambiente de demonstração, use qualquer senha com 4 ou
            mais caracteres.
          </p>
        </div>
      </div>
    </form>
  );
}
