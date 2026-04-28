import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ProductCard } from "@/components/dental/shared";
import { newProducts } from "@/data/dental";
export const Route = createFileRoute("/new-arrivals")({ head: () => ({ meta: [{ title: "New Arrivals | Dental Depot" }, { name: "description", content: "Recently added oral-care products at Dental Depot." }, { property: "og:title", content: "New Arrivals" }, { property: "og:description", content: "Recently added oral-care products." }] }), component: Page });
function Page() { return <PageShell><section className="container-care py-14"><p className="eyebrow">New arrivals</p><h1 className="mt-3 text-5xl font-black">Just in.</h1><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{newProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section></PageShell>; }
