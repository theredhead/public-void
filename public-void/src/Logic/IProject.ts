export interface IAuthor {
    name?: string,
    email: string,
}
export interface IProject {
    name: string;
    href?: string;
    demo?: string,
    description?: string
    authors?: IAuthor[]
}  