import { createFileRoute } from "@tanstack/react-router";
import { BookingStepper, PageShell } from "@/components/dental/shared";

export const Route = createFileRoute("/book")({
  head: () => ({ meta: [{ title: "Book a Dentist Appointment | Hearthside Family Dental" }, { name: "description", content: "Book a dental appointment without creating an account." }, { property: "og:title", content: "Book a Dentist Appointment" }, { property: "og:description", content: "Choose a reason, doctor, location, and appointment time." }] }),
  component: Page,
});
function Page() { return <PageShell><BookingStepper /></PageShell>; }
