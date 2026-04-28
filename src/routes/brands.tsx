import { createFileRoute } from "@tanstack/react-router";
import { BrandGrid, PageShell } from "@/components/dental/shared";
export const Route = createFileRoute("/brands")({ head: () => ({ meta: [{ title: "Oral-Care Brands | Dental Depot" }, { name: "description", content: "Shop Oral-B, Waterpik, Sonicare, OxyFresh, DenTek, POH, Sleep Right, and more." }, { property: "og:title", content: "Oral-Care Brands" }, { property: "og:description", content: "Shop trusted oral-care brands." }] }), component: Page });
function Page() { return <PageShell><section className="container-care py-14"><p className="eyebrow">Brands</p><h1 className="mt-3 text-5xl font-black md:text-6xl">Shop by brand.</h1><div className="mt-10"><BrandGrid /></div></section></PageShell>; }
