import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ProductCard } from "@/components/dental/shared";
import { dollarProducts, products } from "@/data/dental";
export const Route = createFileRoute("/deals")({ head: () => ({ meta: [{ title: "Deals & Dental Dollar Store | Dental Depot" }, { name: "description", content: "Shop sale products and oral-care basics under $5." }, { property: "og:title", content: "Deals & Dental Dollar Store" }, { property: "og:description", content: "Shop oral-care deals." }] }), component: Page });
function Page() { return <PageShell><section className="container-care py-14"><p className="eyebrow">Deals</p><h1 className="mt-3 text-5xl font-black">Dental Dollar Store.</h1><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[...dollarProducts, ...products.filter((p) => p.sale)].map((product) => <ProductCard key={product.slug} product={product} />)}</div></section></PageShell>; }
