import Heading from "@/components/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
     <h2 className="text-3xl font-bold text-cyan-500">Welcome to our Next Hero!</h2>
     <Heading></Heading>
    </main>
  );
}
