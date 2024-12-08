"use client";
import ImageCarousel from "@/app/components/image-crousel/page";
import ProjectTabs from "@/app/components/project-tabs/page";

const ProjectsPage = () => {
  return (
    <>
      <section className="relative bg-cover bg-center  md:h-72 lg:h-80 bg-gray-400  ">
        <ImageCarousel />
      </section>

      <div className="h-auto bg-gray-100 py-20 mt-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-left px-4 text-gray-800">

            <ProjectTabs />
          </h1>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
