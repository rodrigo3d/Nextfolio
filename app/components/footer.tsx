"use client";

import { Icon } from "@/components//icons";
import { metaData, socialLinks } from "@/config";
import Link from "next/link";

const YEAR = new Date().getFullYear();

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      {Object.entries(socialLinks)
        .filter(([_, value]) => String(value))
        .map(([key, value]) => (
          <Link
            key={key}
            href={value}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name={key} width={18} height={18} />
          </Link>
        ))}
      <Link href="/rss.xml" target="_self">
        <Icon name={"rss"} width={18} height={18} />
      </Link>
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time> {metaData.title}
      <SocialLinks />
    </small>
  );
}
