import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ProjectsScroll } from "@/components/ProjectsScroll";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mohamad-ajmal.vercel.app";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ajmal Riswan",
    alternateName: "Ajmal Riswan",
    jobTitle: "Software Developer, Mobile Application Developer, Web Apps Developer",
    description:
      "Software Developer, Mobile Application Developer, and Web Apps Developer with hands-on project experience in backend development, REST APIs, web applications, and Android apps.",
    url: siteUrl,
    image: `${siteUrl}/images/mohammad_ajmal_isolated.png`,
    sameAs: [
      "https://linkedin.com/in/ajmal-rm",
      "https://github.com/AjmalRizz",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "ICBT Kandy Campus",
      },
      {
        "@type": "EducationalOrganization",
        name: "B/Al Murshid Maha Vidyalaya",
      },
    ],
    knowsAbout: [
      "Backend Architecture",
      "REST APIs",
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "Node.js",
      "Java",
      "SQL Server",
      "MySQL",
      "Android Studio",
      "Role-Based Access Control",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Technical Skills Section */}
      <Skills />

      {/* 3. Selected Projects Section */}
      <ProjectsScroll />

      {/* 4. Education & Methodology Section */}
      <Education />

      {/* 5. Contact Section */}
      <Contact />
    </>
  );
}
