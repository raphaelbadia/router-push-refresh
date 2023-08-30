"use client";

import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Logout</h1>
      <br />
      Will delete the cookie
      <button
        onClick={() => {
          fetch("/api/logout", {
            method: "POST",
          }).then(() => {
            router.push("/");
            router.refresh();
          });
        }}
      >
        Logout
      </button>
    </div>
  );
}
