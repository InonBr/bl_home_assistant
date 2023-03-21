import axios from "axios";
import { queryUrl } from "./urls";
import { QueryResult } from "./interfaces";

export const queryRequest = async (
  q: string
): Promise<ReadonlyArray<QueryResult>> =>
  await (
    await axios.get(`${queryUrl}${q}`)
  ).data;
