import { motion } from 'framer-motion';
import { UserPlus, Settings, Rocket, PartyPopper } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up in seconds with just your email. No credit card required to get started.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Configure Your Workspace',
    description: 'Set up your team, connect your tools, and customize workflows to match your process.',
    color: 'from-secondary-500 to-pink-600',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Automate',
    description: 'Start automating tasks with AI. Our smart suggestions help you optimize from day one.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    number: '04',
    icon: PartyPopper,
    title: 'Scale with Confidence',
    description: 'Grow your team and projects without limits. Our infrastructure scales with your success.',
    color: 'from-emerald-500 to-teal-600',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding gradient-bg relative overflow-hidden">
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-primary-100 text-primary-700 text-sm font-semibold mb-6 shadow-sm">
            <Rocket className="w-4 h-4" />
            Getting Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Up and running in{' '}
            <span className="gradient-text">minutes, not months</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our intuitive onboarding process gets you from sign-up to productivity in under 10 minutes.
            No complex setup, no engineering required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-secondary-200 to-emerald-200 -translate-y-1/2 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:border-slate-200 transition-all h-full"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Ready to get started?
              </h3>
              <p className="text-slate-600">
                Join thousands of teams already using Nexus.
              </p>
            </div>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10 min</div>
                <div className="text-sm text-slate-500">Setup time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-slate-500">Support</div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-2xl shadow-lg shadow-primary-500/30"
              >
                Start Free Trial
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
