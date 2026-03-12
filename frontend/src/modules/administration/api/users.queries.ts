import { UsersService } from "@/client";
import type { UsersPublic } from "@/client";

export function getUsersQueryOptions() {
  return {
    queryFn: (): Promise<UsersPublic> =>
      UsersService.readUsers({ skip: 0, limit: 100 }),
    queryKey: ["users"] as const,
  };
}
