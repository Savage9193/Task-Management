import { render, screen } from "@testing-library/react";
import { TaskCard } from "./TaskCard";
import { Task } from "../../types/task";

const task: Task = {
  id: "1",
  title: "Test task",
  description: "Task description",
  priority: "High",
  dueDate: "2026-12-01",
  completed: false,
  createdAt: "2026-01-01T00:00:00.000Z",
};

describe("TaskCard", () => {
  it("renders task details", () => {
    render(
      <TaskCard
        task={task}
        view="list"
        onEdit={jest.fn()}
        onDelete={jest.fn()}
        onToggle={jest.fn()}
      />,
    );

    expect(screen.getByText("Test task")).toBeInTheDocument();
    expect(screen.getByText("Task description")).toBeInTheDocument();
    expect(screen.getByText("High")).toBeInTheDocument();
  });
});
