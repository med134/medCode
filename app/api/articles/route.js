import Article from "@/app/modules/Article";
import connectArticles from "@/app/utils/ArticleDb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  const category = url.searchParams.get("category");
  const title = url.searchParams.get("title");

  try {
    await connectArticles();
    const query = {};

    if (username) {
      query.username = username;
    }
    if (title) {
      query.title = { $regex: title, $options: 'i' };
    }

    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }
    const articles = await Article.find(query);
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
