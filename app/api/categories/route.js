import connectArticles from "@/app/utils/ArticleDb";
import { NextResponse } from "next/server";
import Category from "@/app/modules/Categories";

export const GET = async () => {
  try {
    await connectArticles();
    const categories = await Category.find();
    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};


