import React from "react";
import parse from "html-react-parser";
import { cn } from "@/lib/cn";

interface HTMLParserProps {
  content: string;
  className?: string;
}

const HTMLParser: React.FC<HTMLParserProps> = ({ content, className }) => {
  return (
    <div className={cn("prose prose-lg", className)}>{parse(content)}</div>
  );
};

export default HTMLParser;
