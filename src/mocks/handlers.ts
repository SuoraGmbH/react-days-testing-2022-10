import { rest } from "msw";
import projectsSuccessHandler from "./api/projects/success";
export const handlers = [projectsSuccessHandler];
