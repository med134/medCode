import { notFound } from "next/navigation";

export async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=med_code`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}
export async function getAll() {
  const res = await fetch(`https://www.medcode.dev/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}
export async function getArticles() {
  const res = await fetch(`https://www.medcode.dev/api/articles`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}
export async function getCategory() {
  const res = await fetch(`http://localhost:3000/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}
