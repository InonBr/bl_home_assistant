import axios from "axios";
import { queryUrl } from "./urls";

export const queryRequest = async (q: string): Promise<any> =>
  await (
    await axios.get(`${queryUrl}${q}`)
  ).data;
