
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// import { signup, login } from "./api";

const API_URL = "http://localhost:5050"; // Update this if your backend is hosted elsewhere.

const AuthPage = () => {
  const Navigate =useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === "login") {
        const response = await axios.post(`${API_URL}/login`, {
          username: formData.username,
          password: formData.password,
        });

        if (response.data.status === "success") {
          toast.success(response.data.message);
          localStorage.setItem("usertoken", response.data.token);
          localStorage.setItem("customerid",response.data.customerid)
          
          Navigate("/")
          console.log(response.data )
          console.log(response.data.customerid);

        } else {
          toast.error(response.data.message);
        }
      } else if (activeTab === "register") {
        const response = await axios.post(`${API_URL}/signup`, formData);

        if (response.data.status === "success") {
          toast.success(response.data.message);
          setActiveTab("login"); // Switch to login after successful sign-up
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                {activeTab === "login" ? "Login" : "Register"}
              </h2>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="flex space-x-2 text-gray-600">
                <li>
                  <a href="/" className="hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li className="text-gray-500">
                  {activeTab === "login" ? "Login" : "Register"}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Auth Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 text-lg font-semibold rounded-t-md border-b-2 ${
                activeTab === "login"
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 border-transparent"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 text-lg font-semibold rounded-t-md border-b-2 ${
                activeTab === "register"
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 border-transparent"
              }`}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
          </div>

          {activeTab === "login" ? (
            <div
              id="login"
              className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
            >
              <h3 className="text-2xl font-semibold mb-6">Login</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username" className="block text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
                >
                  Login
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
              <h3 className="text-2xl font-semibold mb-6">Create Account</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fullname" className="block text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Enter your full name"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="username" className="block text-gray-700">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your User Name"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
                >
                  Create Account
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AuthPage;