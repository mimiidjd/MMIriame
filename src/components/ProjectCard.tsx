'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Project } from '@/types/project';
import { categoryConfig } from '@/data/categories';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const displayedCategories = showAllCategories 
    ? project.categories 
    : project.categories.slice(0, 2);

  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[400px] flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-col gap-2 mb-2">
            <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {displayedCategories.map((category) => {
                const config = categoryConfig[category];
                return (
                  <span
                    key={category}
                    className={`px-2 py-0.5 text-xs font-medium rounded-md ${config.bgColor} ${config.color} shadow-sm hover:shadow transition-shadow duration-200`}
                  >
                    {category}
                  </span>
                );
              })}
              {project.categories.length > 2 && (
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Empêche la navigation vers le lien
                    setShowAllCategories(!showAllCategories);
                  }}
                  className="px-2 py-0.5 text-xs font-medium rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                >
                  {showAllCategories ? '−' : '+'}
                </button>
              )}
            </div>
          </div>
          <p className="text-gray-600 line-clamp-3 mt-auto">
            {project.description}
          </p>
        </div>
      </article>
    </Link>
  );
} 