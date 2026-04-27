import { Baby, HeartPulse, ShieldCheck, SmilePlus, Sparkles, Stethoscope, Syringe, WandSparkles } from "lucide-react";

export const practice = {
  name: "Hearthside Family Dental",
  city: "Maple Grove",
  phone: "(800) 555-0198",
  email: "hello@hearthsidedental.example",
  founded: "1987",
  tagline: "Gentle care for every smile in your family.",
};

export const navItems = [
  { label: "Services", to: "/services" },
  { label: "New Patients", to: "/new-patients" },
  { label: "Our Team", to: "/team" },
  { label: "Locations", to: "/locations" },
  { label: "Resources", to: "/resources" },
] as const;

export const services = [
  { slug: "exams-cleanings", icon: SmilePlus, name: "Exams & Cleanings", category: "Family", description: "Comfortable checkups, cleanings, and practical prevention for every age." },
  { slug: "fillings-crowns", icon: ShieldCheck, name: "Fillings & Crowns", category: "Family", description: "Tooth-colored repairs and durable crowns explained in plain language." },
  { slug: "whitening-cosmetic", icon: Sparkles, name: "Whitening & Cosmetic", category: "Cosmetic", description: "Subtle smile upgrades that still look like you." },
  { slug: "orthodontics", icon: WandSparkles, name: "Orthodontics", category: "Specialty", description: "Clear aligner consults and guided referrals when braces are best." },
  { slug: "pediatric-dentistry", icon: Baby, name: "Pediatric Dentistry", category: "Kids", description: "Patient, playful visits that help kids feel safe in the chair." },
  { slug: "dental-implants", icon: Stethoscope, name: "Dental Implants", category: "Specialty", description: "Implant planning and restorations with clear timelines and costs." },
  { slug: "emergency-care", icon: HeartPulse, name: "Emergency Care", category: "Emergency", description: "Same-day slots for toothaches, broken teeth, and swelling." },
  { slug: "sedation-dentistry", icon: Syringe, name: "Sedation Dentistry", category: "Family", description: "Calming options for anxious visits and longer treatment plans." },
];

export const doctors = [
  { slug: "maya-patel", name: "Dr. Maya Patel", credentials: "DDS", specialty: "Family dentistry", languages: "English, Spanish", bio: "Known for calm explanations and gentle care for first-time patients.", initials: "MP" },
  { slug: "jonathan-reed", name: "Dr. Jonathan Reed", credentials: "DMD", specialty: "Restorative care", languages: "English", bio: "Helps families choose practical treatment plans without pressure.", initials: "JR" },
  { slug: "sofia-morales", name: "Dr. Sofia Morales", credentials: "DDS", specialty: "Pediatric dentistry", languages: "English, Spanish", bio: "Makes kids' visits feel safe, predictable, and even a little fun.", initials: "SM" },
];

export const locations = [
  { slug: "maple-grove", name: "Maple Grove", address: "1240 Oak Hollow Road, Maple Grove, OK 73003", hours: "Mon–Thu 8–6, Fri 8–2", today: "Open today until 6:00 PM", phone: "(800) 555-0198" },
  { slug: "edmond-west", name: "Edmond West", address: "88 Prairie View Lane, Edmond, OK 73012", hours: "Mon–Fri 7:30–5", today: "Open today until 5:00 PM", phone: "(800) 555-0184" },
  { slug: "north-park", name: "North Park", address: "512 Cedar Bend Ave, Oklahoma City, OK 73114", hours: "Tue–Sat 8–4", today: "Same-day emergency slots", phone: "(800) 555-0177" },
];

export const reviews = [
  { name: "Angela R.", place: "Edmond, OK", date: "March 2026", quote: "They explained every cost before doing anything. My kids left smiling and asked when we were going back." },
  { name: "Marcus T.", place: "Maple Grove, OK", date: "February 2026", quote: "I had a toothache and they got me in the same afternoon. Calm, kind, and very clear about next steps." },
  { name: "Priya S.", place: "North Park", date: "January 2026", quote: "The hygienist was gentle and Dr. Patel never made me feel rushed. Best dental visit I've had." },
];

export const carriers = ["Delta Dental", "Aetna", "Cigna", "MetLife", "Guardian", "Humana", "UnitedHealthcare", "BlueCross", "Principal", "Ameritas", "GEHA", "CareCredit"];
