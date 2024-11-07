import { IUserSerialization } from "./iuser-serialization";

export interface ICommentSerialization {
  response: string;
  Person: IUserSerialization
}
