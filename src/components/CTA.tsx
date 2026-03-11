import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Limited Time Offer
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to 10x your team's
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-pink-300 bg-clip-text text-transparent">
              productivity?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 50,000+ teams already using Nexus to streamline their workflows, 
            automate mundane tasks, and ship faster than ever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 0.25)' }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 backdrop-blur-sm transition-all"
            >
              Schedule Demo
            </motion.button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-200">
            {[
              'No credit card required',
              '14-day free trial',
              'Cancel anytime',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating testimonial cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { quote: '"Cut our delivery time in half"', author: 'Sarah C.', company: 'TechFlow' },
            { quote: '"Best decision we ever made"', author: 'Mike R.', company: 'InnovateLabs' },
            { quote: '"ROI in the first month"', author: 'Emily W.', company: 'ScaleUp' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <p className="text-white font-medium mb-3">{item.quote}</p>
              <p className="text-sm text-primary-200">
                {item.author}, {item.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
