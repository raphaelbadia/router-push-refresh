import { cookies } from "next/headers";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  let name;

  const userId = cookies().get("user")?.value;
  console.log("userId compute on home page");

  if (userId) {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      { headers: { Authorization: "Bearer " + userId }, cache: "no-store" }
    );
    const user = await userResponse.json();
    name = user.username;
  }
  return (
    <div>
      <h1>Home</h1>
      Hello, {name ?? "guest"}
      <br />
      <br />
      {name ? (
        <Link href="/logout">Logout</Link>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}
