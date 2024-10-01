import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

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
    <Button variant={"ghost"} asChild>
      <Link href={href} title={title}>
        {text}
      </Link>
    </Button>
  );
}
