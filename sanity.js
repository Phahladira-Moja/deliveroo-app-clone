import { createClient } from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "qj9tss8i",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageURLBuilder(client);
export const urlFor = (source) => builder.image(source);

// RUN this to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000

// Sanity deploy to deploy
export default client;
