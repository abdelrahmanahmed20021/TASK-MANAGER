"use client";
import axios from "axios";
import Link from "next/link";

import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["todos"],
    // enabled: false,
    queryFn: async ({ queryKey }: { queryKey: any }) => {
      const req = await axios.get(
        "https://chatter-xcdx.onrender.com/api/users",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpZWcyMzFAZ21haWwuY29tIiwiaWF0IjoxNjk2NDcwNDM5LCJleHAiOjE2OTY1NTY4Mzl9.SxaYd44ZCiSwYFezRQZ1N5f-bFiLm_NKyfruTRxFHuQ",
          },
        }
      );
      const { data } = await req.data;

      return data;
    },
  });
  const {
    data: data2,
    isLoading: loading2,
    error: error2,
    isError: is,
  } = useQuery({
    queryKey: ["todos"],
    // enabled: false,
    queryFn: async ({ queryKey }: { queryKey: any }) => {
      const req = await axios.get(
        "https://chatter-xcdx.onrender.com/api/users",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpZWcyMzFAZ21haWwuY29tIiwiaWF0IjoxNjk2NDcwNDM5LCJleHAiOjE2OTY1NTY4Mzl9.SxaYd44ZCiSwYFezRQZ1N5f-bFiLm_NKyfruTRxFHuQ",
          },
        }
      );
      const { data } = await req.data;

      return data;
    },
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (loading2) return <h1>Loading2...</h1>;

  return (
    <div>
      <div>
        <h1>
          <Link href={"/about"}>About</Link>
        </h1>
      </div>
      <div>
        {data.map((user: any) => {
          return <h1 key={user.id}>{user.email}</h1>;
        })}
      </div>
    </div>
  );
}
