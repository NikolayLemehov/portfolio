export interface IRepository {
  name: string;
  link: string;
}

export interface IProject {
  name: string;
  description: string;
  web: string;
  repositories: IRepository[];
}
