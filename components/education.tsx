"use client";

import Reveal from "./reveal";

export default function Education() {
  const items = [
    { school: "KLE Institute of Technology — B.E CSE", place: "Hubli, Karnataka", time: "2022 – Present", detail: "GPA: 8.3/10.0" },
    { school: "SIR M Visvesvaraya PU College — Class 12", place: "Hubli, Karnataka", time: "2022", detail: "84.05%" },
    { school: "Nittur Central School — Class 10", place: "Hubli, Karnataka", time: "2020", detail: "84.04%" }
  ];

  return (
    <section id="education" className="container mx-auto px-4 sm:px-6 md:px-0 py-12">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Education</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {items.map((i, index) => (
          <Reveal key={i.school} delay={index * 0.05}>
            <div className="rounded-2xl border border-border p-6 bg-card w-full">
              <div className="font-semibold text-base sm:text-lg">{i.school}</div>
              <div className="text-sm sm:text-base text-muted-foreground">{i.place}</div>
              <div className="text-sm sm:text-base mt-1">{i.time} • {i.detail}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
