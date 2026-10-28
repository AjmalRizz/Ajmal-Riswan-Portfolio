export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  stack: string[];
  role: string;
  lead?: boolean;
  team?: string;
  image: string;
  summary: string;
  problem: string;
  myRole: string;
  keyDecisions: string[];
  outcome: string;
  facts: string[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "nwsdb-service-system",
    title: "NWSDB Service-Oriented System",
    subtitle: "Water billing and third-party payment API integration",
    date: "Sep 2026",
    lead: true,
    githubUrl: "https://github.com/AjmalRizz/NWSDB-SOA-Payment-Integration",
    stack: [
      "C#",
      ".NET",
      "SQL Server",
      "Entity Framework Core",
      "REST APIs",
      "Scalar",
    ],
    role: "Implemented the API integration between the NWSDB water billing system and a third-party payment service. Built a service-oriented solution for online water bill and usage management, using SQL Server and Entity Framework Core for data access. Documented and tested the REST endpoints with Scalar.",
    image: "/images/projects/nwsdb-service-system.jpg",
    summary:
      "A service-oriented solution for the National Water Supply and Drainage Board (NWSDB) to manage consumer water accounts, view meter usage, and process online payments through a third-party payment service.",
    problem:
      "Consumers needed an online way to check water usage and settle monthly bills. The existing water billing database required a secure API bridge to connect with external payment providers without exposing internal records directly.",
    myRole:
      "I was responsible for backend architecture and API integration. I built the REST endpoints in C# and .NET, mapped database entities using Entity Framework Core with SQL Server, integrated the third-party payment callback flow, and documented the APIs in Scalar.",
    keyDecisions: [
      "Separated the billing logic from the external payment gateway callback using a service-oriented structure.",
      "Used Entity Framework Core with SQL Server for strongly typed migrations and schema consistency.",
      "Adopted Scalar for API documentation and interactive endpoint testing during development.",
      "Structured payment confirmation with validation checks before updating bill payment status in the database.",
    ],
    outcome:
      "Delivered a working service-oriented backend that synchronizes billing records, logs payment status updates, and provides clear endpoint contracts verified through Scalar test collections.",
    facts: [
      "Direct API integration between the NWSDB water billing system and a third-party payment provider.",
      "Online water bill lookups and usage records backed by SQL Server.",
      "Entity Framework Core for relational data access and repository operations.",
      "Interactive endpoint documentation and test suite configured in Scalar.",
    ],
  },
  {
    slug: "printxpress",
    title: "PrintXpress",
    subtitle: "Digital printing order and tracking Android app",
    date: "Jul 2026",
    githubUrl: "https://github.com/AjmalRizz/PrintXpress-App",
    stack: ["Java", "Android Studio", "Firebase"],
    role: "Built an Android app that lets customers browse printing products, customize their orders, and track order progress.",
    image: "/images/projects/printxpress.jpg",
    summary:
      "A native Android application designed for print shop clients to configure custom print specs, submit print files, and follow live job production stages.",
    problem:
      "Print shop customers had to place orders over the counter or via messaging apps. There was no single place to select paper weights, size options, and check whether their print job had reached the press or was ready for pickup.",
    myRole:
      "I built the Android application in Java using Android Studio. I designed the product catalog layouts, built order customization forms, and linked the app to Firebase for authentication, real-time status updates, and order storage.",
    keyDecisions: [
      "Used Firebase Firestore and Realtime Database for live order status synchronization without manual polling.",
      "Structured product configuration screens into sequential steps (material selection, dimension input, file upload, checkout).",
      "Created visual timeline indicators for order stages: submitted, in production, printed, ready for pickup.",
    ],
    outcome:
      "Produced a functional Android client that handles print item browsing, user authentication, order submission, and real-time stage tracking.",
    facts: [
      "Native Java implementation built in Android Studio.",
      "Firebase backend for account authentication and order storage.",
      "Interactive order workflow with custom paper selection and live status updates.",
    ],
  },
  {
    slug: "ocodr",
    title: "OCODR: One Citizen, One Digital Record",
    subtitle: "National digital identity platform with RBAC & audit logs",
    date: "Sep 2026",
    githubUrl: "https://github.com/AjmalRizz/One-Citizen-One-Digital-Record-System-",
    team: "Five-member team, CSE5015 Computing Project",
    stack: ["Node.js", "Express", "MySQL", "JWT", "Bcrypt"],
    role: "REST endpoints, JWT sessions, bcrypt password hashing, audit log of every record access, and API tests.",
    image: "/images/projects/ocodr.png",
    summary:
      "A unified citizen identity management system developed by a five-member engineering team for the CSE5015 Computing Project, featuring ten role-based access tiers, QR-code ID verification, and cryptographic audit trails.",
    problem:
      "Public sector record-keeping often fragments citizen data across isolated offices. The challenge was building a centralized record platform where sensitive citizen records are strictly isolated by staff roles, and every single read or modification is auditable.",
    myRole:
      "I worked as part of the five-person team. I was specifically responsible for building the Express REST API endpoints on MySQL, implementing JWT session management, securing passwords with bcrypt, building the tamper-evident audit logging engine for all record reads, and authoring automated API test scripts.",
    keyDecisions: [
      "Enforced ten distinct role-based access levels (RBAC) in middleware to verify user permissions before processing any route.",
      "Logged every single record access into an append-only MySQL audit log table with user ID, timestamp, action type, and record ID.",
      "Implemented bcrypt hashing with salt rounds on user credentials before database storage.",
      "Built automated API test scripts to systematically check unauthorized logins, privilege escalation attempts, and log write reliability.",
    ],
    outcome:
      "Successfully delivered the platform with verified QR-code identity lookups, secure file attachments, and zero unauthenticated route access across all test suites.",
    facts: [
      "Built by a five-member team for the CSE5015 Computing Project.",
      "Ten distinct role-based access control (RBAC) authorization tiers.",
      "JWT-based sessions and bcrypt password hashing.",
      "Tamper-evident audit log capturing every record view and edit.",
      "QR-code citizen ID verification and document upload pipeline.",
      "Automated API test scripts covering authentication, privilege limits, and audit compliance.",
    ],
  },
  {
    slug: "globetrek",
    title: "GlobeTrek: Tourism Travel Management",
    subtitle: "Web platform for browsing and managing travel listings",
    date: "Jun 2026",
    githubUrl: "https://github.com/AjmalRizz/GlobeTrek-Adventures---Travel-Tourism-Management-System",
    stack: ["HTML", "CSS", "PHP", "XAMPP"],
    role: "Built a tourism travel management website for browsing and managing travel listings, running locally on XAMPP.",
    image: "/images/projects/globetrek.jpg",
    summary:
      "A travel package and tourism management web application built with PHP and MySQL, providing travel catalog browsing, reservation management, and admin listing controls.",
    problem:
      "Local tour operators needed a direct portal where travelers can browse itinerary details, select dates, and send booking requests, while operators manage listings through an admin console.",
    myRole:
      "I developed the full application locally on XAMPP. I wrote semantic HTML and CSS for the front-end interfaces, implemented server-side PHP scripts for routing and database queries, and structured the MySQL tables for packages and bookings.",
    keyDecisions: [
      "Used clean server-rendered PHP templates to ensure lightweight page loads without client framework overhead.",
      "Organized separate customer browsing flows and protected administrative panels for listing operations.",
      "Structured relational tables in MySQL to link travel destinations, itineraries, pricing tiers, and customer bookings.",
    ],
    outcome:
      "Created an operational travel portal with package search, itinerary details, booking request handling, and administrative listing tools.",
    facts: [
      "Built with HTML, CSS, PHP, and MySQL running on XAMPP local environment.",
      "Curated travel package directories with detailed itinerary schedules.",
      "Administrative dashboard for creating, modifying, and archiving tour listings.",
    ],
  },
  {
    slug: "green-basket-gui",
    title: "GreenBasketGUI: Shop Stock Management System",
    subtitle: "Desktop inventory and stock monitoring application",
    date: "Dec 2025",
    githubUrl: "https://github.com/AjmalRizz/GreenBasket",
    stack: ["Java", "NetBeans", "Object-Oriented Programming"],
    role: "Built a Java desktop application for managing shop products and stock levels.",
    image: "/images/projects/green-basket-gui.jpg",
    summary:
      "An object-oriented Java desktop application designed for retail store operators to manage product inventories, monitor current stock counts, and flag reorder points.",
    problem:
      "Retail shops often encounter inventory discrepancies and stock-outs when tracking counts on manual sheets. The application addresses the need for a desktop tool to manage product catalogs and monitor stock thresholds.",
    myRole:
      "I designed and implemented the desktop software in Java using NetBeans. I modeled product entities with object-oriented principles (encapsulation, inheritance), created the GUI forms, and wrote stock calculation and threshold alert routines.",
    keyDecisions: [
      "Applied strict OOP design patterns to decouple product data models from the UI layout code.",
      "Built input validation checks to prevent negative quantities and malformed product codes.",
      "Implemented visual alert highlights for items reaching low-stock thresholds.",
    ],
    outcome:
      "Delivered a dependable desktop utility that simplifies inventory intake, item edits, stock reductions, and stock status inspection.",
    facts: [
      "Built with Java in NetBeans IDE using Object-Oriented Programming principles.",
      "Desktop GUI for adding, editing, and categorizing shop items.",
      "Automated stock level tracking with threshold alerts for low quantities.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) {
    return { prev: null, next: null };
  }
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  return { prev, next };
}
