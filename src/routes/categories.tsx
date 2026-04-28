import { createFileRoute } from "@tanstack/react-router";
import { CategoryCard, PageShell } from "@/components/dental/shared";
import { categories } from "@/data/dental";

export const Route = createFileRoute("/categories")({
  head: () => ({ meta: [{ title: "Shop Oral-Care Categories | Dental Depot" }, { name: "description", content: "Browse toothbrushes, floss, mouthwash, mouth guards, denture care, dry mouth supplies, and more." }, { property: "og:title", content: "Shop Oral-Care Categories" }, { property: "og:description", content: "Browse Dental Depot product categories." }] }),
  component: Page,
});

function Page() { return <PageShell><section className="container-care py-14"><p className="eyebrow">Shop by category</p><h1 className="mt-3 text-5xl font-black md:text-6xl">Oral-care shelves, without the maze.</h1><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{categories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div></section></PageShell>; }
