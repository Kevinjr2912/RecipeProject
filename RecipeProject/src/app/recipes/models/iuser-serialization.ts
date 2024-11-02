import { INationalitySerialization } from "./inationality-serialization";
import { ISpecialtySerialization } from "./ispecialty-serialization";

export interface IUserSerialization {
    first_name_person: string;
    middle_name_person: string;
    first_surname_person: string;
    middle_surname_person: string;
    nationality: INationalitySerialization;
    specialty: ISpecialtySerialization;
}
