
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../utils/atom/userAtom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign-Up
  const navigate = useNavigate();
  const [usertoken, setUsertoken] = useRecoilState(userState);

  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/login" : "/signup";

    try {
      const response = await axios.post(`http://localhost:2020${endpoint}`, form);
      if (response.data.status === "Added successfully" || response.data.status === "Login successful") {
        toast.success(response.data.status, { position: "top-right" });
        if (isLogin) {
          // alert(response.data.jwttoken);
          setUsertoken(response.data.jwttoken); // Save logged-in user data to global state
          navigate("/"); // Redirect to the homepage
        } else {
          toggleForm(); // Switch to login after successful sign-up

        }
      } else {
        toast.error("An error occurred", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Authentication failed", { position: "top-right" });
      console.error(error);
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-3xl font-bold">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={form.username}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full px-3 py-2 border rounded-lg text-black"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full px-3 py-2 border rounded-lg text-black"
                  />
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-lg text-black"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-lg text-black"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-4"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={toggleForm} className="text-blue-600 hover:underline">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;










