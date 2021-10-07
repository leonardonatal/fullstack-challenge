import { Block } from "./block.model";

export interface Node {
  url: string;
  online: boolean;
  name: string;
  loading: boolean;
  status?: string;
  blocks?: Block[];
}
