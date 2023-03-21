import { QueryResult } from "../../lib/interfaces";

export interface RadioComponentProps {
  setSearchType: React.Dispatch<
    React.SetStateAction<"eq" | "sw" | "ew" | "mi">
  >;
  radioId: string;
}

export interface QueryFormParams {
  setResult: React.Dispatch<React.SetStateAction<ReadonlyArray<QueryResult>>>;
}
