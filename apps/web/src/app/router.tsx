import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/providers/AuthProvider";
import { Skeleton } from "@/shared/ui";

import { AppShell } from "./layout/AppShell";
import { AuthLayout } from "./layout/AuthLayout";
import { ComingSoonPage } from "./layout/ComingSoonPage";
import { NAV_ITEMS } from "./layout/navItems";

// Route-level code splitting — see ADR 0002 ("code-splitting por rota precisa
// ser explícito" ao abandonar o file-based splitting automático do Next.js).
const LoginPage = lazy(() =>
  import("@/features/auth/routes/LoginPage").then((m) => ({ default: m.LoginPage })),
);
const DashboardPage = lazy(() =>
  import("@/features/dashboard/routes/DashboardPage").then((m) => ({ default: m.DashboardPage })),
);
const PatientsListPage = lazy(() =>
  import("@/features/patients/routes/PatientsListPage").then((m) => ({
    default: m.PatientsListPage,
  })),
);
const PatientProfilePage = lazy(() =>
  import("@/features/patients/routes/PatientProfilePage").then((m) => ({
    default: m.PatientProfilePage,
  })),
);
const CrmPage = lazy(() =>
  import("@/features/crm/routes/CrmPage").then((m) => ({ default: m.CrmPage })),
);

function RouteFallback() {
  return (
    <div className="space-y-4 p-8">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-40" />
    </div>
  );
}

function LazyRoute({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<RouteFallback />}>{children}</Suspense>;
}

function RequireAuth() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas">
      <p className="text-ink-muted">Página não encontrada.</p>
    </div>
  );
}

const comingSoonRoutes = NAV_ITEMS.filter((item) => item.comingSoon).map((item) => ({
  path: item.to.slice(1),
  element: <ComingSoonPage title={item.label} icon={item.icon} />,
}));

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/dashboard" replace /> },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: (
          <LazyRoute>
            <LoginPage />
          </LazyRoute>
        ),
      },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      {
        element: <AppShell />,
        children: [
          {
            path: "/dashboard",
            element: (
              <LazyRoute>
                <DashboardPage />
              </LazyRoute>
            ),
          },
          {
            path: "/pacientes",
            element: (
              <LazyRoute>
                <PatientsListPage />
              </LazyRoute>
            ),
          },
          {
            path: "/pacientes/:patientId",
            element: (
              <LazyRoute>
                <PatientProfilePage />
              </LazyRoute>
            ),
          },
          {
            path: "/crm",
            element: (
              <LazyRoute>
                <CrmPage />
              </LazyRoute>
            ),
          },
          ...comingSoonRoutes,
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
