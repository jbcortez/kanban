import { useAppSelector } from "../redux/hooks";
import { Columns } from "../types";

export default function useGetColumns(): Columns {
  return useAppSelector((state) => state.kanban.columns);
}
