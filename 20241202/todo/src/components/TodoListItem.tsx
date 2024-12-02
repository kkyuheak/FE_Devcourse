import { ChangeEvent, useState } from "react";

interface TodoListItemProps {
  title: string;
  index: number;
  deleteTodo: (i: number) => void;
}

export default function TodoListItem({
  title,
  index,
  deleteTodo,
}: TodoListItemProps) {
  const [isDone, setIsDone] = useState(false);

  const handleDone = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDone(e.target.checked);
  };

  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={isDone}
          onChange={handleDone}
        />
        <span className={isDone ? "line-through" : ""}>{title}</span>
      </div>
      <button
        onClick={() => {
          deleteTodo(index);
          setIsDone(false);
        }}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
}