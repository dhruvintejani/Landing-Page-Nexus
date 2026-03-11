import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Code2, 
  Sparkles,
  ArrowRight,
  Globe,
  Lock
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Automation',
    description: 'Let intelligent automation handle repetitive tasks while you focus on what matters most.',
    color: 'from-primary-500 to-primary-600',
    shadowColor: 'shadow-primary-500/20',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Get actionable insights with beautiful dashboards and comprehensive reporting tools.',
    color: 'from-emerald-500 to-teal-600',
    shadowColor: 'shadow-emerald-500/20',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time editing, comments, and smart notifications.',
    color: 'from-secondary-500 to-pink-600',
    shadowColor: 'shadow-secondary-500/20',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SSO integration, and SOC 2 compliance for complete peace of mind.',
    color: 'from-amber-500 to-orange-600',
    shadowColor: 'shadow-amber-500/20',
  },
  {
    icon: Code2,
    title: 'Developer API',
    description: 'Build custom integrations with our comprehensive REST API and webhooks.',
    color: 'from-cyan-500 to-blue-600',
    shadowColor: 'shadow-cyan-500/20',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience sub-100ms response times with our globally distributed infrastructure.',
    color: 'from-violet-500 to-purple-600',
    shadowColor: 'shadow-violet-500/20',
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/50 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Powerful Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Everything you need to{' '}
            <span className="gradient-text">scale your business</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From AI automation to enterprise security, we've built all the tools your team needs 
            to work smarter and deliver faster results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`group h-full p-8 bg-white rounded-3xl border border-slate-100 shadow-lg ${feature.shadowColor} hover:shadow-xl hover:border-slate-200 transition-all`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg ${feature.shadowColor} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Link */}
                <div className="flex items-center text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Globe className="w-5 h-5 text-primary-500" />
              <span>200+ Integrations</span>
            </div>
            <div className="w-px h-6 bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Lock className="w-5 h-5 text-primary-500" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="w-px h-6 bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Zap className="w-5 h-5 text-primary-500" />
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
