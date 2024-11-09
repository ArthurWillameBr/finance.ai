import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Navbar } from "./_components/navbar";

export default async function Home() {
  const { userId } = await auth()

  if(!userId) {
    redirect("/login")
  }

  return (
    <div className="flex items-center justify-center">
      <Navbar />
    </div>
  );
}
