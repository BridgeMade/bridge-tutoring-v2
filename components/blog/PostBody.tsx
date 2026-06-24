import type { Block } from "@/content/blog";

// Renders structured post blocks into semantic HTML. Server component.
export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="text-2xl font-bold text-neutral-900 pt-6 leading-snug"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="text-lg font-semibold text-neutral-900 pt-2"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc pl-6 space-y-2 text-neutral-700">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal pl-6 space-y-2 text-neutral-700">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-coral-300 pl-5 italic text-neutral-600"
              >
                {block.text}
              </blockquote>
            );
          case "p":
          default:
            return (
              <p key={i} className="text-neutral-700 leading-relaxed">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
