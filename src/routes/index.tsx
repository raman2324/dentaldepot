import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ChevronRight, PackageCheck, Search, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrandGrid, CategoryCard, CommerceTrustBand, FreeShippingProgress, PageShell, ProductCard, ProductGlyph, SignupForm, TrustTiles } from "@/components/dental/shared";
import { articles, bundles, categories, dollarProducts, faqs, featuredProducts, newProducts, products, reviews, store } from "@/data/dental";
import heroProductsImage from "@/assets/dental-depot-hero-products.jpg";
import bundlesImage from "@/assets/dental-depot-bundles.jpg";
import educationImage from "@/assets/dental-depot-education.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: `${store.name} | Brand-name oral-care products` },
    { name: "description", content: "Shop dentist-recommended oral-care products, floss, mouth guards, Waterpik supplies, denture repair kits, and more with free US shipping over $75." },
    { property: "og:title", content: `${store.name} | Brand-name oral-care products` },
    { property: "og:description", content: "The exact oral-care product your dentist recommended, without marketplace imitations." },
  ] }),
  component: Index,
});

function Index() {
  return <PageShell><Hero /><TrustTiles /><CategorySection /><FeaturedProducts /><BrandSection /><FinderSection /><NewArrivals /><BundlesSection /><DollarStore /><EducationHub /><CommerceTrustBand /><ReviewsSection /><EmailSignup /><FaqSection /></PageShell>;
}

function Hero() {
  return <section className="container-care grid items-center gap-10 py-10 md:py-16 lg:grid-cols-[1.1fr_0.9fr]"><div className="fade-up"><p className="eyebrow">Oral care, ordered right</p><h1 className="mt-4 max-w-3xl text-5xl font-black md:text-7xl">The exact product your dentist recommended.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Wholesale prices on the brand-name floss, brushes, guards, and rinses you actually use. Shipped free over $75.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"><Button asChild size="lg"><Link to="/categories">Shop all categories</Link></Button><Link to="/brands" className="inline-flex min-h-12 items-center gap-2 font-black text-foreground">Find by brand <ArrowRight className="size-4" /></Link></div><div className="mt-8 max-w-lg"><FreeShippingProgress amount={66.56} /></div></div><div><img src={heroProductsImage} alt="Flat lay of oral care products including oral irrigator, electric toothbrush, night guard, mouthwash, floss tools, and denture repair kit" width={1408} height={960} className="aspect-[1.12] w-full rounded-lg object-cover shadow-lift" /></div></section>;
}

