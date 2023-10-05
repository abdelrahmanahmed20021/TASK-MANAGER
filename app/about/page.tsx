"use client";
import Link from "next/link";

import { QueryCache } from "@tanstack/react-query";

export default function About() {
  const queryCache = new QueryCache({
    onError: (error: any) => {
      console.log(error);
    },
    onSuccess: (data: any) => {
      console.log(data);
    },
  });

  const query = queryCache.find(["todos"]);
  console.log(query);

  return (
    <div>
      <div>
        <h1>
          <Link href={"/"}>Home</Link>
        </h1>
      </div>
      <div></div>
    </div>
  );
}
