import AddTimeEntryForm from "./AddTimeEntryForm";
import { render } from "../../tests/render";

describe("<AddTimeEntryForm />", () => {
  test("smoke detector :fire:", () => {
    render(<AddTimeEntryForm />);
  });
});
