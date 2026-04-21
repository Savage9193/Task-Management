import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TaskForm } from "./TaskForm";

describe("TaskForm", () => {
  it("submits valid values", async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    render(<TaskForm onSubmit={onSubmit} submitLabel="Create Task" />);

    await user.type(screen.getByLabelText("Title"), "Write docs");
    await user.type(screen.getByLabelText("Description"), "Prepare release docs");
    await user.type(screen.getByLabelText("Due date"), "2026-05-20");
    await user.click(screen.getByRole("button", { name: "Create Task" }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toMatchObject({
      title: "Write docs",
      description: "Prepare release docs",
      priority: "Medium",
      dueDate: "2026-05-20",
    });
  });
});
