import Article from "@/app/modules/Article";
import connectArticles from "@/app/utils/ArticleDb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connectArticles();
    const articles = await Article.find(username && { username });
    return new NextResponse(JSON.stringify(articles), { status: 200 });
  } catch (error) {
    return new NextResponse("error database", { status: 500 });
  }
};
export const POST = async (request) => {
  const body = await request.json();
  const newBlog = new Article(body);
  try {
    await connectArticles();
    await newBlog.save();
    return new NextResponse("post has been created", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
