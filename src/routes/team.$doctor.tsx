import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/team/$doctor")({
  beforeLoad: () => {
    throw redirect({ to: "/brands" });
  },
});
