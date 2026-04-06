export interface Project{
    image:string;
    title:string;
    description:string;
    techStack:string[];
    liveDemo?:string;
    sourceCode?:string;
    type: "frontend" | "email";
}