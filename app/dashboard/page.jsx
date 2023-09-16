/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Loading from "../loading";
import AddNewPost from "../components/AddNewPost";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export const metadata = {
  title: "dashboard",
};
const Dashboard = () => {
  const session = useSession();
  const route = useRouter();
  if (session.status === "loading") {
    return <Loading />;
  }
  if (session.status === "unauthenticated") {
    route?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return <AddNewPost />;
  }
};

export default Dashboard;
