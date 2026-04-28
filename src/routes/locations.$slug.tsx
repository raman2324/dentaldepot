import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/locations/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/categories" });
  },
});
