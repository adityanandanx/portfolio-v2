import { socialLinks } from "@/lib/content";
import Link from "next/link";

const Socials = () => {
  return (
    <aside className="fixed left-0 bottom-0 hidden xl:block">
      <div className="p-5 flex flex-col gap-5 items-center">
        {socialLinks.map((l, i) => (
          <Link href={l.href} key={l.href + i}>
            {l.icon}
          </Link>
        ))}
        <span className="h-16 border-r"></span>
      </div>
    </aside>
  );
};

export default Socials;
