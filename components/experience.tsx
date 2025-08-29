"use client";

import Reveal from "./reveal";

export default function Experience() {
  const roles = [
    { 
      role: "AI & ML Trainee", 
      org: "Samsung Innovation Campus", 
      time: "Aug 2025 — Present", 
      bullets: [
        "Structured training in AI/ML covering Python, statistics, linear algebra, supervised & unsupervised learning, and intro to deep learning.",
        "Hands-on project work with industry-relevant applications."
      ]
    },
    { 
      role: "Secretary", 
      org: "IEEE AESS Chapter, KLEIT", 
      time: "Apr 2025 — Present", 
      bullets: [
        "Coordinated chapter operations, facilitated meetings, documented proceedings, and organized technical programs."
      ]
    },
    { 
      role: "Social Media Coordinator", 
      org: "IEEE Computer Society, KLEIT", 
      time: "Jul 2025 — Present", 
      bullets: [
        "Directed chapter’s online presence, executed social media campaigns, and promoted events."
      ]
    },
    { 
      role: "Webmaster", 
      org: "IEEE AESS Chapter, KLEIT", 
      time: "Jan 2024 — Apr 2025", 
      bullets: [
        "Maintained and updated the chapter website, managed digital resources, and supported online visibility."
      ]
    },
    { 
      role: "Volunteer", 
      org: "IEEE SPACE 2025 Conference", 
      time: "Jul 2025", 
      bullets: [
        "Assisted in event operations and participant coordination at Sheraton Grand, Whitefield, Bangalore."
      ]
    },
  ];

  return (
    <section id="experience" className="container mx-auto px-4 sm:px-6 md:px-0 py-12">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Experience & Leadership</h2>
      </Reveal>
      <div className="space-y-6">
        {roles.map((r, index) => (
          <Reveal key={r.role} delay={index * 0.05}>
            <div className="rounded-2xl border border-border p-6 bg-card">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {r.role} — {r.org}
                </h3>
                <div className="text-sm text-muted-foreground whitespace-nowrap">{r.time}</div>
              </div>
              <ul className="list-disc pl-6 mt-2 text-sm sm:text-base text-muted-foreground space-y-1">
                {r.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
