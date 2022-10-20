import AddTimeEntryForm from "./AddTimeEntryForm";
import { render } from "../../tests/render";
import { findByRole, screen } from "@testing-library/react";

describe("<AddTimeEntryForm />", () => {
  test("smoke detector :fire:", () => {
    render(<AddTimeEntryForm />);
  });

  test("initially renders a loading indicator", () => {
    render(<AddTimeEntryForm />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("the button should be disabled initially", async () => {
    render(<AddTimeEntryForm />);

    const saveButton = await screen.findByRole("button", {
      name: /save/i,
    });

    expect(saveButton).toBeDisabled();
  });
});
