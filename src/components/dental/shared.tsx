import { Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  CreditCard,
  Headphones,
  Heart,
  Mail,
  MapPin,
  Menu,
  Minus,
  PackageCheck,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
  User,
  Warehouse,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { brands, categories, categoryNav, products, store } from "@/data/dental";
import dentureRepairImage from "@/assets/product-denture-repair-kit.jpg";
import electricBrushImage from "@/assets/product-electric-brush.jpg";
import flossRollImage from "@/assets/product-floss-roll.jpg";
import flossToolsImage from "@/assets/product-floss-tools.jpg";
import kidsDentalImage from "@/assets/product-kids-dental-set.jpg";
import mouthwashImage from "@/assets/product-mouthwash-rinse.jpg";
import nightGuardImage from "@/assets/product-night-guard.jpg";
import toothbrushHolderImage from "@/assets/product-toothbrush-holder.jpg";
import dentalDepotLogo from "@/assets/dental-depot-logo.png";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground"
    >
      Skip to main content
    </a>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-3 rounded-md bg-card px-3 py-2 shadow-soft"
      aria-label={`${store.name} home`}
    >
      <img
        src={dentalDepotLogo}
        alt=""
        width={48}
        height={48}
        className="size-10 rounded-full object-contain"
        aria-hidden="true"
      />
      <span className="text-xl font-black leading-none">
        <span className="text-[var(--brand-maroon-800)]">Dental</span>{" "}
        <span className={inverted ? "text-[var(--ink-900)]" : "text-foreground"}>Depot</span>
      </span>
    </span>
  );
}

export function ClickToCall({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={`tel:${store.phone.replace(/[^0-9]/g, "")}`}
      className="inline-flex min-h-11 items-center gap-2 font-extrabold text-current"
      aria-label={`Call ${store.phone}`}
    >
      <Phone className="size-4" />
      {!compact && <span>{store.phone}</span>}
    </a>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-card shadow-soft">
      <div className="bg-[var(--ink-800)] py-2 text-center text-xs font-bold text-primary-foreground md:text-sm">
        FREE SHIPPING ON USA ORDERS OVER $75 · Recommended by your dentist? We probably stock it. ·
        Call {store.phone} Mon–Fri 9–5 ET
      </div>
      <div className="bg-accent text-accent-foreground">
        <div className="container-care grid min-h-[60px] items-center gap-3 py-3 lg:grid-cols-[230px_1fr_auto]">
          <Link to="/" className="justify-self-start">
            <Logo />
          </Link>
          <form
            className="order-3 flex min-h-12 overflow-hidden rounded-md bg-card text-foreground shadow-soft lg:order-none"
            role="search"
          >
            <label htmlFor="site-search" className="sr-only">
              Search products
            </label>
            <input
              id="site-search"
              className="min-w-0 flex-1 px-4 text-sm outline-none"
              placeholder="Search 1,200+ oral care products — try 'Waterpik replacement tips'"
            />
            <button
              className="grid w-14 place-items-center bg-primary text-primary-foreground"
              aria-label="Submit search"
            >
              <Search className="size-5" />
            </button>
          </form>
          <div className="flex items-center justify-end gap-4 text-sm font-bold">
            <span className="hidden xl:inline-flex">
              <ClickToCall />
            </span>
            <Link to="/account" className="hidden items-center gap-2 md:inline-flex">
              <User className="size-4" />
              My Account
            </Link>
            <Link to="/cart" className="inline-flex items-center gap-2">
              <ShoppingCart className="size-5" />
              Cart (2) · $66.56
            </Link>
            <Button
              variant="outline"
              size="icon"
              className="bg-card text-foreground lg:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>
      <nav
        className="hidden min-h-[52px] items-center border-b bg-card text-sm font-extrabold text-foreground lg:flex"
        aria-label="Product navigation"
      >
        <div className="container-care flex items-center gap-7">
          {categoryNav.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex min-h-11 items-center gap-1"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
              {index < 2 && <ChevronDown className="size-4" />}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function StickyMobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto] gap-2 border-t bg-card/95 p-3 backdrop-blur md:hidden">
      <form className="flex min-h-11 overflow-hidden rounded-md border bg-background">
        <input
          className="min-w-0 flex-1 px-3 text-sm"
          aria-label="Search products"
          placeholder="Search products"
        />
        <button className="w-11 bg-primary text-primary-foreground" aria-label="Search">
          <Search className="mx-auto size-4" />
        </button>
      </form>
      <Button asChild>
        <Link to="/cart">
          <ShoppingCart />
          Cart
        </Link>
      </Button>
    </div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipToContent />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <StickyMobileActions />
    </>
  );
}

