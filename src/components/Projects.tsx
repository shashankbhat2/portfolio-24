import { BentoGrid, BentoGridItem } from "./bento-grid";

export function Projects() {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          image={item.image}
          techStack={item.techStack}
          link={item.link}
          bgUrl={item.bgUrl}
          className={i === 0 ? "md:col-span-3" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Fireshort",
    description: "a simple short video subtitling tool with automattic word highligting, emojis, b-rolls, zooms ",
    header: <Skeleton />,
    image: "/thumbs/fireshort-thumb.png",
    techStack:"next.js - mongodb - remotion",
    bgUrl: "/gradients/1.png",
    link: "https://www.fireshort.in"
  },
  {
    title: "Inside Out Studios",
    description: "Minimal Corporate site for an Architecture firm.",
    header: <Skeleton />,
    image: "/thumbs/inside-out-studios-thumb.png",
    bgUrl: "/gradients/2.png",
    techStack:"next.js - gsap - contentful - tailwindcss",
    link: "https://www.theinsideoutstudio.in/"
  },
  {
    title: "Flipbooks",
    description: "On-demand book ordering website",
    header: <Skeleton />,
    image: "/thumbs/flipbooks-thumb.png",
    bgUrl: "/gradients/3.png",
    techStack:"next.js - firebase - chakraui",
    link: "https://flipbooks.vercel.app/"
  },
  {
    title: "Flipbooks Admin",
    description:
      "Minimalistic admin dashboard for Flibooks",
    header: <Skeleton />,
    image: "/thumbs/flipbooks-admin-thumb.png",
    bgUrl: "/gradients/4.png",
    techStack:"react - firebase - chakraui",
    link: "https://flipbooks-admin.vercel.app/"
  },

];
