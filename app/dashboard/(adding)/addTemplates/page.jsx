import React from "react";
import AddNewPost from "@/app/components/AddNewPost";
import NavigationBar from "@/app/components/NavigationBar";

export default function Page() {
  return (
    <div className="w-full h-auto p-8 py-8 md:py-2 sm:p-2 sm:py-2">
      <NavigationBar/>
     <AddNewPost /> 
    </div>
  );
}