export function ProductGlyph({
  type = "box",
  className = "",
}: {
  type?: string;
  className?: string;
}) {
  const glyph =
    type === "guard"
      ? "⌒"
      : type === "floss"
        ? "∞"
        : type === "roll"
          ? "◎"
          : type === "kids"
            ? "✦"
            : type === "holder"
              ? "▯"
              : "▣";
  return (
    <div
      className={`product-art grid aspect-square place-items-center rounded-md border ${className}`}
    >
      <span className="text-5xl font-black text-primary/80" aria-hidden="true">
        {glyph}
      </span>
    </div>
  );
}

const productImages: Record<string, string> = {
  box: dentureRepairImage,
  breath: mouthwashImage,
  brush: toothbrushHolderImage,
  denture: dentureRepairImage,
  dollar: flossRollImage,
  dry: mouthwashImage,
  electric: electricBrushImage,
  floss: flossToolsImage,
  guard: nightGuardImage,
  gum: flossToolsImage,
  holder: toothbrushHolderImage,
  irrigator: electricBrushImage,
  kids: kidsDentalImage,
  med: mouthwashImage,
  new: electricBrushImage,
  ortho: flossToolsImage,
  repair: dentureRepairImage,
  rinse: mouthwashImage,
  roll: flossRollImage,
  tongue: mouthwashImage,
  xylitol: kidsDentalImage,
};

export function ProductImage({
  type = "box",
  alt,
  className = "",
}: {
  type?: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={productImages[type] ?? dentureRepairImage}
      alt={alt}
      width={1024}
      height={1024}
      loading="lazy"
      className={`aspect-square w-full rounded-md border object-cover ${className}`}
    />
  );
}

export function ProductCard({
  product = products[0],
  compact = false,
}: {
  product?: (typeof products)[number];
  compact?: boolean;
}) {
  return (
    <article className="soft-card lift-card group flex h-full flex-col overflow-hidden rounded-lg">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block bg-secondary p-4">
        <ProductImage type={product.art} alt={product.name} />
        <span className="sr-only">View {product.name}</span>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
          {product.brand}
        </p>
        <h3 className="mt-2 min-h-12 text-base font-extrabold leading-snug text-foreground">
          <Link to="/products/$slug" params={{ slug: product.slug }}>
            {product.name}
          </Link>
        </h3>
        <div className="mt-2 flex items-center gap-1 text-sm">
          <span
            className="flex text-[var(--warn-600)]"
            aria-label={`${product.rating} star rating`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-4 fill-current" />
            ))}
          </span>
          <span className="text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-lg font-black text-foreground">${product.price.toFixed(2)}</span>
          {product.msrp && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.msrp.toFixed(2)}
            </span>
          )}
          {product.sale && (
            <span className="rounded-full bg-warm px-2 py-1 text-xs font-black text-destructive">
              SALE
            </span>
          )}
        </div>
        <p
          className={`mt-2 text-sm font-bold ${product.stock.includes("Low") ? "text-[var(--warn-600)]" : "text-[var(--success-700)]"}`}
        >
          {product.stock}
        </p>
        {!compact && (
          <Button className="mt-4 w-full md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
            Add to cart
          </Button>
        )}
      </div>
    </article>
  );
}

export function CategoryCard({ category }: { category: (typeof categories)[number] }) {
  return (
    <Link
      to="/categories/$slug"
      params={{ slug: category.slug }}
      className="soft-card lift-card group rounded-lg p-4"
    >
      <ProductImage
        type={category.tone}
        alt={`${category.name} oral-care products`}
        className="bg-card"
      />
      <h3 className="mt-4 text-lg font-black text-foreground">{category.name}</h3>
      <p className="mt-1 text-sm font-bold text-muted-foreground">{category.count} products</p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-primary">
        Shop category <ChevronRight className="size-4" />
      </span>
    </Link>
  );
}

export function BrandGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {brands.slice(0, 12).map((brand, index) => (
        <Link
          key={brand}
          to="/brands"
          className="group grid min-h-24 place-items-center rounded-lg border bg-card p-4 text-center grayscale transition hover:border-primary hover:grayscale-0"
        >
          <span className="text-lg font-black text-foreground">{brand}</span>
          <span className="mt-1 text-xs font-bold text-primary opacity-0 transition group-hover:opacity-100">
            {12 + index} products →
          </span>
        </Link>
      ))}
    </div>
  );
}

