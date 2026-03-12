import { createFileRoute, redirect } from "@tanstack/react-router"

import { UsersService } from "@/client"
import AdminPage from "@/modules/administration/pages/AdminPage"

export const Route = createFileRoute("/_layout/admin")({
  component: Admin,
  beforeLoad: async () => {
    const user = await UsersService.readUserMe()
    if (!user.is_superuser) {
      throw redirect({
        to: "/",
      })
    }
  },
  head: () => ({
    meta: [
      {
        title: "Admin - FastAPI Template",
      },
    ],
  }),
})

function Admin() {
  return <AdminPage />
}
