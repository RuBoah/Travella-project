import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import globe from "../../images/globe.png";
import { apiSignUp } from "../../services/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await apiSignUp({
        username,
        email,
        password,
        confirmPassword,
      });
console.log(response.data);


      // localStorage.setItem("accessToken", token);
      // localStorage.setItem("user", JSON.stringify(user));
      if (response.status == 201) {
       console.log("Sign Up Successfull");
        navigate("/properties");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.response?.data?.message || "Sign-up failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full">
        <div className="w-full lg:w-1/2 p-8 space-y-6 flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
            <p className="text-gray-600 mt-2">
              Create your account and start exploring beautiful destinations
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                User Name
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-1 items-center text-gray-700">
              <input type="checkbox" />
              <span className="text-base">Remember Password</span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#00A8CC] hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Create
            </button>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Log In
              </a>
            </div>
          </form>
        </div>

        <div className="hidden lg:block lg:w-1/2">
          <img
            src={globe}
            alt="Destination"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
