export const site = {
  name: "PET shop",
  legalName: "PET shop",
  brandName: "PET shop",
  ownerName: "Ronit",
  alternateNames: ["PET shop", "PET shop Lucknow", "Ronit PET shop"],
  description:
    "Healthy, vet-checked puppies in Lucknow — inquire for availability, fees, and records; local handoff support.",
  city: "Lucknow",
  region: "Uttar Pradesh",
  country: "IN",
  serviceAreas: [
    "Cantonment",
    "Arjunganj",
    "Gomti Nagar",
    "Indira Nagar",
    "Aliganj",
    "Hazratganj",
    "Lucknow Cantt",
  ],
  address: {
    locality: "Cantonment",
    city: "Lucknow",
    region: "Uttar Pradesh",
    postalCode: "226002",
    country: "IN",
  },
  geo: {
    latitude: 26.7606,
    longitude: 80.9959,
  },
  url: "https://www.pawluxe.com",
  email: "Ronit.gipl@gmail.com",
  phone: "+91 70546 11731",
  /** E.164 without spaces — use for tel:, sms:, and wa.me */
  phoneHref: "+917054611731",
  /** Same number as WhatsApp Business / chat link */
  whatsappHref: "https://wa.me/917054611731",
  ratingValue: 4.4,
  reviewCount: 85,
  locale: "en_US",
} as const;
