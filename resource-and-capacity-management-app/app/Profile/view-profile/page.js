'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Shared style object for consistent font usage
const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

export default function ViewProfilePage() {
  // Stores the logged-in user object
  const [user, setUser] = useState(null);

  // Next.js router for navigation
  const router = useRouter();

  useEffect(() => {
    // Retrieve stored user data from localStorage
    const userData = localStorage.getItem('user');

    // If no user is found, redirect to login page
    if (!userData) {
      router.push('/login');
      return;
    }

    // Parse and store the user object
    setUser(JSON.parse(userData));
  }, [router]);

  // Clears user session and redirects to home page
  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  // Show loading spinner while user data is being loaded
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header Bar */}
      <header className="bg-[#017ACB] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo + App Name */}
            <div className="flex items-center">
              <img src="/CapstoneDynamicsLogo.png" alt="Logo" className="h-12 w-auto" />
              <div className="flex flex-col ml-3">
                <h1 className="text-2xl font-bold text-white leading-tight" style={styles.outfitFont}>
                  Capstone Dynamics
                </h1>
              </div>
            </div>

            {/* Centered Title (App Title) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <h1 className="text-xl font-bold text-white leading-tight" style={styles.outfitFont}>
                Resource & Capacity
              </h1>
              <h2 className="text-xl font-bold text-white leading-tight" style={styles.outfitFont}>
                Management Planner
              </h2>
            </div>

            {/* Username + Profile Circle */}
            <div className="flex items-center gap-4">
              {/* Display logged-in username */}
              <span className="text-white font-semibold" style={styles.outfitFont}>
                {user?.username || ''}
              </span>

              {/* Profile circle (non-clickable on this page) */}
              <div
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden"
                title="Profile"
              >
                <span className="text-[#017ACB] font-bold text-lg">
                  {user?.username?.charAt(0)?.toUpperCase() || ''}
                </span>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Profile Card Container */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">

          {/* Title Row WITH back arrow */}
          <div className="flex items-center gap-3 mb-6">

            {/* Back arrow navigates to dashboard */}
            <button
              onClick={() => router.push('/dashboard')}
              className="text-2xl text-gray-600 hover:text-gray-800 transition"
              style={styles.outfitFont}
              title="Back to Dashboard"
            >
              &lt;
            </button>

            {/* Section Title */}
            <h2 className="text-2xl font-bold text-[#017ACB]" style={styles.outfitFont}>
              Profile Card
            </h2>
          </div>

          {/* Placeholder box for future MongoDB profile data */}
          <div
            className="border border-gray-300 rounded-lg p-6 bg-gray-50 text-gray-500 text-center"
            style={styles.outfitFont}
          >
            Profile data will appear here.
          </div>

          {/* Logout Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-[#017ACB] text-white rounded-lg hover:bg-blue-700 transition"
            >
              Log Out
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}