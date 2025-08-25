export default function Experience() {
  const roles = [
    { role: "AI & ML Trainee", org: "Samsung Innovation Campus", time: "Aug 2025 — Present", bullets: [
      "Structured training in AI/ML covering Python, statistics, linear algebra, supervised & unsupervised learning, and intro to deep learning.",
      "Hands-on project work with industry-relevant applications."
    ]},
    { role: "Secretary", org: "IEEE AESS Chapter, KLEIT", time: "Apr 2025 — Present", bullets: [
      "Coordinated chapter operations, facilitated meetings, documented proceedings, and organized technical programs."
    ]},
    { role: "Social Media Coordinator", org: "IEEE Computer Society, KLEIT", time: "Jul 2025 — Present", bullets: [
      "Directed chapter’s online presence, executed social media campaigns, and promoted events."
    ]},
    { role: "Webmaster", org: "IEEE AESS Chapter, KLEIT", time: "Jan 2024 — Apr 2025", bullets: [
      "Maintained and updated the chapter website, managed digital resources, and supported online visibility."
    ]},
    { role: "Volunteer", org: "IEEE SPACE 2025 Conference", time: "Jul 2025", bullets: [
      "Assisted in event operations and participant coordination at Sheraton Grand, Whitefield, Bangalore."
    ]},
  ]
  return (
    <section id="experience" className="container py-12">
      <h2 className="text-3xl font-bold mb-6">Experience & Leadership</h2>
      <div className="space-y-6">
        {roles.map(r => (
          <div key={r.role} className="rounded-2xl border border-border p-6 bg-card">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{r.role} — {r.org}</h3>
              <div className="text-sm text-muted-foreground">{r.time}</div>
            </div>
            <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground">
              {r.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
