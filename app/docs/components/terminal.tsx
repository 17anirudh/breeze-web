"use client";

import { CheckIcon, ClipboardIcon, TerminalIcon } from "@phosphor-icons/react";
import { useState } from "react";

type Props = {
  text: string;
  style: "cmd";
};

export function TerminalCopy({ text }: Props) {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = async (): Promise<void> => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return;
    } catch (error) {
      console.error("Copy failed", error);
      setCopied(false);
      return;
    }
  };

  return (
    <div className="w-fit p-2 font-mono rounded-2xl flex flex-col center border-2 bg-black">
      <div className="border-b w-full flex justify-between">
        <TerminalIcon />
        <button
          type="button"
          onClick={copy}
          className="bg-transparent transition-transform duration-200 ease-in-out active:scale-90"
        >
          {copied ? <CheckIcon color="green" /> : <ClipboardIcon />}
        </button>
      </div>
      <span className="font-mono w-full wrap-break-word text-wrap p-2 whitespace-break-spaces max-w-[90vw]">
        {text}
      </span>
    </div>
  );
}
