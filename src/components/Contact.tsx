import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  MessageSquare
} from 'lucide-react';
import { cn } from '../utils/cn';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate success (in production, handle actual API response)
    setStatus('success');
    setFormData({ name: '', email: '', company: '', message: '' });

    // Reset form after showing success
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@nexus.com',
      href: 'mailto:hello@nexus.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding gradient-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-primary-100 text-primary-700 text-sm font-semibold mb-6 shadow-sm">
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Let's start a{' '}
              <span className="gradient-text">conversation</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Have questions about Nexus? Want to see a demo? Or just want to chat about 
              how we can help your team? We'd love to hear from you.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="font-semibold text-slate-900">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <motion.div
                        animate={{ scale: focusedField === 'name' ? 1.01 : 1 }}
                        className="relative"
                      >
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="John Doe"
                          className={cn(
                            'w-full px-4 py-3.5 rounded-xl border-2 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none transition-all',
                            errors.name
                              ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                              : 'border-transparent focus:border-primary-500 focus:bg-white'
                          )}
                        />
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-500 flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <motion.div
                        animate={{ scale: focusedField === 'email' ? 1.01 : 1 }}
                        className="relative"
                      >
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="john@company.com"
                          className={cn(
                            'w-full px-4 py-3.5 rounded-xl border-2 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none transition-all',
                            errors.email
                              ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                              : 'border-transparent focus:border-primary-500 focus:bg-white'
                          )}
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-500 flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>

                    {/* Company Field */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Company (Optional)
                      </label>
                      <motion.div
                        animate={{ scale: focusedField === 'company' ? 1.01 : 1 }}
                        className="relative"
                      >
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your Company"
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-transparent bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-primary-500 focus:bg-white transition-all"
                        />
                      </motion.div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Message *
                      </label>
                      <motion.div
                        animate={{ scale: focusedField === 'message' ? 1.01 : 1 }}
                        className="relative"
                      >
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Tell us about your project or ask us anything..."
                          rows={4}
                          className={cn(
                            'w-full px-4 py-3.5 rounded-xl border-2 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-none',
                            errors.message
                              ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                              : 'border-transparent focus:border-primary-500 focus:bg-white'
                          )}
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-500 flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.message}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                      whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                      className="w-full cursor-pointer py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>

                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-sm text-red-500"
                      >
                        Something went wrong. Please try again.
                      </motion.p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
