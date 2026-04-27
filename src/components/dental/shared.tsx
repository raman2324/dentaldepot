import { Link } from "@tanstack/react-router";
import { CalendarDays, Check, ChevronRight, Clock, Languages, MapPin, Menu, Phone, ShieldCheck, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { practice, services, doctors, locations, reviews, carriers, navItems } from "@/data/dental";

export function SkipToContent() {
  return <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground">Skip to main content</a>;
}

export function BookCTA({ label = "Book Appointment", className = "" }: { label?: string; className?: string }) {
  return <Button asChild size="lg" className={className}><Link to="/book"><CalendarDays />{label}</Link></Button>;
}

export function ClickToCall({ compact = false }: { compact?: boolean }) {
  return <Button asChild variant="call" size={compact ? "icon" : "default"}><a href={`tel:${practice.phone.replace(/[^0-9]/g, "")}`} aria-label={`Call ${practice.phone}`}><Phone />{!compact && <span>{practice.phone}</span>}</a></Button>;
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md">
      <div className="bg-secondary py-2 text-center text-sm font-semibold text-secondary-foreground">Now accepting new patients · Same-day emergencies welcome · Call {practice.phone}</div>
      <div className="container-care flex min-h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 font-extrabold text-foreground" aria-label={`${practice.name} home`}>
          <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground">HS</span>
          <span className="hidden text-lg sm:inline">{practice.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-muted-foreground lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.to} to={item.to} activeProps={{ className: "text-primary" }}>{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2"><span className="hidden md:inline-flex"><ClickToCall /></span><BookCTA className="hidden sm:inline-flex" /><Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu"><Menu /></Button></div>
      </div>
    </header>
  );
}

export function StickyMobileActions() {
  return <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t bg-background/95 p-3 backdrop-blur md:hidden"><ClickToCall /><BookCTA label="Book Online" className="h-11 rounded-xl px-4 text-sm" /></div>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><SkipToContent /><Header /><main id="main-content">{children}</main><Footer /><StickyMobileActions /></>;
}

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return <article className="soft-card lift-card rounded-2xl p-7"><div className="mb-5 grid size-12 place-items-center rounded-2xl bg-secondary text-primary"><Icon strokeWidth={1.5} /></div><p className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary">{service.category}</p><h3 className="mt-2 text-xl font-extrabold text-foreground">{service.name}</h3><p className="mt-3 leading-7 text-muted-foreground">{service.description}</p><Link to="/services/$slug" params={{ slug: service.slug }} className="mt-5 inline-flex min-h-11 items-center gap-1 font-extrabold text-primary">Learn more <ChevronRight className="size-4" /></Link></article>;
}

export function DoctorCard({ doctor }: { doctor: (typeof doctors)[number] }) {
  return <article className="soft-card lift-card overflow-hidden rounded-2xl"><div className="grid aspect-square place-items-center bg-surface text-5xl font-extrabold text-primary" role="img" aria-label={`Portrait placeholder for ${doctor.name}`}>{doctor.initials}</div><div className="p-7"><p className="text-sm font-bold text-primary">{doctor.specialty}</p><h3 className="mt-1 text-xl font-extrabold">{doctor.name}, {doctor.credentials}</h3><p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><Languages className="size-4" />{doctor.languages}</p><p className="mt-3 leading-7 text-muted-foreground">{doctor.bio}</p><Link to="/team/$doctor" params={{ doctor: doctor.slug }} className="mt-5 inline-flex min-h-11 items-center gap-1 font-extrabold text-primary">Book with {doctor.name.split(" ")[1]} <ChevronRight className="size-4" /></Link></div></article>;
}

export function LocationCard({ location }: { location: (typeof locations)[number] }) {
  return <article className="soft-card lift-card rounded-2xl p-7"><div className="mb-5 h-36 rounded-2xl bg-surface" role="img" aria-label={`${location.name} clinic exterior photo placeholder`} /><p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-bold text-secondary-foreground"><Clock className="size-4" />{location.today}</p><h3 className="mt-4 text-2xl font-extrabold">{location.name}</h3><p className="mt-3 flex gap-2 leading-7 text-muted-foreground"><MapPin className="mt-1 size-4 shrink-0 text-primary" />{location.address}</p><p className="mt-2 text-muted-foreground">{location.hours}</p><div className="mt-6 flex flex-wrap gap-3"><Button asChild variant="outline"><a href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}>Get directions</a></Button><Button asChild><Link to="/book">Book here</Link></Button></div></article>;
}

export function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return <article className="soft-card rounded-2xl p-7"><div className="flex gap-1 text-accent" aria-label="5 star review">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-5 fill-current" />)}</div><blockquote className="mt-4 leading-8 text-foreground">“{review.quote}”</blockquote><p className="mt-5 font-extrabold">{review.name}</p><p className="text-sm text-muted-foreground">{review.place} · {review.date}</p><p className="mt-3 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">Verified Google review</p></article>;
}

