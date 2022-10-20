import {
  render as testingLibraryRender,
  RenderOptions,
} from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AllTestProviders: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 0 } },
  });

  return (
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MemoryRouter>
  );
};

export const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => testingLibraryRender(ui, { wrapper: AllTestProviders, ...options });
