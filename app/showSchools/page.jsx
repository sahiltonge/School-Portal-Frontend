"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const BACKEND_URL = "https://school-portal-nbmh.onrender.com";

  // Fetch schools
  const fetchSchools = async (query = "") => {
    try {
      setLoading(true);
      const url = query
        ? `${BACKEND_URL}/api/schools/search?name=${query}`
        : `${BACKEND_URL}/api/schools`;
      const { data } = await axios.get(url);
      setSchools(data);
      setNoResults(data.length === 0);
    } catch (err) {
      console.error(err);
      setSchools([]);
      setNoResults(true);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchSchools();
  }, []);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSchools(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-10 p-5">
        <h2 className="text-2xl font-bold mb-4">Schools</h2>

        <input
          type="text"
          placeholder="Search by school name..."
          className="w-full p-2 border rounded mb-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading ? (
          <div className="text-center py-10 text-lg">Loading schools...</div>
        ) : noResults ? (
          <div className="text-center py-10 text-lg text-red-500">
            No results found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {schools.map((school) => (
              <div
                key={school.id}
                className="bg-white rounded shadow hover:shadow-lg hover:scale-105 transition transform p-4 flex flex-col items-center"
              >
                <img
                  src={school.image} // Cloudinary URL from DB
                  alt={school.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h3 className="text-lg font-semibold text-center">
                  {school.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {school.address}, {school.city}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
