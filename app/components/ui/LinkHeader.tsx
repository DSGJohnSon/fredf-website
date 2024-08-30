import Link from "next/link";
import React from "react";

export default function LinkHeader({
  text,
  href,
  title,
}: {
  text: string;
  href: string;
  title: string;
}) {
  return (
    <Link href={href} title={title}>
      {text}
    </Link>
  );
}