export function TrustTiles() {
  const items = [
    "Brands recommended by dentists",
    "Free US shipping over $75",
    `Family-owned in MA since ${store.founded}`,
    "Real humans answer the phone",
  ];
  return (
    <section className="border-y bg-card py-4">
      <div className="container-care grid gap-3 text-sm font-black text-foreground sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <p key={item} className="flex items-center gap-2">
            <BadgeCheck className="size-5 text-primary" />
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

export function CommerceTrustBand() {
  const items = [
    [MapPin, "Family-owned in North Andover, MA", store.address],
    [ShieldCheck, "Authorized retailer", "Brand-name oral-care products only"],
    [Warehouse, "Ships from US warehouse", "No overseas dropshipping confusion"],
    [Truck, "Free shipping over $75", "Clear threshold in cart"],
    [PackageCheck, "30-day returns", "On unopened items"],
    [Headphones, "We answer the phone", store.phone],
  ];
  return (
    <section className="bg-secondary py-12">
      <div className="container-care grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {items.map(([Icon, title, copy]) => {
          const C = Icon as typeof MapPin;
          return (
            <div key={title as string} className="rounded-lg border bg-card p-5">
              <C className="size-7 text-primary" />
              <h3 className="mt-4 font-black text-foreground">{title as string}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{copy as string}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground pb-24 pt-14 text-background md:pb-10">
      <div className="container-care grid gap-10 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-sm leading-7 text-background/80">
            Family-owned · North Andover, MA · since {store.founded}. If your dentist said “use this
            exact one,” it’s probably here.
          </p>
          <p className="mt-5 leading-7 text-background/80">
            {store.address}
            <br />
            {store.phone}
            <br />
            {store.email}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-5">
          <FooterColumn
            title="Shop"
            links={["Toothbrushes", "Floss", "Night Guards", "Dry Mouth"]}
          />
          <FooterColumn title="Brands" links={brands.slice(0, 4)} />
          <FooterColumn
            title="Customer Care"
            links={["FAQ", "Returns", "Shipping", "Track Order"]}
          />
          <FooterColumn
            title="Information"
            links={["Dental Info", "Site Map", "Hydro Floss", "TMJ"]}
          />
          <FooterColumn title="Company" links={["About", "Contact", "Privacy", "Accessibility"]} />
        </div>
      </div>
      <div className="container-care mt-10 flex flex-wrap items-center gap-4 border-t border-background/20 pt-6 text-sm text-background/75">
        <span>{store.address}</span>
        <ClickToCall />
        <a href={`mailto:${store.email}`}>{store.email}</a>
        <span className="inline-flex items-center gap-2">
          <CreditCard className="size-4" />
          Visa · Mastercard · Amex
        </span>
        <span>Secured checkout</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="font-black text-background">{title}</h3>
      <ul className="mt-4 space-y-3 text-background/75">
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
}

export function QuantitySelector() {
  return (
    <div className="inline-flex h-12 items-center overflow-hidden rounded-md border bg-card">
      <button className="grid size-12 place-items-center" aria-label="Decrease quantity">
        <Minus className="size-4" />
      </button>
      <span className="w-10 text-center font-black text-foreground">1</span>
      <button className="grid size-12 place-items-center" aria-label="Increase quantity">
        <Plus className="size-4" />
      </button>
    </div>
  );
}

export function SignupForm() {
  return (
    <form className="mt-7 grid gap-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="signup-email">
          Email
        </label>
        <input
          id="signup-email"
          type="email"
          className="min-h-12 flex-1 rounded-md border bg-card px-4"
          placeholder="Email address"
        />
        <Button type="submit">Sign up</Button>
      </div>
      <div className="flex flex-wrap gap-3 text-sm font-bold text-foreground">
        {["Floss", "Toothbrushes", "Night Guards", "Dentures", "Kids' Care"].map((item) => (
          <label key={item} className="inline-flex items-center gap-2">
            <input type="checkbox" className="size-4 accent-[var(--teal-700)]" />
            {item}
          </label>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        <Mail className="mr-1 inline size-4" />
        No popups. Restock alerts and practical offers only.
      </p>
    </form>
  );
}

export function FreeShippingProgress({ amount = 66.56 }: { amount?: number }) {
  const remaining = Math.max(0, store.freeShipping - amount);
  const pct = Math.min(100, (amount / store.freeShipping) * 100);
  return (
    <div className="rounded-lg bg-secondary p-4">
      <div className="flex items-center justify-between gap-3 text-sm font-black text-foreground">
        <span>
          {remaining > 0 ? `$${remaining.toFixed(2)} to free shipping` : "Free shipping unlocked"}
        </span>
        <span>
          ${amount.toFixed(2)} / ${store.freeShipping}
        </span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-card">
        <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        <CircleDollarSign className="mr-1 inline size-4 text-primary" />
        Add a 2-pack of floss to get closer.
      </p>
    </div>
  );
}
