import { Routes, Route } from "react-router-dom";
import { DashboardOverview } from "./dashboard/DashboardOverview";

export function DashboardContent() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/dashboard" element={<DashboardOverview />} />
          <Route path="/dashboard/bugs" element={<div>Bug Reports Page</div>} />
          <Route path="/dashboard/submit" element={<div>Submit Bug Page</div>} />
          <Route path="/dashboard/notifications" element={<div>Notifications Page</div>} />
          <Route path="/dashboard/leaderboard" element={<div>Leaderboard Page</div>} />
          <Route path="/dashboard/community" element={<div>Community Page</div>} />
          <Route path="/dashboard/profile" element={<div>Profile Page</div>} />
          <Route path="/dashboard/settings" element={<div>Settings Page</div>} />
        </Routes>
      </div>
    </main>
  );
}