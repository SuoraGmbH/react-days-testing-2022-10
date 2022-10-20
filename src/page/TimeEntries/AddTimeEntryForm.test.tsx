import AddTimeEntryForm from "./AddTimeEntryForm";
import { render } from "../../tests/render";
import { act, findByRole, getByText, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/server";
import error from "../../mocks/api/projects/error";
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
    // server.resetHandlers(error);
    render(<AddTimeEntryForm />);

    const endTimeInput = await screen.findByRole("textbox", {
      name: /end time/i,
    });

    await act(async () => {
      await userEvent.type(endTimeInput, "13:00");
      // getByText("13:00");
    });

    const saveButton = await screen.findByRole("button", {
      name: /save/i,
    });

    expect(saveButton).toBeEnabled();
  });
});
