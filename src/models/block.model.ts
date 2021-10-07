import { Attributes } from "./attributes.model";

export interface Block {
  id: string;
  type: string;
  attributes: Attributes;
}
