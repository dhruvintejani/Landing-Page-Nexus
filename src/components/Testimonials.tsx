import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Nexus has completely transformed how our team works. We've cut our project delivery time in half and our team is happier than ever. The AI automation features are genuinely game-changing.",
    author: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'TechFlow Inc.',
    avatar: 'SC',
    avatarGradient: 'from-primary-400 to-primary-600',
    rating: 5,
  },
  {
    id: 2,
    content: "After trying dozens of project management tools, Nexus is the first one that actually delivers on its promises. The real-time collaboration features have made remote work feel seamless.",
    author: 'Michael Rodriguez',
    role: 'Product Director',
    company: 'Innovate Labs',
    avatar: 'MR',
    avatarGradient: 'from-secondary-400 to-pink-500',
    rating: 5,
  },
  {
    id: 3,
    content: "The ROI we've seen with Nexus is incredible. We've reduced our tooling costs by 60% while actually improving our team's productivity. It's rare to find a tool that does both.",
    author: 'Emily Watson',
    role: 'COO',
    company: 'ScaleUp Ventures',
    avatar: 'EW',
    avatarGradient: 'from-emerald-400 to-teal-500',
    rating: 5,
  },
  {
    id: 4,
    content: "What impressed me most about Nexus is how quickly our team adopted it. Usually there's a learning curve with new tools, but everyone was productive within days, not weeks.",
    author: 'David Park',
    role: 'Head of Operations',
    company: 'Growth Co.',
    avatar: 'DP',
    avatarGradient: 'from-amber-400 to-orange-500',
    rating: 5,
  },
  {
    id: 5,
    content: "The customer support at Nexus is exceptional. They genuinely care about helping us succeed and are always quick to respond. It feels like having an extended team member.",
    author: 'Lisa Thompson',
    role: 'CTO',
    company: 'Velocity Systems',
    avatar: 'LT',
    avatarGradient: 'from-violet-400 to-purple-500',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding gradient-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-amber-100 text-amber-700 text-sm font-semibold mb-6 shadow-sm">
            <Star className="w-4 h-4 fill-amber-400" />
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Loved by teams{' '}
            <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Don't just take our word for it. Here's what industry leaders have to say 
            about how Nexus has transformed their workflows.
          </p>
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-8 z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 overflow-hidden min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[currentIndex].avatarGradient} flex items-center justify-center text-white font-bold shadow-lg`}>
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute right-8 bottom-8 flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToPrevious}
                className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNext}
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/30"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-primary-500 to-secondary-500'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ y: -4 }}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                "{testimonial.content.slice(0, 100)}..."
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${testimonial.avatarGradient} flex items-center justify-center text-white text-sm font-bold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-xs text-slate-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
