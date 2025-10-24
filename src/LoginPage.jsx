import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.jpg";
import logo1 from "./assets/loginlogo.png";
export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-screen font-serif bg-white text-gray-800">
    {/* Navbar */}
    <header className="bg-[#4DB6AC99] flex justify-between items-center px-5 py-3 h-[90px]">
      <img className="w-[90px] h-[90px]" src={logo} alt="Logo" />
      <nav>
        <a href="/" className="mx-[30px] no-underline text-black text-[23px]">Home</a>
        <a href="#" className="mx-[30px] no-underline text-black text-[23px]">Find Doctors</a>
        <a href="#" className="mx-[20px] no-underline text-black text-[23px]"> My Appointments</a>
        <a href="#" className="mx-[30px] no-underline text-black text-[23px]">Health Records</a>
        </nav>
        <div className="flex items-center">
          <button className="text-[23px] mr-[25px] bg-[#007c91] text-white border-2 rounded-[20px] px-3 py-1 font-bold hover:bg-[#FFFFFF99] hover:text-black"
          onClick={() => navigate("/login")}>Login</button>
          <button className="text-[23px] mr-[20px] bg-[#007c91] text-white border-2 rounded-[20px] px-3 py-1 font-bold hover:bg-[#FFFFFF99] hover:text-black"
          onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
    </header>
      {/* Main Content */}
      <div className="flex flex-1 justify-center items-center gap-[50px] p-10 bg-gradient-to-br from-[#0d9488] to-[#0d9488]">
        {/* Left Section */}
        <div className="flex-1 flex justify-center items-center">
          <img src={logo1} alt="Doctor Illustration" className="max-w-[90%] h-auto" />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[rgba(0,0,50,0.6)] p-10 rounded-lg w-4/5 max-w-[400px] shadow-lg">
            <h2 className="mb-8 text-2xl leading-snug">
              Hello,
              <br />
              Welcome Back
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                required
                className="px-4 py-3 rounded-full text-sm bg-white/10 text-white placeholder-gray-300 outline-none focus:bg-white/20"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="px-4 py-3 rounded-full text-sm bg-white/10 text-white placeholder-gray-300 outline-none focus:bg-white/20"
              />

              {/* Options */}
              <div className="flex justify-between items-center text-xs">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-1" /> Remember me
                </label>
                <a href="#" className="text-blue-300 hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="px-4 py-3 rounded-full bg-blue-300 text-blue-900 font-bold hover:bg-blue-400 transition"
              >
                LOGIN NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}