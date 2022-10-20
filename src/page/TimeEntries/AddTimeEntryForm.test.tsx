import AddTimeEntryForm from "./AddTimeEntryForm";
import { render } from "../../tests/render";
import { screen } from "@testing-library/react";

describe("<AddTimeEntryForm />", () => {
  test("smoke detector :fire:", () => {
    render(<AddTimeEntryForm />);
  });

  test("initially renders a loading indicator", () => {
    render(<AddTimeEntryForm />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
