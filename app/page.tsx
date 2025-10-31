import dynamic from 'next/dynamic';
import Navigation from './components/Navigation';
import { ArrowRight } from 'lucide-react';

// Dynamic import for 3D components (client-side only)
const Scene3D = dynamic(() => import('./components/Scene3D'), { ssr: false });
const GlassObject = dynamic(() => import('./components/GlassObject'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl">
          {/* Left: Text Content */}
          <div className="space-y-8 z-10">
            {/* Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-3 border-white shadow-lg"
                    style={{
                      backgroundImage: `linear-gradient(135deg, hsl(${i * 60}, 70%, 60%), hsl(${i * 60 + 30}, 70%, 50%))`,
                    }}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-700 font-semibold">
                +10k Creative Professionals
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[1.05] tracking-tight">
              <div className="mb-2">Master AI-Powered</div>
              <div className="mb-2">Creative</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
                Innovation
              </div>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl font-light">
              Transform your creative vision with cutting-edge AI tools, professional branding, and
              immersive 3D experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 shadow-lg shadow-red-500/30 flex items-center gap-3">
                <span className="text-lg">Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl">
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-4xl font-black text-gray-900">500+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-black text-gray-900">50+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-black text-gray-900">15</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right: 3D Glass Object */}
          <div className="h-[600px] lg:h-[700px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 via-blue-100/20 to-purple-100/30 rounded-full blur-3xl" />
            <Scene3D cameraPosition={[0, 0, 5]} enableControls={true}>
              <GlassObject />
            </Scene3D>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-3xl" />
      </section>

      {/* Logo Marquee */}
      <section className="w-full bg-blue-600 py-8 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-600 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-600 to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex">
              {['Google', 'Microsoft', 'Apple', 'Meta', 'Amazon', 'Netflix', 'Spotify', 'Tesla', 'Nike', 'Samsung'].map((logo, i) => (
                <div
                  key={`${setIndex}-${i}`}
                  className="mx-8 text-white font-bold text-2xl lg:text-3xl opacity-80 hover:opacity-100 transition-opacity"
                >
                  {logo}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder sections */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-4">About Section</h2>
          <p className="text-xl text-gray-600">Coming in next phase...</p>
        </div>
      </section>

      <section id="services" className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
        <div className="text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-4">Services Section</h2>
          <p className="text-xl text-gray-600">Coming in next phase...</p>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-4">Portfolio Section</h2>
          <p className="text-xl text-gray-600">Coming in next phase...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="text-center">
          <h2 className="text-5xl font-black mb-6">Ready to Create?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's bring your creative vision to life with AI-powered innovation.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30 text-lg">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Muhammed Adel. Powered by AI & Creativity.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}
