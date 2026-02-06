export type ProjectCategory = "AI" | "Web" | "Design";

export interface Project {
  title: string;
  category: ProjectCategory;
  image_url: string;
  tech_stack: string[];
}
