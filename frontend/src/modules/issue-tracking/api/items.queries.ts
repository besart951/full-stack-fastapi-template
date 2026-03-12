import { ItemsService } from "@/client";
import type { ItemsPublic } from "@/client";

export function getItemsQueryOptions() {
  return {
    queryFn: (): Promise<ItemsPublic> =>
      ItemsService.readItems({ skip: 0, limit: 100 }),
    queryKey: ["items"] as const,
  };
}
