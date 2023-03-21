export interface RadioComponentProps {
  setSearchType: React.Dispatch<
    React.SetStateAction<"eq" | "sw" | "ew" | "mi">
  >;
  radioId: string;
}
