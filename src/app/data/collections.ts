export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  origin: string;
  technique: string;
  products?: Product[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  collectionId: string;
}

export interface Artisan {
  id: string;
  name: string;
  location: string;
  specialty: string;
  image: string;
  bio: string;
  establishedYear: number;
  collections: string[];
}

export const collections: Collection[] = [
  {
    id: "modern-batik",
    title: "Modern Batik",
    description: "Contemporary interpretations of traditional batik patterns",
    image: "https://images.unsplash.com/photo-1621498239513-213c9fa91190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    fullDescription: "Our Modern Batik collection bridges centuries of Indonesian heritage with contemporary fashion. Each piece features hand-drawn or hand-stamped wax-resist dyeing techniques passed down through generations, reimagined for today's global wardrobe.",
    origin: "Central Java & Yogyakarta",
    technique: "Traditional wax-resist dyeing (canting & cap methods)",
    products: [
      {
        id: "batik-dress-1",
        name: "Contemporary Batik Midi Dress",
        price: 2250000,
        image: "https://images.unsplash.com/photo-1621498239513-213c9fa91190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        description: "Elegant midi dress featuring traditional parang motifs",
        collectionId: "modern-batik"
      },
      {
        id: "batik-shirt-1",
        name: "Batik Casual Shirt",
        price: 1380000,
        image: "https://images.unsplash.com/photo-1590254717271-74f933bdb5ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        description: "Versatile shirt with geometric batik patterns",
        collectionId: "modern-batik"
      },
      {
        id: "batik-jacket-1",
        name: "Batik Statement Jacket",
        price: 3070000,
        image: "https://images.unsplash.com/photo-1641565352066-8e0958c6ba0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        description: "Bold structured jacket with intricate batik details",
        collectionId: "modern-batik"
      }
    ]
  },
  {
    id: "songket-luxury",
    title: "Songket Luxury",
    description: "Handwoven textiles with metallic threads",
    image: "https://images.unsplash.com/photo-1745292502176-d0f67c8a2766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    fullDescription: "Songket represents the pinnacle of Indonesian weaving artistry. This luxurious textile incorporates gold or silver threads woven into silk or cotton, creating shimmering patterns that have adorned royalty for centuries.",
    origin: "Palembang, South Sumatra & West Sumatra",
    technique: "Supplementary weft weaving with metallic threads",
    products: [
      {
        id: "songket-gown-1",
        name: "Ceremonial Songket Gown",
        price: 6975000,
        image: "https://images.unsplash.com/photo-1745292502176-d0f67c8a2766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        description: "Luxurious gown with gold thread detailing",
        collectionId: "songket-luxury"
      },
      {
        id: "songket-scarf-1",
        name: "Songket Silk Scarf",
        price: 2560000,
        image: "https://images.unsplash.com/photo-1588006324772-90fd2d83f522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        description: "Elegant silk scarf with metallic weave accents",
        collectionId: "songket-luxury"
      }
    ]
  },
  {
    id: "urban-tenun",
    title: "Urban Tenun",
    description: "Traditional weaving techniques, modern silhouettes",
    image: "https://images.unsplash.com/photo-1680345575812-2f6878d7d775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    fullDescription: "Tenun ikat showcases Indonesia's rich weaving traditions from islands across the archipelago. Our Urban Tenun collection translates these bold, geometric patterns into contemporary streetwear and everyday essentials.",
    origin: "Flores, Sumba, Timor & Sulawesi",
    technique: "Ikat (resist-dyeing before weaving)",
    products: [
      {
        id: "tenun-blazer-1",
        name: "Tenun Tailored Blazer",
        price: 3490000,
        image: "https://images.unsplash.com/photo-1680345575812-2f6878d7d775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        description: "Modern blazer with traditional tenun patterns",
        collectionId: "urban-tenun"
      },
      {
        id: "tenun-pants-1",
        name: "Tenun Wide-Leg Pants",
        price: 2095000,
        image: "https://images.unsplash.com/photo-1637328603774-9d7604a7748f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        description: "Comfortable pants featuring ikat weaving",
        collectionId: "urban-tenun"
      }
    ]
  }
];

export const artisans: Artisan[] = [
  {
    id: "bu-siti",
    name: "Bu Siti Rahmawati",
    location: "Yogyakarta, Central Java",
    specialty: "Traditional Batik Tulis",
    image: "https://images.unsplash.com/photo-1588006324772-90fd2d83f522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    bio: "Bu Siti learned the ancient art of batik from her grandmother at age 12. For over 30 years, she has been creating intricate hand-drawn batik using the traditional canting tool. Her workshop in Yogyakarta employs 15 local artisans, preserving techniques that date back centuries while exploring contemporary color palettes and designs.",
    establishedYear: 1994,
    collections: ["modern-batik"]
  },
  {
    id: "pak-ahmad",
    name: "Pak Ahmad Hidayat",
    location: "Palembang, South Sumatra",
    specialty: "Songket Weaving",
    image: "https://images.unsplash.com/photo-1745293007697-efa1084793ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    bio: "Coming from a family of master weavers, Pak Ahmad specializes in songket textiles woven with gold and silver threads. His workshop maintains traditional floor looms while incorporating sustainable practices. Each piece can take weeks to complete, representing hours of meticulous handwork.",
    establishedYear: 2001,
    collections: ["songket-luxury"]
  },
  {
    id: "ibu-maria",
    name: "Ibu Maria Kaleka",
    location: "Ende, Flores",
    specialty: "Ikat Tenun",
    image: "https://images.unsplash.com/photo-1590254717271-74f933bdb5ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    bio: "Ibu Maria is a master of the complex ikat technique, where threads are resist-dyed before weaving to create intricate patterns. Her designs draw from ancestral motifs of Eastern Indonesia, telling stories of her island's rich cultural heritage through textile art.",
    establishedYear: 1998,
    collections: ["urban-tenun"]
  },
  {
    id: "pak-budi",
    name: "Pak Budi Santoso",
    location: "Solo, Central Java",
    specialty: "Batik Cap",
    image: "https://images.unsplash.com/photo-1637328603774-9d7604a7748f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    bio: "Pak Budi specializes in batik cap, using hand-carved copper stamps to create repeated patterns. His family has operated their batik workshop in Solo for three generations, combining efficiency with artisanal quality to make Indonesian textiles accessible worldwide.",
    establishedYear: 1987,
    collections: ["modern-batik"]
  }
];
