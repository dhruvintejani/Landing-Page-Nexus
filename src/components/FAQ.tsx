import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { cn } from '../utils/cn';

const faqs = [
  {
    question: 'How long does it take to get started with Nexus?',
    answer: 'Most teams are up and running within 10 minutes. Our intuitive onboarding process guides you through setting up your workspace, inviting team members, and connecting your existing tools. No technical expertise required.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore everything Nexus has to offer and only upgrade when you\'re ready.',
  },
  {
    question: 'Can I integrate Nexus with my existing tools?',
    answer: 'Absolutely. Nexus integrates with over 200+ popular tools including Slack, GitHub, Jira, Notion, Google Workspace, Microsoft 365, and many more. We also offer a powerful API for custom integrations.',
  },
  {
    question: 'How does the AI automation work?',
    answer: 'Our AI learns from your workflows and suggests automations to eliminate repetitive tasks. It can automatically categorize items, generate status updates, summarize meetings, and even draft responses. You always stay in control and can customize or disable any automation.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide 24/7 support via chat, email, and phone for all paid plans. Our average response time is under 2 hours. Enterprise customers also get a dedicated success manager and priority support.',
  },
  {
    question: 'Is my data secure with Nexus?',
    answer: 'Security is our top priority. We use AES-256 encryption for data at rest, TLS 1.3 for data in transit, and maintain SOC 2 Type II certification. We also offer SSO, SAML, and custom data residency options for enterprise customers.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your data remains accessible for 30 days after cancellation, giving you time to export everything you need.',
  },
  {
    question: 'Do you offer discounts for startups or nonprofits?',
    answer: 'Yes! We offer special pricing for startups, nonprofits, and educational institutions. Contact our sales team to learn more about our discount programs and see if you qualify.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about Nexus. Can't find what you're looking for? 
            Our team is always happy to help.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={cn(
                  'rounded-2xl border transition-all duration-300',
                  openIndex === index
                    ? 'bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-100 shadow-lg shadow-primary-500/10'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className={cn(
                    'text-lg font-semibold transition-colors',
                    openIndex === index ? 'text-primary-700' : 'text-slate-900'
                  )}>
                    {faq.question}
                  </span>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors',
                      openIndex === index
                        ? 'bg-primary-500 text-white'
                        : 'bg-slate-100 text-slate-600'
                    )}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/30">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-slate-600 mb-6">
            Our support team is available 24/7 to help you with anything you need.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl transition-shadow"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
