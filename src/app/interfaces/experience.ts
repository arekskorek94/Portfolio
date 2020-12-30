import { IResponsibilities } from "./responsibilities";

export interface IExperience {
  id: number | null;
  name: string;
  corporation: string;
  periodOfWork: string;
  responsibilities : IResponsibilities[] | null;
}
