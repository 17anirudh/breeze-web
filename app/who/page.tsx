import { ViewTransition } from "react";

export default function WhoHome() {
  return (
    <ViewTransition default="auto" enter="fade" exit="fade">
      <main className="w-full min-h-screen flex flex-col items-center justify-center gap-6">
        <video
          src="https://media.tenor.com/7lXpuCpDObwAAAPo/gintama-smug.mp4"
          autoPlay
          loop
          muted
          className="w-sm aspect-video"
        />
      </main>
    </ViewTransition>
  );
}
