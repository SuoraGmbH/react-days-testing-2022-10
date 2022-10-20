import AddTimeEntryForm from "./AddTimeEntryForm";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("<AddTimeEntryForm />", () => {
  test("smoke detector :fire:", () => {
    const client = new QueryClient();
    render(
      <MemoryRouter>
        <QueryClientProvider client={client}>
          <AddTimeEntryForm />
        </QueryClientProvider>
      </MemoryRouter>
    );
  });
});
