'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { categoryConfig } from '@/data/categories';
import { ProjectCategory } from '@/types/project';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Fonction pour déterminer la catégorie d'un apprentissage
function getLearningCategory(code: string): ProjectCategory {
  if (code.startsWith('AC21')) return 'COMPRENDRE';
  if (code.startsWith('AC22')) return 'CONCEVOIR';
  if (code.startsWith('AC23')) return 'EXPRIMER';
  if (code.startsWith('AC24')) return 'DÉVELOPPER';
  if (code.startsWith('AC25')) return 'ENTREPRENDRE';
  return 'DÉVELOPPER'; // Catégorie par défaut
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [showAllLearnings, setShowAllLearnings] = useState(false);
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const displayedLearnings = showAllLearnings 
    ? project.learnings 
    : project.learnings.slice(0, 3);

  // Function to parse content into sections based on "Title ?\n"
  const parseContent = (content: string) => {
    const sections = content.split(/(?=\n[A-Za-zÀ-ÖØ-öø-ÿ]+\s*\?)/); // Split before a newline followed by Title ?
    const parsedSections: { title: string; text: string }[] = [];

    sections.forEach(section => {
        const lines = section.trim().split('\n');
        if (lines.length > 0) {
            let title = '';
            let textLines = [...lines];

            // Check if the first line looks like a title (ends with ?)
            if (lines[0].trim().endsWith('?')) {
                // Keep the question mark in the title for display
                title = lines[0].trim();
                textLines = lines.slice(1); // Rest are text lines
            }
            // Join remaining lines to form the text body, preserving single newlines within text
            const text = textLines.join('\n').trim();

            // Only add section if there's a title or non-empty text
            if (title || text) {
                parsedSections.push({ title, text });
            }
        }
    });

    return parsedSections;
  };

  const contentSections = parseContent(project.content);

  return (
    <>
      <Header />
      <main className="pt-20">
        <article className="container mx-auto px-4 py-12">
          <Link
            href="/#projects"
            className="inline-flex items-center text-gray-600 hover:text-blue-700 transition-colors mb-8 group"
          >
            <svg
              className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour aux projets
          </Link>

          <div className="relative h-[500px] w-full mb-12 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-4 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 animate-gradient py-[10px]">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.categories.map((category) => {
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
              </div>
            </div>

            {/* Learnings with category-based badges moved after categories */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-700 mb-3">Apprentissages critiques</h2>
              <div className="flex flex-wrap gap-2">
                {displayedLearnings.map((learning) => {
                  const category = getLearningCategory(learning.code);
                  const config = categoryConfig[category];
                  return (
                    <span
                      key={learning.code}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md ${config.bgColor} ${config.color} shadow-sm hover:shadow transition-all duration-200`}
                    >
                      {learning.code} - {learning.title}
                    </span>
                  );
                })}
                {project.learnings.length > 3 && (
                  <button
                    onClick={() => setShowAllLearnings(!showAllLearnings)}
                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {showAllLearnings ? '−' : '+'}
                  </button>
                )}
              </div>
            </div>

            {/* Display the detailed content structured by sections */}
            <div className="mb-12">
               {contentSections.map((section, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                     {/* Display title if exists, with the question mark */}
                     {section.title && (
                         <h3 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h3>
                     )}
                     {/* Render text, preserving paragraphs created by single newlines */}
                     {/* Use a div for the text content to manage spacing below the title */}
                     <div className={section.title ? 'mt-2' : ''}> {/* Add margin top if there is a title */}
                         {section.text.split('\n').map((paragraph, pIndex) => (
                             <p key={pIndex} className="text-lg text-gray-600 leading-relaxed mb-4 last:mb-0">{paragraph}</p>
                         ))}
                     </div>
                  </div>
               ))}
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
} 