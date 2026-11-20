"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site-data";

const initials = siteConfig.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

type ProfileImageProps = {
  className?: string;
  priority?: boolean;
};

export function ProfileImage({ className, priority = false }: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);
  const showPlaceholder = hasError;

  return (
    <div
      className={`profile-image-ring profile-photo-frame relative overflow-hidden rounded-3xl ${className ?? ""}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[calc(1.5rem-2px)] bg-zinc-900">
        {!showPlaceholder ? (
          <Image
            src={siteConfig.profile.image}
            alt={siteConfig.profile.alt}
            fill
            priority={priority}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 420px"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-emerald-950/60 via-zinc-900 to-teal-950/50">
            <span className="text-5xl font-semibold tracking-tight text-zinc-300 sm:text-6xl">
              {initials}
            </span>
            <p className="mt-4 px-6 text-center text-xs text-zinc-500">
              Add your photo at{" "}
              <code className="rounded bg-white/5 px-1.5 py-0.5 text-zinc-400">
               public/profile.jpg
              </code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
