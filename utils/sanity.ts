import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ycly4t7l",
  dataset: "production",
  useCdn: true,
});
