import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Posts from "@/app/modules/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connect();
    const posts = await Posts.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};
/* export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Posts(body);
  try {
    await connect();
    await newPost.save()
    return new NextResponse("new post has been created",{status:201});
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
}; */
