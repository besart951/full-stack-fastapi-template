import { createFileRoute } from "@tanstack/react-router"
import ItemsPage from "@/modules/issue-tracking/pages/ItemsPage"

export const Route = createFileRoute("/_layout/items")({
  component: Items,
  head: () => ({
    meta: [
      {
        title: "Items - FastAPI Template",
      },
    ],
  }),
})

function Items() {
  return <ItemsPage />
}
