import {
  createFileRoute,
  redirect,
} from "@tanstack/react-router"
import LoginPage from "@/modules/identity-access/pages/LoginPage"
import { isLoggedIn } from "@/hooks/useAuth"

export const Route = createFileRoute("/login")({
  component: Login,
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
        title: "Log In - FastAPI Template",
      },
    ],
  }),
})

function Login() {
  return <LoginPage />
}
