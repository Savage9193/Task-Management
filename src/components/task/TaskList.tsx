import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import { AnimatePresence, motion } from "framer-motion";
import { FiInbox } from "react-icons/fi";
import { Task } from "../../types/task";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  view: "list" | "card";
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
  onToggle: (id: string) => void;
  onReorder: (fromIndex: number, toIndex: number) => void;
}

export const TaskList = ({ tasks, view, onEdit, onDelete, onToggle, onReorder }: TaskListProps) => {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    onReorder(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="task-list">
        {(provided) => (
          <section
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`grid gap-3 ${view === "card" ? "sm:grid-cols-2 xl:grid-cols-3" : ""}`}
          >
            {tasks.length === 0 ? (
              <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 dark:bg-sky-900/40 dark:text-sky-300">
                  <FiInbox size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">No tasks found</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Create a new task or adjust your filters to see results.
                </p>
              </div>
            ) : (
              <AnimatePresence>
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(dragProvided) => (
                      <div
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                      >
                        <motion.div layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}>
                          <TaskCard task={task} view={view} onEdit={onEdit} onDelete={onDelete} onToggle={onToggle} />
                        </motion.div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </AnimatePresence>
            )}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
};
