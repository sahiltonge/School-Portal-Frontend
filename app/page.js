import Navbar from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

      <footer className="w-full py-4 bg-gray-100 flex justify-center items-center gap-6 mt-6">
        {/* GitHub */}
        <Link
          href="https://github.com/sahiltonge"
          target="_blank"
          className="flex items-center gap-1 text-gray-800 hover:text-black"
        >
          <FaGithub size={20} />
          GitHub
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/sahil-tonge/"
          target="_blank"
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </Link>
      </footer>
    </>
  );
}
