import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Heart,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: '10x Productivity Boost',
    description: 'Teams using Nexus report 10x faster project delivery and significantly reduced manual work.',
    stats: '+1000%',
    statsLabel: 'Efficiency',
    points: [
      'Automate repetitive workflows',
      'Smart task prioritization',
      'Real-time progress tracking',
    ],
    gradient: 'from-primary-500 to-violet-600',
    bgGradient: 'from-primary-50 to-violet-50',
  },
  {
    icon: Clock,
    title: 'Save 20+ Hours Weekly',
    description: 'Eliminate context switching and busy work. Our AI handles the mundane so you can focus on impact.',
    stats: '20+',
    statsLabel: 'Hours Saved',
    points: [
      'Automated status updates',
      'Smart meeting summaries',
      'Instant document generation',
    ],
    gradient: 'from-secondary-500 to-pink-600',
    bgGradient: 'from-secondary-50 to-pink-50',
  },
  {
    icon: DollarSign,
    title: 'Reduce Costs by 40%',
    description: 'Consolidate tools and reduce overhead. One platform to replace dozens of disconnected apps.',
    stats: '-40%',
    statsLabel: 'Cost Reduction',
    points: [
      'Replace multiple tools',
      'Lower training costs',
      'Reduced IT complexity',
    ],
    gradient: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
  {
    icon: Heart,
    title: 'Happier Teams',
    description: 'When work flows smoothly, teams thrive. Better tools mean better work-life balance.',
    stats: '98%',
    statsLabel: 'Satisfaction',
    points: [
      'Reduced burnout',
      'Clear visibility',
      'Better collaboration',
    ],
    gradient: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-50 to-orange-50',
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            Measurable Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Real impact,{' '}
            <span className="gradient-text">real results</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Don't just take our word for it. Our customers consistently report significant improvements 
            across key metrics that matter to their business.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`group h-full p-8 rounded-3xl bg-gradient-to-br ${benefit.bgGradient} border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all`}
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                        {benefit.stats}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {benefit.statsLabel}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  {/* Points */}
                  <div className="space-y-3 mt-auto">
                    {benefit.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-primary-500`} />
                        <span className="text-sm text-slate-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 p-8 md:p-12"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to transform your workflow?
              </h3>
              <p className="text-primary-100">
                Join 50,000+ companies already seeing results with Nexus.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
