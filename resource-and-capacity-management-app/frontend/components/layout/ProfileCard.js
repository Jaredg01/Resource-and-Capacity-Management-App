'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';

const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

export default function ProfileCard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const router = useRouter();

  /* ---------------------------------------------------------
     LOAD USER + FETCH PROFILE
  --------------------------------------------------------- */
  useEffect(() => {
    const userData = localStorage.getItem('user');

    if (!userData) return;

    const parsed = JSON.parse(userData);

   async function loadProfile() {
  try {
    setUser(parsed);

    const res = await api.get(
      `/profile?username=${encodeURIComponent(parsed.username)}`
    );

    setProfile(res.data);
  } catch (err) {
    console.error("Profile fetch error:", err);
  }
}

    loadProfile();
  }, []);

  /* ---------------------------------------------------------
     LOGOUT
  --------------------------------------------------------- */
const handleLogout = () => {
  // Clear stored auth data
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // Optional: clear Axios auth header
  delete api.defaults.headers.common["Authorization"];

  // Redirect to login
  router.push("/login");
};

  /* ---------------------------------------------------------
     LOADING STATE
  --------------------------------------------------------- */
  if (!user || !profile) {
    return (
      <div className="min-h-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  /* ---------------------------------------------------------
     FINAL RENDER
  --------------------------------------------------------- */
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-md border border-gray-200 p-10">

      {/* Back Button + Title */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => router.back()}
          className="text-3xl text-gray-600 hover:text-gray-800 transition"
          style={styles.outfitFont}
        >
          ❮
        </button>

        <h2
          className="text-3xl font-bold text-[#017ACB]"
          style={styles.outfitFont}
        >
          Profile
        </h2>
      </div>

      {/* Profile Details */}
      <div
        className="space-y-5 text-gray-700 text-[clamp(1rem,1.1vw,1.2rem)]"
        style={styles.outfitFont}
      >
        <div><strong>Name:</strong> {profile.name}</div>
        <div><strong>Title:</strong> {profile.title}</div>
        <div><strong>Department:</strong> {profile.department}</div>
        <div><strong>Role:</strong> {profile.role}</div>
        <div><strong>ID:</strong> {profile.id}</div>
      </div>

      {/* Logout */}
      <div className="flex justify-end mt-10">
        <button
          onClick={handleLogout}
          className="px-5 py-3 bg-[#017ACB] text-white rounded-lg hover:bg-blue-700 transition text-[clamp(1rem,1vw,1.1rem)]"
        >
          Log Out
        </button>
      </div>

    </div>
  );
}