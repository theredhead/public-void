export interface IAuthor {
    name?: string,
    email: string,
}
export interface IProject {
  platform?: string;
  tags?: string[];
  name: string;
  href?: string;
  demo?: string;
  description?: string;
  authors?: IAuthor[];
}
