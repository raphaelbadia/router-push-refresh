import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }) {
  const userId = cookies().get("user")?.value;

  if (userId) {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      { headers: { Authorization: "Bearer " + userId, cache: "no-store" } }
    );
    const user = await userResponse.json();

    return (
      <html>
        <head />
        <body
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            maxWidth: 400,
          }}
        >
          <header style={{ backgroundColor: "skyblue" }}>
            Hello {user.username}, your id is {user.id}
          </header>
          <main style={{ backgroundColor: "burlywood", margin: 4 }}>
            {children}
          </main>
          <footer style={{ backgroundColor: "skyblue" }}>
            Your username is {user.username} and your name is {user.name}!
          </footer>
        </body>
      </html>
    );
  } else {
    return (
      <html>
        <head />
        <body
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            maxWidth: 400,
          }}
        >
          <header style={{ backgroundColor: "skyblue" }}>Logged out</header>
          <main style={{ backgroundColor: "burlywood", margin: 4 }}>
            {children}
          </main>
          <footer style={{ backgroundColor: "skyblue" }}>
            You are logged out, please login
          </footer>
        </body>
      </html>
    );
  }
}
