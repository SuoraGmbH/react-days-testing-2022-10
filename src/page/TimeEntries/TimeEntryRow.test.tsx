import { render, screen } from "@testing-library/react";
import TimeEntryRow from "./TimeEntryRow";
import TimeEntry from "../../domain/TimeEntry";
const timeEntry: TimeEntry = {
  id: "dousoijdsjiodsa",
  startTime: "13:30",
  endTime: "15:00",
  projectId: "2",
  date: "2022-10-20",
  comment: "Anfangen React Testing zu lernen",
};

describe("<TimeEntryRow />", () => {
  test("smoke detector 🔥", () => {
    render(
      <table>
        <tbody>
          <TimeEntryRow timeEntry={timeEntry} />
        </tbody>
      </table>
    );
  });

  test("renders the comment", () => {
    // ARRANGE
    render(
      <table>
        <tbody>
          <TimeEntryRow timeEntry={timeEntry} />
        </tbody>
      </table>
    );

    // ASSERT
    expect(screen.queryByText(/anfangen react testing/i)).toBeInTheDOM();
  });

  test("renders according to full snapshot", () => {
    const { container } = render(
      <table>
        <tbody>
          <TimeEntryRow timeEntry={timeEntry} />
        </tbody>
      </table>
    );

    expect(container).toMatchSnapshot();
  });

  test("renders according to text content snapshot", () => {
    const { container } = render(
      <table>
        <tbody>
          <TimeEntryRow timeEntry={timeEntry} />
        </tbody>
      </table>
    );
    expect(container.textContent).toMatchInlineSnapshot(
      `"22022-10-20ANFANGEN REACT TESTING ZU LERNEN"`
    );
  });
});
