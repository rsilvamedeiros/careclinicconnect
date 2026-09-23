import { LoginForm } from "@/features/auth/components/LoginForm";
import { Card, CardContent, Logo } from "@/shared/ui";

export function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="lg:hidden">
        <Logo />
      </div>
      <Card>
        <CardContent className="p-8">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
