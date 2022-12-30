export type Column = {
  id: string;
  title: string;
  tasks: Tasks;
};

export type Columns = Column[];

export interface Task {
  id: string;
  description: string;
  userId: string;
  columnId: string;
  status: "open" | "closed";
}

export type Tasks = Task[];

export interface User {
  id: string;
  columns: Columns;
}