export function InsuranceGrid() {
  return <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{carriers.map((carrier) => <div key={carrier} className="grid min-h-16 place-items-center rounded-2xl border bg-card px-4 text-center text-sm font-extrabold text-muted-foreground">{carrier}</div>)}</div>;
}

export function TrustStrip() {
  return <section className="border-y bg-card/70 py-5"><div className="container-care flex flex-wrap items-center justify-center gap-4 text-center text-sm font-extrabold text-muted-foreground sm:justify-between"><span>ADA Member</span><span>State Dental Association</span><span>Delta Dental</span><span>Aetna</span><span>CareCredit</span></div></section>;
}

export function EmergencyBand() {
  return <section className="bg-warm py-12 text-warm-foreground"><div className="container-care flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="eyebrow text-warm-foreground">Emergency care</p><h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Toothache today?</h2><p className="mt-3 max-w-2xl text-lg leading-8">Call us now. We'll help you understand what to do tonight and find the soonest safe appointment.</p></div><ClickToCall /></div></section>;
}

export function Footer() {
  return <footer className="bg-foreground pb-24 pt-14 text-background md:pb-10"><div className="container-care grid gap-10 lg:grid-cols-[1.2fr_2fr]"><div><div className="text-2xl font-extrabold">{practice.name}</div><p className="mt-3 max-w-sm leading-7 opacity-80">Warm family dentistry in {practice.city} since {practice.founded}. ADA accessibility support is always one click away.</p></div><div className="grid gap-8 sm:grid-cols-4"><FooterColumn title="Services" links={["Exams", "Crowns", "Implants", "Emergency"]} /><FooterColumn title="For Patients" links={["Book", "Forms", "Insurance", "FAQs"]} /><FooterColumn title="About" links={["Team", "Locations", "Reviews", "Careers"]} /><div><h3 className="font-extrabold">Contact</h3><p className="mt-4 leading-7 opacity-80">{practice.phone}<br />{practice.email}</p></div></div></div><div className="container-care mt-10 flex flex-wrap gap-4 border-t border-background/20 pt-6 text-sm opacity-80"><Link to="/privacy">Privacy</Link><Link to="/accessibility">Accessibility</Link><span>HIPAA notice</span><span>© 2026 {practice.name}</span></div></footer>;
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return <div><h3 className="font-extrabold">{title}</h3><ul className="mt-4 space-y-3 opacity-80">{links.map((link) => <li key={link}>{link}</li>)}</ul></div>;
}

export function BookingStepper() {
  const steps = ["Reason", "Doctor", "Location", "Time", "Info", "Confirm"];
  return <section className="container-care py-12"><div className="mx-auto max-w-4xl soft-card rounded-3xl p-6 md:p-10"><p className="eyebrow">Book online</p><h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Book a visit — we'll handle the rest.</h1><div className="mt-8 grid gap-3 sm:grid-cols-6" aria-label="Booking steps">{steps.map((step, index) => <div key={step} className="rounded-2xl bg-secondary p-3 text-center text-sm font-extrabold text-secondary-foreground"><span className="block text-primary">{index + 1}</span>{step}</div>)}</div><div className="mt-8 grid gap-4 md:grid-cols-2">{["New patient exam · 60 min", "Cleaning · 45 min", "Emergency · today if possible", "Specific concern · 30 min"].map((reason) => <button key={reason} className="min-h-16 rounded-2xl border bg-card p-5 text-left font-extrabold shadow-soft transition hover:border-primary focus-visible:border-primary"><Check className="mb-2 size-5 text-primary" />{reason}</button>)}</div><form className="mt-8 grid gap-5 md:grid-cols-2"><label className="grid gap-2 font-bold">Full name<input className="min-h-12 rounded-xl border bg-background px-4" autoComplete="name" required /></label><label className="grid gap-2 font-bold">Phone<input className="min-h-12 rounded-xl border bg-background px-4" inputMode="tel" autoComplete="tel" required /></label><label className="grid gap-2 font-bold">Email<input className="min-h-12 rounded-xl border bg-background px-4" type="email" autoComplete="email" required /></label><label className="grid gap-2 font-bold">Insurance carrier (optional)<input className="min-h-12 rounded-xl border bg-background px-4" autoComplete="organization" /></label><label className="grid gap-2 font-bold md:col-span-2">What should we know?<textarea className="min-h-28 rounded-xl border bg-background px-4 py-3" maxLength={500} /></label><Button size="lg" className="md:col-span-2">Request appointment</Button></form><p className="mt-5 text-sm leading-6 text-muted-foreground">We'll text you to confirm within 1 business hour. No account required.</p></div></section>;
}
