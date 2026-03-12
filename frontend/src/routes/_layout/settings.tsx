import { createFileRoute } from "@tanstack/react-router"

import UserSettingsPage from "@/modules/user-settings/pages/UserSettingsPage"

export const Route = createFileRoute("/_layout/settings")({
  component: UserSettings,
  head: () => ({
    meta: [
      {
        title: "Settings - FastAPI Template",
      },
    ],
  }),
})

function UserSettings() {
  return <UserSettingsPage />
}
