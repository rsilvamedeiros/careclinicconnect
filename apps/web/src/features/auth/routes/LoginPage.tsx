import { LoginForm } from "@/features/auth/components/LoginForm";
import { Logo } from "@/shared/ui";

export function LoginPage() {
  return (
    <div className="space-y-12">
      <div className="lg:hidden">
        <Logo className="text-[#172a3a] [&>span:first-child]:bg-[#719eab] [&>span:first-child]:text-white [&>span:last-child>span]:text-[#667982]" />
      </div>
      <LoginForm />
    </div>
  );
}
