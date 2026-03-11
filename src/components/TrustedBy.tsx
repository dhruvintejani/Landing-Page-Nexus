import { motion } from 'framer-motion';

const companies = [
  { name: 'Stripe', logo: 'S' },
  { name: 'Vercel', logo: 'V' },
  { name: 'Linear', logo: 'L' },
  { name: 'Notion', logo: 'N' },
  { name: 'Figma', logo: 'F' },
  { name: 'Slack', logo: 'Sl' },
  { name: 'Discord', logo: 'D' },
  { name: 'GitHub', logo: 'G' },
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Trusted by 50,000+ companies worldwide
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-12 items-center"
            >
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 shrink-0 hover:bg-slate-100 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center font-bold text-slate-600">
                    {company.logo}
                  </div>
                  <span className="text-lg font-semibold text-slate-700">
                    {company.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50K+', label: 'Companies' },
            { value: '2M+', label: 'Users' },
            { value: '99.9%', label: 'Uptime' },
            { value: '4.9/5', label: 'Rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
