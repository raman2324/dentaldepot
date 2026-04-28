import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/categories" });
  },
});
