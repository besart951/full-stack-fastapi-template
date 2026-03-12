import { createFileRoute } from "@tanstack/react-router"

import DashboardPage from "@/modules/dashboard/pages/DashboardPage"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
  head: () => ({
    meta: [
      {
        title: "Dashboard - FastAPI Template",
      },
    ],
  }),
})

function Dashboard() {
  return <DashboardPage />
}
