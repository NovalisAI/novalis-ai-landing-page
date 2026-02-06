import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader />
      <main>
        <ProjectsGallery />
      </main>
    </div>
  );
}
