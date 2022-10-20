import AddTimeEntryForm from "./AddTimeEntryForm";
import { render } from "../../tests/render";
import { act, findByRole, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
/* eslint-disable testing-library/no-unnecessary-act */
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

  test("the button should be enabled after filling the endTime", async () => {
    render(<AddTimeEntryForm />);

    const endTimeInput = await screen.findByRole("textbox", {
      name: /end time/i,
    });

    await act(async () => {
      await userEvent.type(endTimeInput, "13:00");
    });

    const saveButton = await screen.findByRole("button", {
      name: /save/i,
    });

    expect(saveButton).toBeEnabled();
  });
});
