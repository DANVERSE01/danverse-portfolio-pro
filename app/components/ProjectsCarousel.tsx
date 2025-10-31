'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const projects = [
  {
    id: 1,
    title: 'AI Creative Empire',
    category: 'Brand Identity & AI Systems',
    description: 'Complete brand ecosystem powered by AI-generated visuals and strategic positioning.',
    image: '/portfolio/images/IMG_2692.jpeg',
    tags: ['Branding', 'AI', 'Strategy'],
  },
  {
    id: 2,
    title: 'Cinematic Storytelling',
    category: 'Video Production',
    description: 'High-impact advertising spots with professional direction and cutting-edge VFX.',
    image: '/portfolio/images/IMG_2482(1).jpeg',
    tags: ['Video', 'Direction', 'VFX'],
  },
  {
    id: 3,
    title: '3D Interactive Web',
    category: 'Web Development',
    description: 'Immersive web experience combining Three.js, GSAP, and responsive design.',
    image: '/portfolio/images/IMG_7862.jpeg',
    tags: ['Web', '3D', 'Interactive'],
  },
  {
    id: 4,
    title: 'Prompt Engineering Library',
    category: 'AI Optimization',
    description: 'Sophisticated prompt systems for consistent, high-quality AI content generation.',
    image: '/portfolio/images/IMG_1960.jpeg',
    tags: ['AI', 'Prompts', 'Optimization'],
  },
];

export default function ProjectsCarousel() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!pb-16"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="!w-[350px] md:!w-[400px]">
            <div className="group relative rounded-3xl overflow-hidden h-[500px] bg-gradient-to-br from-gray-900 to-black hover:scale-105 transition-all duration-500 cursor-pointer shadow-2xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Category */}
                <h3 className="text-3xl font-black text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {project.title}
                </h3>
                <p className="text-cyan-400 font-semibold mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {project.category}
                </p>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {project.description}
                </p>

                {/* View Project Button */}
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hover:scale-105 shadow-lg shadow-cyan-500/30">
                  View Project
                </button>
              </div>

              {/* Glassmorphism Border Effect */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-3xl pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110 shadow-lg">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110 shadow-lg">
        <ChevronRight className="w-6 h-6" />
      </button>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}
