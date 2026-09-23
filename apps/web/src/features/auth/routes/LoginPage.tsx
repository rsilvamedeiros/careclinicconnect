import { LoginForm } from "@/features/auth/components/LoginForm";
import { Logo } from "@/shared/ui";

export function LoginPage() {
  return (
    <div className="space-y-12">
      <div className="lg:hidden">
        <Logo />
      </div>
      <LoginForm />
    </div>
  );
}
