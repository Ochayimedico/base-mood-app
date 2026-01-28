export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL
  
  return Response.json({
    accountAssociation: {
      // These will be generated in Base Build - leave empty for now
      header: "",
      payload: "",
      signature: ""
    },
    miniapp: {
      version: "1",
      name: "Base Vibes",
      homeUrl: URL,
      iconUrl: `${URL}/icon.png`,
      splashImageUrl: `${URL}/splash.png`,
      splashBackgroundColor: "#7c3aed",
      subtitle: "Track your daily vibes",
      description: "A fun and colorful way to track your mood throughout the day on Base.",
      screenshotUrls: [
        `${URL}/screenshot1.png`,
        `${URL}/screenshot2.png`,
        `${URL}/screenshot3.png`
      ],
      primaryCategory: "social",
      tags: ["mood", "tracker", "vibes", "wellness"],
      heroImageUrl: `${URL}/hero.png`,
      tagline: "Share your vibes",
      ogTitle: "Base Vibes - Mood Tracker",
      ogDescription: "Track and share your daily vibes on Base",
      ogImageUrl: `${URL}/og-image.png`,
      noindex: true
    }
  });
}
