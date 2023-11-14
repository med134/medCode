import { NextResponse } from "next/server";
import connectArticles from "@/app/utils/ArticleDb";
import Comments from "@/app/modules/Comments";
export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const blogId = searchParams.get("blogId");
  const username = searchParams.get("username");
  try {
    await connectArticles();

    let query = {};

    if (blogId) {
      query.blogId = blogId;
    }

    if (username) {
      query.username = username;
    }
    const comments = await Comments.find(query);
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
export const POST = async (req) => {
  const body = await req.json();
  const newComment = new Comments(body);
  try {
    await connectArticles();
    await newComment.save();
    return new NextResponse("comment has been created", { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
