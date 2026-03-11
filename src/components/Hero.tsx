import { motion, Variants, Easing } from 'framer-motion';
import { ArrowRight, Play, Check, Zap, Shield, BarChart3 } from 'lucide-react';

const Hero = () => {
  const easeOut: Easing = [0.16, 1, 0.3, 1];
  const easeInOut: Easing = [0.45, 0, 0.55, 1];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const floatVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: { duration: 5, repeat: Infinity, ease: easeInOut },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-200/20 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-primary-100 shadow-lg shadow-primary-500/10 mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              <span className="text-sm font-semibold text-primary-700">
                Now with AI-Powered Workflows
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
            >
              Build faster with{' '}
              <span className="gradient-text">intelligent</span>{' '}
              automation
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Transform your workflow with AI-powered tools that help teams ship 10x faster. 
              Join 50,000+ companies building the future.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 rounded-2xl shadow-xl shadow-primary-500/30 hover:shadow-primary-500/40 transition-all flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200 hover:border-slate-300 shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-primary-600 ml-0.5" />
                </div>
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500"
            >
              {[
                { icon: Check, text: 'No credit card required' },
                { icon: Shield, text: 'SOC 2 Certified' },
                { icon: Zap, text: '99.9% Uptime' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-primary-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="relative z-10"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/50 overflow-hidden">
                {/* Browser Bar */}
                <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="w-full max-w-md mx-auto h-6 bg-slate-100 rounded-lg" />
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Revenue', value: '$48.5K', change: '+12.5%' },
                      { label: 'Users', value: '2,847', change: '+8.2%' },
                      { label: 'Growth', value: '24.8%', change: '+4.1%' },
                    ].map((stat, i) => (
                      <div key={i} className="p-4 bg-slate-50 rounded-2xl">
                        <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                        <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                        <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="h-40 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl flex items-end justify-center p-4 gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                        className="w-4 bg-gradient-to-t from-primary-500 to-secondary-400 rounded-t-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -left-8 top-1/4 z-20"
            >
              <div className="bg-white rounded-2xl shadow-xl shadow-primary-500/10 p-4 flex items-center gap-3 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Performance</p>
                  <p className="text-xs text-green-600">+127% this month</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute -right-4 bottom-1/4 z-20"
            >
              <div className="bg-white rounded-2xl shadow-xl shadow-secondary-500/10 p-4 border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary-400 to-pink-500" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 -ml-3 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 -ml-3 border-2 border-white" />
                  <span className="text-xs text-slate-500 ml-1">+12</span>
                </div>
                <p className="text-xs text-slate-600">Team collaboration active</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
