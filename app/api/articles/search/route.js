import Article from "@/app/modules/Article";
import connectArticles from "@/app/utils/ArticleDb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  console.log("search query", query);
  try {
    await connectArticles();
    const articles = await Article.find();

    const filterArticles = articles.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });

    return new NextResponse(JSON.stringify(filterArticles), { status: 200 });
  } catch (error) {
    return new NextResponse("error database", { status: 500 });
  }
};
