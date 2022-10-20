import { render } from "@testing-library/react";
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
});
