import Article from "@/app/modules/Article";
import connectArticles from "@/app/utils/ArticleDb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const id = params.id;
  try {
    await connectArticles();
    const articles = await Article.findById(id);
    return new NextResponse(JSON.stringify(articles), { status: 200 });
  } catch (error) {
    return new NextResponse("error database", { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connectArticles();
     await Article.findByIdAndDelete(id)
    return new NextResponse("post deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};