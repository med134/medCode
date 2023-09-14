import routes from "./routes.json";
export default function sitemap() {
  const baseUrl = "https://medcode.dev";
  const staticUrls = routes.map((route) => {
    return {
      url: `${baseUrl}${route.url}`,
      lastModified: new Date(),
    };
  });
  return [...staticUrls];
}
