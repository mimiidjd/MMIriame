import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-emerald-100" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-12 animate-fadeIn">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 animate-gradient whitespace-nowrap">
            Miriame Aboudou
          </h1>
          <p className="text-xl md:text-gray-800 max-w-2xl md:max-w-none mx-auto leading-relaxed animate-slideInUp animation-delay-500">
            Etudiante de deuxième année en BUT Métiers du Multimédia et de l'Internet, parcours Développement Web et Dispositifs Interactifs
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4 animate-slideInUp animation-delay-1000">
            <a
              href="#projects"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors"
            >
              Voir mes projets
            </a>
            <a
              href="#about"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium bg-purple-200 text-purple-800 hover:bg-purple-300 transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="w-2/3 md:w-1/3 flex justify-center animate-slideInUp animation-delay-1500">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/Miriame Aboudou.png" // Replace with your actual photo path
              alt="Your Photo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 64vw, (max-width: 1200px) 30vw, 20vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 