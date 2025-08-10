import { Routes, Route } from "react-router-dom";
import { EnterpriseOverview } from "./enterprise/EnterpriseOverview";
import { EnterpriseAnalytics } from "./enterprise/EnterpriseAnalytics";
import { EnterpriseReports } from "./enterprise/EnterpriseReports";
import { EnterpriseUsers } from "./enterprise/EnterpriseUsers";
import { EnterpriseOrganizations } from "./enterprise/EnterpriseOrganizations";
import { EnterprisePermissions } from "./enterprise/EnterprisePermissions";
import { EnterpriseDatabase } from "./enterprise/EnterpriseDatabase";
import { EnterpriseBilling } from "./enterprise/EnterpriseBilling";
import { EnterpriseSettings } from "./enterprise/EnterpriseSettings";

export function EnterpriseDashboardContent() {
  return (
    <main className="flex-1 overflow-auto bg-background relative">
      <div className="absolute inset-0 bg-circuit opacity-5"></div>
      <div className="relative container mx-auto p-6 space-y-6">
        <Routes>
          <Route index element={<EnterpriseOverview />} />
          <Route path="analytics" element={<EnterpriseAnalytics />} />
          <Route path="reports" element={<EnterpriseReports />} />
          <Route path="users" element={<EnterpriseUsers />} />
          <Route path="organizations" element={<EnterpriseOrganizations />} />
          <Route path="permissions" element={<EnterprisePermissions />} />
          <Route path="database" element={<EnterpriseDatabase />} />
          <Route path="billing" element={<EnterpriseBilling />} />
          <Route path="settings" element={<EnterpriseSettings />} />
        </Routes>
      </div>
    </main>
  );
}