export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL
  
  return Response.json({
   
  "accountAssociation": {
    "header": "eyJmaWQiOjg5NzQxNiwidHlwZSI6ImF1dGgiLCJrZXkiOiIweEIxZUM3MTcwMzUxMERGNGNCZTIwNTU5ZTIzNDQxYzQ2QTk4ZkFBRUMifQ",
    "payload": "eyJkb21haW4iOiJiYXNlLW1vb2QtYXBwLnZlcmNlbC5hcHAifQ",
    "signature": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABw9B3N12anI-uvmSFwp0c7_OnlMqPlxMLkyAm5NkDI0V1lolMLPvzKshrPjQqaCyyiwhDx4eLkclLsoRBbUCi2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAl8ZgIay2xclZzG8RWZzuWvO8j9R0fus3XxDee9lRlVy8dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKeyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiUHFMVjBWemZoY1FYbklmY0drYm5CQjJQYS1JckNCU3paN1J4cVhPLUptVSIsIm9yaWdpbiI6Imh0dHBzOi8va2V5cy5jb2luYmFzZS5jb20iLCJjcm9zc09yaWdpbiI6ZmFsc2V9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  
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
