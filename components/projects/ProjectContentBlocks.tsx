import Image from "next/image";

type ImageSection = {
  type: "image";
  src: string;
  alt: string;
};

type TextSection = {
  type: "text";
  title?: string;
  paragraphs?: string[];
  list?: string[];
};

export type ContentSection = ImageSection | TextSection;

export function ProjectContentBlocks({
  sections,
}: {
  sections: ContentSection[];
}) {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {sections.map((section, i) => {
        if (section.type === "image") {
          return (
            <div key={i} className="w-full overflow-hidden rounded-2xl">
              <Image
                src={section.src}
                alt={section.alt}
                width={1920 * 2}
                height={1080 * 2}
                className="w-full h-auto object-cover"
              />
            </div>
          );
        }

        if (section.type === "text") {
          return (
            <div key={i} className="max-w-2xl">
              {section.title && (
                <h3 className="mb-4 font-profont text-lg uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {section.title}
                </h3>
              )}
              {section.paragraphs?.map((p, j) => (
                <p
                  key={j}
                  className="mb-3 text-zinc-700 dark:text-zinc-300 leading-relaxed"
                >
                  {p}
                </p>
              ))}
              {section.list && section.list.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2">
                  {section.list.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="size-1.5 rounded-full bg-rose-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
