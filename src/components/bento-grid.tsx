import { cn } from "../utils/cn"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[30rem] grid-cols-1 md:grid-cols-3 gap-5",
        className
      )}
      data-aos="fade-up"
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  image,
  link,
  bgUrl,
  description,
  header,
  icon,
  techStack
}: {
  className?: string;
  image?: string;
  techStack?: string;
  bgUrl?: string;
  link?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 cursor-pointer rounded-xl h-full overflow-hidden hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-start gap-4 flex flex-col",
        className
      )}
    >
      <div className={`flex flex-row justify-end items-center overflow-hidden bg-[url('${bgUrl}')] bg-cover	 rounded-md`}>
        <img src={image} alt="title" className="rounded-lg" />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex gap-5 flex-col">
        {icon}
        <div className="font-serif text-lg  md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans  text-sm font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
        <div className="font-sans  text-sm font-normal text-neutral-600 dark:text-neutral-300">
          {techStack}
        </div>
        <a href={link} target="_blank" className="border border-slate-600 w-[100px] text-black flex justify-center items-center px-12 text-sm py-4 rounded-md tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Live
        </a>
      </div>
    </div>
  );
};