function CategorySection() {
  return <section className="container-care py-16"><p className="eyebrow">Shop by category</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Find the right shelf fast.</h2><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{categories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div></section>;
}

function FeaturedProducts() {
  return <section className="container-care py-16"><p className="eyebrow">Top picks</p><h2 className="mt-3 text-4xl font-black md:text-5xl">What patients are reordering this month.</h2><ProductRail products={featuredProducts} /></section>;
}

function ProductRail({ products: items }: { products: readonly (typeof products)[number][] }) {
  return <div className="mt-9 grid auto-cols-[78%] grid-flow-col gap-4 overflow-x-auto pb-4 [scroll-snap-type:x_mandatory] sm:auto-cols-[42%] lg:grid-flow-row lg:grid-cols-4 lg:overflow-visible xl:grid-cols-6">{items.map((product) => <div key={product.slug} className="[scroll-snap-align:start]"><ProductCard product={product} /></div>)}</div>;
}

function BrandSection() {
  return <section className="bg-card py-16"><div className="container-care"><p className="eyebrow">Shop by brand</p><h2 className="mt-3 text-4xl font-black md:text-5xl">The credibility is on the label.</h2><div className="mt-9"><BrandGrid /></div></div></section>;
}

function FinderSection() {
  return <section className="bg-secondary py-16"><div className="container-care grid gap-8 lg:grid-cols-[1fr_0.85fr]"><div><p className="eyebrow">Product finder</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Got a product name from your dentist? Search it here.</h2><form className="mt-7 flex min-h-14 overflow-hidden rounded-md border bg-card shadow-soft"><label htmlFor="finder-search" className="sr-only">Search recommended product</label><input id="finder-search" className="min-w-0 flex-1 px-4" placeholder="DenTek nightguard, Waterpik replacement tips, OxyFresh fluoride rinse" /><button className="w-16 bg-primary text-primary-foreground" aria-label="Search"><Search className="mx-auto size-5" /></button></form><div className="mt-4 flex flex-wrap gap-2">{["DenTek nightguard", "Waterpik replacement tips", "OxyFresh fluoride rinse"].map((item) => <span key={item} className="rounded-full border bg-card px-3 py-1 text-sm font-bold text-foreground">{item}</span>)}</div></div><div className="rounded-lg border bg-card p-8 shadow-soft"><p className="font-mono text-sm text-muted-foreground">Dentist note</p><p className="mt-6 text-3xl font-black leading-tight text-foreground">Try the OxyFresh non-alcoholic mouthwash 2x/day.</p><p className="mt-6 text-muted-foreground">If it is written down on a sticky note, a checkout slip, or a text from your dentist, start with search.</p></div></div></section>;
}

function NewArrivals() {
  return <section className="container-care py-16"><p className="eyebrow">New arrivals</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Just in.</h2><ProductRail products={newProducts} /></section>;
}

function BundlesSection() {
  return <section className="bg-card py-16"><div className="container-care"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">Bundles & reorder packs</p><h2 className="mt-3 text-4xl font-black md:text-5xl">A few things that make sense together.</h2></div><img src={bundlesImage} alt="Flat lay of oral-care bundles with electric toothbrush heads, night guard, tablets, rinse, and toothpaste" width={1408} height={800} loading="lazy" className="h-64 w-full rounded-lg object-cover shadow-soft" /></div><div className="mt-9 grid items-stretch gap-5 md:grid-cols-3">{bundles.map((bundle) => <article key={bundle.title} className="soft-card flex h-full flex-col rounded-lg p-6"><h3 className="text-2xl font-black text-foreground">{bundle.title}</h3><p className="mt-3 flex-1 leading-7 text-muted-foreground">{bundle.description}</p><div className="mt-5 flex flex-wrap items-center gap-3"><span className="text-2xl font-black text-foreground">{bundle.price}</span><span className="rounded-full bg-warm px-3 py-1 text-sm font-black text-destructive">{bundle.savings}</span></div><Button className="mt-6 w-full">Add bundle to cart <ChevronRight /></Button></article>)}</div></div></section>;
}

function DollarStore() {
  return <section className="container-care py-16"><div className="rounded-lg bg-secondary p-6 md:p-10"><p className="eyebrow">Dental Dollar Store</p><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><h2 className="text-4xl font-black md:text-5xl">Stock-up basics, all under $5.</h2><Button asChild variant="outline"><Link to="/deals">Shop the Dollar Store <ArrowRight /></Link></Button></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{dollarProducts.map((product) => <ProductCard key={product.slug} product={product} compact />)}</div></div></section>;
}

function EducationHub() {
  return <section className="container-care py-16"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">Dental information</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Real answers from a real catalog of products.</h2></div><img src={educationImage} alt="Illustrated oral-care education cards for irrigators, night guards, and daily routines" width={1408} height={800} loading="lazy" className="h-64 w-full rounded-lg object-cover shadow-soft" /></div><div className="mt-9 grid gap-5 md:grid-cols-3">{articles.map((article) => <article key={article.title} className="soft-card lift-card rounded-lg p-6"><p className="eyebrow">Guide</p><h3 className="mt-3 text-2xl font-black text-foreground">{article.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{article.dek}</p><Link to="/dental-information" className="mt-5 inline-flex font-black text-primary">Read →</Link></article>)}</div></section>;
}

function ReviewsSection() {
  return <section className="container-care py-16"><p className="eyebrow">Real customers</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Verified reviews from dentist-recommended buyers.</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{reviews.map((review) => <article key={review.name} className="soft-card rounded-lg p-6"><div className="flex gap-4"><ProductGlyph type={review.art} className="size-20 shrink-0" /><div><p className="font-black text-foreground">{review.product}</p><p className="mt-1 flex text-[var(--warn-600)]" aria-label="5 star review">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</p></div></div><blockquote className="mt-5 leading-7 text-foreground">“{review.quote}”</blockquote><p className="mt-5 font-black text-foreground">{review.name} · {review.city}</p><p className="mt-2 inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-black text-primary"><BadgeCheck className="size-3" />Verified buyer</p></article>)}</div><div className="mt-8 rounded-lg border bg-card p-5 text-center font-black text-foreground">4.7 / 5 from {store.reviewCount} product reviews · <Link to="/reviews" className="text-primary">Read all reviews</Link></div></section>;
}

function EmailSignup() {
  return <section className="bg-secondary py-16"><div className="container-care max-w-4xl"><p className="eyebrow">Restock alerts</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Sign up for restock alerts and 10% off your first order.</h2><SignupForm /></div></section>;
}

function FaqSection() {
  return <section className="container-care py-16"><p className="eyebrow">Help & FAQ</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Straight answers before checkout.</h2><div className="mt-8 divide-y rounded-lg border bg-card">{faqs.map(([question, answer]) => <details key={question} className="group p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-foreground">{question}<PackageCheck className="size-5 text-primary transition group-open:rotate-45" /></summary><p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{answer}</p></details>)}</div></section>;
}
