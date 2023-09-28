import React from "react";
import AddNewArticle from "@/app/components/AddNewArticle";
import NavigationBar from "@/app/components/NavigationBar";

export default function Page() {
  return (
    <div>
      <NavigationBar />
      <AddNewArticle />
    </div>
  );
}
