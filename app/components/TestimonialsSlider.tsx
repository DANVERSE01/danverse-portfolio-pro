'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechVision',
    content: 'Muhammed transformed our brand identity with AI-powered visuals that perfectly captured our vision. The results exceeded all expectations.',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=06b6d4&color=fff&size=128',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    role: 'Marketing Director, GrowthLab',
    content: 'The cinematic ads produced were absolutely stunning. Professional direction, cutting-edge VFX, and delivered on time. Highly recommended!',
    avatar: 'https://ui-avatars.com/api/?name=Ahmed+Hassan&background=3b82f6&color=fff&size=128',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Founder, DesignHub',
    content: 'Working with Muhammed on our 3D web experience was incredible. The attention to detail and technical expertise is unmatched.',
    avatar: 'https://ui-avatars.com/api/?name=Emily+Chen&background=8b5cf6&color=fff&size=128',
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael Roberts',
    role: 'CTO, InnovateAI',
    content: 'The prompt engineering library revolutionized our AI content workflow. Consistent quality, faster output, and scalable systems.',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Roberts&background=ec4899&color=fff&size=128',
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!pb-16"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl min-h-[320px] flex flex-col">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-white/90 leading-relaxed mb-6 flex-grow text-sm md:text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-white/30 shadow-lg"
                />
                <div>
                  <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  <div className="text-cyan-300 text-sm font-medium">{testimonial.role}</div>
                </div>
              </div>

              {/* Glassmorphism shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          width: 28px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
