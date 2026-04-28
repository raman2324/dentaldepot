import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ProductCard } from "@/components/dental/shared";
import { categories, products } from "@/data/dental";

export const Route = createFileRoute("/categories/$slug")({
  head: ({ params }) => { const category = categories.find((item) => item.slug === params.slug); return { meta: [{ title: `${category?.name ?? "Category"} | Dental Depot` }, { name: "description", content: `Shop ${category?.name ?? "oral-care products"} at Dental Depot.` }, { property: "og:title", content: category?.name ?? "Dental Depot Category" }, { property: "og:description", content: "Brand-name products recommended by dentists." }] }; },
  component: Page,
});

function Page() { const { slug } = Route.useParams(); const category = categories.find((item) => item.slug === slug) ?? categories[0]; const items = products.filter((item) => item.category === category.slug); const shown = items.length ? items : products.slice(0, 6); return <PageShell><section className="container-care py-14"><p className="eyebrow">Category</p><h1 className="mt-3 text-5xl font-black md:text-6xl">{category.name}</h1><p className="mt-4 text-lg text-muted-foreground">{category.count} products · stock status shown before checkout.</p><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{shown.map((product) => <ProductCard key={product.slug} product={product} />)}</div><h2 className="mt-14 text-3xl font-black">Recently viewed</h2><div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 4).map((product) => <ProductCard key={product.slug} product={product} compact />)}</div></section></PageShell>; }
