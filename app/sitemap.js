import routes from "./routes.json";
import { getAll } from "./components/FetchData";
 
export default async function sitemap() {
  const posts=await getAll();
  const baseUrl = "https://medcode.dev";
  const staticUrls = routes.map((route) => {
    return {
      url: `${baseUrl}${route.url}`,
      lastModified: new Date().toISOString(),
    };
  });
  const AllPosts = posts.map((item) => {
    return {
      url: `${baseUrl}/templates/${item._id}`,
      lastModified: new Date().toISOString(),
    };
  });
  return [...staticUrls,...AllPosts];
}

