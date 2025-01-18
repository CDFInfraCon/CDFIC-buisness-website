"use client";
import ImageCarousel from "@/app/components/image-crousel/page";
import ProjectTabs from "@/app/components/project-tabs/page";

const ProjectsPage = () => {
  return (
    <div>
      <section className="relative bg-cover bg-center min-h-[200px] sm:h-64 md:h-72 lg:h-80 bg-gray-400">
        <ImageCarousel />
      </section>

      <div className="min-h-screen bg-gray-100  sm:py-12 md:py-16 lg:py-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Our Projects
          </h1>
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 opacity-100">
            <ProjectTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
