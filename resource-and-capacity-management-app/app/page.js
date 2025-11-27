export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="flex w-full max-w-5xl flex-col gap-8 p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Resource & Capacity Management
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A centralized platform for resource management, activity assignments, and capacity planning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Resource Management
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Track and manage resources across your organization with centralized data.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Activity Assignments
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Streamline workflows with efficient activity assignment tools.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Capacity Planning
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Dynamic dashboards for real-time capacity insights and analytics.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Role-Based Access
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Secure access control with customizable permissions for different user roles.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Analytics
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Comprehensive analytics and reporting for data-driven decisions.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Collaboration
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Inline comments, notifications, and team collaboration features.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h3 className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Getting Started
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Configure your database connection in <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">server.js</code> and start building your resource management solution.
          </p>
        </div>
      </main>
    </div>
  );
}
