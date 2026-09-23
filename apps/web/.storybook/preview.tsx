import "@fontsource-variable/fraunces";
import "@fontsource-variable/public-sans";
import "../src/shared/styles/global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Decorator, Preview } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import { AuthProvider } from "../src/providers/AuthProvider";
import { ThemeProvider } from "../src/providers/ThemeProvider";

const withProviders: Decorator = (Story) => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const preview: Preview = {
  decorators: [withProviders],
  parameters: {
    backgrounds: {
      default: "canvas",
      values: [{ name: "canvas", value: "#fdfbf7" }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
