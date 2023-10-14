import Category from "@/app/modules/Categories";
import connectArticles from "@/app/utils/ArticleDb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectArticles();
    const categories = await Category.find();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new NextResponse("error database", { status: 500 });
  }
};
