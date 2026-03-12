import {
  createFileRoute,
  redirect,
} from "@tanstack/react-router"
import { z } from "zod"

import ResetPasswordPage from "@/modules/identity-access/pages/ResetPasswordPage"
import { isLoggedIn } from "@/hooks/useAuth"

const searchSchema = z.object({
  token: z.string().catch(""),
})

export const Route = createFileRoute("/reset-password")({
  component: ResetPassword,
  validateSearch: searchSchema,
  beforeLoad: async ({ search }) => {
    if (isLoggedIn()) {
      throw redirect({ to: "/" })
    }
    if (!search.token) {
      throw redirect({ to: "/login" })
    }
  },
  head: () => ({
    meta: [
      {
        title: "Reset Password - FastAPI Template",
      },
    ],
  }),
})

function ResetPassword() {
  const { token } = Route.useSearch()
  return <ResetPasswordPage token={token} />
}
