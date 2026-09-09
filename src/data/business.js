// Centralized business data for Best Enough Driving School.
// Every figure here comes directly from the business flyer supplied by the client.
// Do not add reviews, pass rates, years-in-business, or credentials that are not
// explicitly provided — placeholders are used instead so the client can fill them in.

export const business = {
  name: "Best Enough Driving School",
  tagline: "The Best Driving In Mzansi",
  regNo: "2010/108684/23",
  email: "mtilatp@gmail.com",
  phoneDisplay: "078 281 6263",
  phoneHref: "tel:+27782816263",
  whatsappNumber: "27782816263",
};

export const locations = [
  {
    id: "mmabatho",
    name: "Mmabatho",
    lines: ["210 Steve Biko", "Unit 2", "Mmabatho", "2735"],
    mapQuery: "210 Steve Biko, Unit 2, Mmabatho, 2735",
  },
  {
    id: "mafikeng",
    name: "Mafikeng",
    lines: ["7356 Robert Sobukwe", "Montshiwa", "Next to Ditobane", "Mafikeng", "2745"],
    mapQuery: "7356 Robert Sobukwe, Montshiwa, Mafikeng, 2745",
  },
];

// Core licence / service offerings
export const services = [
  {
    id: "code8",
    code: "Code 8",
    name: "Code 8",
    description: "Professional light motor vehicle training.",
  },
  {
    id: "code10",
    code: "Code 10",
    name: "Code 10",
    description: "Training for larger vehicles and licence preparation.",
  },
  {
    id: "learners",
    code: "Learners",
    name: "Learners",
    description: "Learner licence preparation and classes.",
  },
  {
    id: "car-hire",
    code: "Car Hire",
    name: "Car Hire",
    description: "Vehicle hire for your licence test.",
  },
  {
    id: "truck-hire",
    code: "Truck Hire",
    name: "Truck Hire",
    description: "Truck hire for your Code 10 test.",
  },
];

// Exact pricing from the flyer — do not alter.
export const pricing = {
  code8: [
    { label: "1 Hour", price: 250 },
    { label: "5 Hours", price: 1250 },
    { label: "10 Hours", price: 2500 },
  ],
  code10: [
    { label: "1 Hour", price: 300 },
    { label: "5 Hours", price: 1500 },
    { label: "10 Hours", price: 3000 },
  ],
  learners: [{ label: "All Codes", price: 1000 }],
  carHire: { price: 650 },
  truckHire: { price: 750 },
};

export const packages = [
  {
    id: "code8-package",
    name: "Code 8 Package",
    detail: "25 lessons + car hire",
    price: 5500,
  },
  {
    id: "code10-package",
    name: "Code 10 Package",
    detail: "25 lessons + car & truck hire",
    price: 6500,
  },
];

// The flyer states "Guaranteed pass for Package" — displayed as a headline claim
// with terms the business can define later. Never presented as an unconditional guarantee.
export const packageGuaranteeNote =
  "The flyer for our lesson packages references a pass guarantee. Full terms and conditions for this guarantee are available directly from Best Enough Driving School — ask our team when you book.";

export const journeySteps = [
  { id: "01", title: "Learn", description: "Start with the fundamentals of vehicle control and the rules of the road." },
  { id: "02", title: "Practice", description: "Get behind the wheel and build real driving hours with an instructor." },
  { id: "03", title: "Build Confidence", description: "Work through traffic, parking, and manoeuvres until they feel natural." },
  { id: "04", title: "Prepare", description: "Sharpen the specific skills your licence test will check." },
  { id: "05", title: "Get Licensed", description: "Sit your test and drive away with your licence." },
];

// Factual, non-invented value propositions
export const valueProps = [
  {
    title: "Practical Training",
    description: "Hands-on lessons behind the wheel, not just theory.",
  },
  {
    title: "Local Training",
    description: "Based in Mmabatho and Mafikeng, training on the roads you'll actually drive.",
  },
  {
    title: "Flexible Lesson Options",
    description: "Book by the hour or take on a full package — Code 8, Code 10 or Learners.",
  },
  {
    title: "Multiple Licence Services",
    description: "Code 8, Code 10, Learners, car hire and truck hire all under one roof.",
  },
];

export const faqs = [
  {
    q: "What is Code 8?",
    a: "Code 8 is the licence class for light motor vehicles (standard cars).",
  },
  {
    q: "What is Code 10?",
    a: "Code 10 is the licence class for larger vehicles, including trucks.",
  },
  {
    q: "Do you offer learner's licence classes?",
    a: "Yes. We offer learner's licence preparation and classes covering all codes.",
  },
  {
    q: "How much are driving lessons?",
    a: "Code 8 starts at R250 for 1 hour, Code 10 starts at R300 for 1 hour, and Learners classes are R1,000 for all codes. See the pricing section above for the full breakdown.",
  },
  {
    q: "Do you offer car hire?",
    a: "Yes, car hire is available for R650.",
  },
  {
    q: "Do you offer truck hire?",
    a: "Yes, truck hire is available for R750.",
  },
  {
    q: "Where are you located?",
    a: "We operate from Mmabatho (210 Steve Biko, Unit 2) and Mafikeng (7356 Robert Sobukwe, Montshiwa, next to Ditobane).",
  },
  {
    q: "How do I book?",
    a: "Use the booking form on this page or message us directly on WhatsApp at 078 281 6263.",
  },
];

export const clients = [
  { id: "client-a", name: "Client", note: "Licensed with Best Enough" },
  { id: "client-b", name: "Client", note: "Licensed with Best Enough" },
  { id: "client-c", name: "Client", note: "Licensed with Best Enough" },
];
