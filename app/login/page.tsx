"use client";

import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Login</h1>
      <br />
      <button
        onClick={() => {
          fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ newUserId: "1" }),
          }).then(() => {
            router.push("/");
            router.refresh(); // required because otherwise the page will not re-render
          });
        }}
      >
        Login and become user 1
      </button>
    </div>
  );
}
