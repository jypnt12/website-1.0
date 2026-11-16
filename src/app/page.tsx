import { SectionRenderer } from "@/components/SectionRenderer";
import { getHomePage } from "@/lib/content";

export default function Home() {
  const page = getHomePage();

  return (
    <main id="main-content" className="flex-1">
      <SectionRenderer sections={page.sections} />
    </main>
  );
}
