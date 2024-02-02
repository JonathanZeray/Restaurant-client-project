// File for creating the studio
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "oo9j0glp",
  dataset: "production",
  title: "Pissamai Thai Food",
  apiVersion: "2023-10-03",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
