'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800">
            À propos
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Bonjour ! Je suis Miriame Aboudou, étudiante en deuxième année de BUT Métiers du Multimédia et de l'Internet, parcours Développement Web et Dispositifs Interactifs.
            </p>
            <p>
              Ce portfolio rassemble plusieurs projets réalisés durant ma formation ou sur mon temps libre. Ils reflètent mon envie d'apprendre, de tester de nouvelles technologies, et de proposer des solutions concrètes et fonctionnelles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 