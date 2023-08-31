import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Posts from "@/app/modules/Post";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const post = await Posts.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Error database", { status: 500 });
  }
};

