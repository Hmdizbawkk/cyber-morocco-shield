import { Routes, Route } from "react-router-dom";
import { DashboardOverview } from "./dashboard/DashboardOverview";
import { BugReports } from "./dashboard/BugReports";
import { SubmitBug } from "./dashboard/SubmitBug";
import { Notifications } from "./dashboard/Notifications";
import { Leaderboard } from "./dashboard/Leaderboard";
import { Community } from "./dashboard/Community";
import { Profile } from "./dashboard/Profile";
import { Settings } from "./dashboard/Settings";

export function DashboardContent() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/dashboard" element={<DashboardOverview />} />
          <Route path="/dashboard/bugs" element={<BugReports />} />
          <Route path="/dashboard/submit" element={<SubmitBug />} />
          <Route path="/dashboard/notifications" element={<Notifications />} />
          <Route path="/dashboard/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard/community" element={<Community />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Routes>
      </div>
    </main>
  );
}