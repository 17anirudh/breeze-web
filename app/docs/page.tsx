import Data from "./docs.mdx";

export default function DocsHome() {
  return (
    <main className="w-full min-h-screen flex flex-col center gap-6 typeset max-w-screen sm:w-[80vw] mt-20">
      <Data />
    </main>
  );
}
