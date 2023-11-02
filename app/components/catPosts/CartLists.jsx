import React from "react";
const getData = async (slug) => {
  const res = await fetch(
    `http://localhost:3000/api/articles?category=${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const CardList = async ({ slug }) => {
  const blog = await getData(slug);

  return (
    <div className="">
      <h1 className="">Recent Posts</h1>
      <div className="">
        {blog?.map((item) => (
          <h1 key={item._id}>hello from {item.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default CardList;
