export interface TaskRelease {
  _id: string;
  task: string;
  hours: number;
  minutes: number;
  month: { month: number; year: number };
}
