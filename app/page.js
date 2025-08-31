import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
        <h1 className="text-3xl font-bold">Welcome to School Portal</h1>
        <div className="flex gap-4">
          <Link href="/addSchool" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add School</Link>
          <Link href="/showSchools" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Show Schools</Link>
        </div>
      </div>
    </>
  );
}
