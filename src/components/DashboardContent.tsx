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
          <Route index element={<DashboardOverview />} />
          <Route path="bugs" element={<BugReports />} />
          <Route path="submit" element={<SubmitBug />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="community" element={<Community />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </main>
  );
}