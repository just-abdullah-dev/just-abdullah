import { SITE } from "@/lib/site";

export default function manifest() {
  return {
    name: SITE.brand,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F2F4F7",
    theme_color: "#0C1222",
    icons: [
      {
        src: "/avatar.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/avatar.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
