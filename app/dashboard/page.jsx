"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import useSWR from "swr";
import Loading from "../loading";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  console.log(session);
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  });

  return (
    <div>
      <h1>Dash</h1>
    </div>
  );
};

export default Dashboard;
