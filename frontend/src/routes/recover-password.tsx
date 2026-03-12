import {
  createFileRoute,
  redirect,
} from "@tanstack/react-router"
import RecoverPasswordPage from "@/modules/identity-access/pages/RecoverPasswordPage"
import { isLoggedIn } from "@/hooks/useAuth"

export const Route = createFileRoute("/recover-password")({
  component: RecoverPassword,
  beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/",
      })
    }
  },
  head: () => ({
    meta: [
      {
        title: "Recover Password - FastAPI Template",
      },
    ],
  }),
})

function RecoverPassword() {
  return <RecoverPasswordPage />
}
