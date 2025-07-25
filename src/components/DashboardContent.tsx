import { Routes, Route } from "react-router-dom";
import { DashboardOverview } from "./dashboard/DashboardOverview";
import { BugReports } from "./dashboard/BugReports";

export function DashboardContent() {
  return (
    <main className="flex-1 overflow-auto dashboard-grid-bg">
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/dashboard" element={<DashboardOverview />} />
          <Route path="/dashboard/bugs" element={<BugReports />} />
          <Route path="/dashboard/submit" element={<div className="dashboard-card p-8 text-center"><h2 className="text-2xl text-white">Submit Bug Page</h2></div>} />
          <Route path="/dashboard/notifications" element={<div className="dashboard-card p-8 text-center"><h2 className="text-2xl text-white">Notifications Page</h2></div>} />
          <Route path="/dashboard/leaderboard" element={<div className="dashboard-card p-8 text-center"><h2 className="text-2xl text-white">Leaderboard Page</h2></div>} />
          <Route path="/dashboard/community" element={<div className="dashboard-card p-8 text-center"><h2 className="text-2xl text-white">Community Page</h2></div>} />
          <Route path="/dashboard/profile" element={<div className="dashboard-card p-8 text-center"><h2 className="text-2xl text-white">Profile Page</h2></div>} />
          <Route path="/dashboard/settings" element={<div className="dashboard-card p-8 text-center"><h2 className="text-2xl text-white">Settings Page</h2></div>} />
        </Routes>
      </div>
    </main>
  );
}