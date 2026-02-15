'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import api from '@/lib/api';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        username,
        password
      });

      const user = res.data.user;

      // Save user
      localStorage.setItem("user", JSON.stringify(user));

      // -----------------------------------------
      // ROLE‑BASED ROUTING
      // -----------------------------------------
      if (user.acc_type_id === 1) {
        router.push("/resource-manager/dashboard");
        return;
      }

      if (user.acc_type_id === 2) {
        router.push("/stakeholder/dashboard");
        return;
      }

      if (user.acc_type_id === 3) {
        router.push("/team-member/dashboard");
        return;
      }

      // fallback
      router.push("/dashboard");

    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.error || "Login failed. Please try again.");
    }
  };

  return (
    <>
      {/* Prevent header flash by routing back to /login */}
      <div
        className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => router.push('/login')}
      >
        <div
          className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg m-4 border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <Image
              src="/CapstoneDynamicsLogo.png"
              alt="Logo"
              width={96}
              height={96}
            />

            <div className="flex flex-col items-center flex-1 mx-4">
              <h3
                className="text-2xl font-bold text-[#017ACB]"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Capstone Dynamics
              </h3>
              <h4
                className="text-base font-semibold text-black mt-1"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Resource & Capacity Management
              </h4>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-5 py-3 border text-gray-700 border-gray-300 rounded-lg text-base"
                required
              />
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 border text-gray-700 border-gray-300 rounded-lg text-base"
                required
              />
            </div>

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => router.push('/login')}
                className="flex-1 px-5 py-3 text-gray-700 border border-gray-500 rounded-lg hover:bg-gray-300 text-base"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex-1 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-base"
              >
                Sign In
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}