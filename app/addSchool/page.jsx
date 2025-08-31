"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [imagePreview, setImagePreview] = useState(null);

  const watchImage = watch("image");

  // Update image preview whenever image file changes
  useEffect(() => {
    if (watchImage && watchImage[0]) {
      const file = watchImage[0];
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  }, [watchImage]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("contact", data.contact);
    formData.append("email_id", data.email_id);
    formData.append("image", data.image[0]);

    try {
      await axios.post("https://school-portal-nbmh.onrender.com/api/schools", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("School Added Successfully");
      reset();
      setImagePreview(null);
    } catch (err) {
      console.log(err.response?.data || err);
      toast.error("Error adding school");
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-10 p-5 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Add New School</h2>

        <input {...register("name", { required: true })} placeholder="School Name" className="w-full p-2 border rounded mb-2"/>
        {errors.name && <span className="text-red-500">Name required</span>}

        <input {...register("address", { required: true })} placeholder="Address" className="w-full p-2 border rounded mb-2"/>
        {errors.address && <span className="text-red-500">Address required</span>}

        <input {...register("city", { required: true })} placeholder="City" className="w-full p-2 border rounded mb-2"/>
        {errors.city && <span className="text-red-500">City required</span>}

        <input {...register("state", { required: true })} placeholder="State" className="w-full p-2 border rounded mb-2"/>
        {errors.state && <span className="text-red-500">State required</span>}

        <input type="number" {...register("contact", { required: true })} placeholder="Contact" className="w-full p-2 border rounded mb-2"/>
        {errors.contact && <span className="text-red-500">Contact required</span>}

        <input type="email" {...register("email_id", { required: true })} placeholder="Email" className="w-full p-2 border rounded mb-2"/>
        {errors.email_id && <span className="text-red-500">Valid email required</span>}

        <input type="file" {...register("image", { required: true })} className="w-full p-2 border rounded mb-2"/>
        {errors.image && <span className="text-red-500">Image required</span>}

        {imagePreview && (
          <div className="mb-2">
            <p className="text-sm text-gray-500 mb-1">Preview:</p>
            <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded border" />
          </div>
        )}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2 w-full">
          Add School
        </button>
      </form>
    </>
  );
}
