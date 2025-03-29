import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Bot, Mail, BarChart3, ChevronDown, Menu, X, Clock, DollarSign, TrendingDown } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { TestimonialsSection } from '@/components/ui/testimonials-section';
import { LeadGenerationSection } from '@/components/ui/lead-generation-section';
import { Globe } from '@/components/ui/globe';
import { SplineScene } from '@/components/ui/spline-scene';
import { Spotlight } from '@/components/ui/spotlight';
import { Stats } from '@/components/ui/stats';
import { ChatbotServices } from '@/components/ui/chatbot-services';

function ContactPage() {
  const [formData, setFormData] = useState({
    reason: '',
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full max-w-[1920px] mx-auto relative opacity-30">
              <Globe className="opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDF8F3]/50 to-[#FDF8F3]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FDF8F3] via-transparent to-[#FDF8F3]" />
            </div>
          </div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-black/5">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
                <Mail className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium">Get in touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black">Contact us</h1>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                    Reason For Contact <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                    required
                  >
                    <option value="">Select one...</option>
                    <option value="audit">Free Outbound Audit</option>
                    <option value="sop">Free SOP's & PDF's</option>
                    <option value="consultation">Consultation Call</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                    placeholder="Enter first name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                    placeholder="Enter last name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                  placeholder="Write your message"
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  theme="light"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-medium py-4 rounded-lg hover:bg-black/90 transition-colors"
              >
                Submit
              </button>
            </form>

            <div className="mt-12 pt-12 border-t border-gray-200">
              <div className="flex items-center gap-4 justify-center">
                <Mail className="w-6 h-6 text-amber-500" />
                <a href="mailto:info@eagleflow.io" className="text-gray-700 hover:text-amber-500 transition-colors">
                  info@eagleflow.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      author: {
        name: "David",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Since we have both physical and digital products in the psychology niche it was a mess trying to find a suitable partner to help us grow our business. We also needed someone to help us find quality leads and help us close them. Needless to say they crushed it and helped us immensely."
    },
    {
      author: {
        name: "Luca",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "They really know their stuff when it comes to outreach in general and converting interested leads. Plus their help with closing those leads was invaluable."
    },
    {
      author: {
        name: "Randy",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "They're not just an outreach agency, it feels like we have an in-house team that tackles every problem proactively. Never miss anything - they really know their stuff."
    },
    {
      author: {
        name: "Theodoro",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "We've been through the ringer with agencies – all promising the world but delivering the same impersonal treatment. They took the time to understand our customers, not just the numbers. The results speak for themselves"
    },
    {
      author: {
        name: "Nikita",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "In the past we had a problem when working with other agencies when it comes to general understanding of our products and our customers, they really go deep into customer research and analyze everything. Love it!"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/Logo FIX.svg" 
                alt="EagleFlow" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact Us</Link>
              <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-black/90 transition-all hover:scale-105">
                Get a Free Outbound Audit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
              <div className="flex flex-col gap-4">
                <Link to="/contact" className="text-gray-600 hover:text-black transition-colors py-2">Contact Us</Link>
                <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-black/90 transition-all w-full">
                  Get a Free Outbound Audit
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <section className="relative min-h-[85vh] w-full overflow-hidden">
              <div className="absolute inset-0 bg-[#FDF8F3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full max-w-[1920px] mx-auto relative">
                    <Globe className="opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDF8F3]/50 to-[#FDF8F3]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FDF8F3] via-transparent to-[#FDF8F3]" />
                  </div>
                </div>
              </div>
              
              <div className="relative px-4 md:px-8 pt-32 pb-12 max-w-7xl mx-auto">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-8">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium">For B2B Service Based Businesses:</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    We make sure your{' '}
                    <span className="relative inline-block">
                      dream
                      <div className="absolute bottom-2 left-0 w-full h-3 bg-amber-300/30 -z-10 transform -rotate-1"></div>
                    </span>
                    {' '}buyers<br className="hidden sm:block" /> can't ignore you.
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                    We build AI-powered email and chatbot systems that book meetings, nurture leads, and close deals—on autopilot.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-black/90 transition-all hover:scale-105 w-full sm:w-auto">
                      Get a Free Outbound Audit
                    </button>
                    <button className="group border-2 border-black px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-black/5 transition-all w-full sm:w-auto">
                      View Case Studies
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialsSection
              title="Trusted by High-Growth Businesses & Agencies"
              description="Join businesses who are already generating more meetings and closing more deals with our AI-powered outreach system."
              testimonials={testimonials}
              className="bg-black"
            />

            {/* Lead Generation Section */}
            <LeadGenerationSection />

            {/* How It Works Section */}
            <section className="px-4 md:px-8 py-20 bg-white">
              <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium">How we do it</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
                <p className="text-xl text-gray-600 mb-16">Focused on What Works</p>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Target className="w-8 h-8" />,
                      title: "We Analyze Your Existing Clients",
                      description: "We start by examining your current clients to gain a deep understanding of your business and what makes these partnerships successful."
                    },
                    {
                      icon: <Mail className="w-8 h-8" />,
                      title: "We Identify Key Patterns",
                      description: "We look for common characteristics among your clients to uncover traits that will help us target new prospects more effectively."
                    },
                    {
                      icon: <Bot className="w-8 h-8" />,
                      title: "We Build Your Ideal Client Profile",
                      description: "We create a precise and detailed profile of your ideal client, ensuring that all your marketing and sales efforts are focused on the most valuable leads."
                    }
                  ].map((step, index) => (
                    <div key={index} className="text-center p-6 rounded-xl bg-black/5 hover:bg-black/10 transition-colors">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black mb-4">
                        <div className="text-white">{step.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  {[
                    {
                      icon: <Target className="w-8 h-8" />,
                      title: "We Find More Companies Like Yours",
                      description: "We identify businesses that align with your ideal client profile, ensuring that outreach is focused and tailored."
                    },
                    {
                      icon: <Mail className="w-8 h-8" />,
                      title: "We Reach Out to the Right Companies",
                      description: "We engage with potential clients across multiple channels, crafting personalized messages to maximize response rates and connect with each prospect effectively."
                    },
                    {
                      icon: <Bot className="w-8 h-8" />,
                      title: "We Hand Over Qualified Leads",
                      description: "When a lead expresses interest, we pass them directly to you, so your team can take over and close the deal."
                    }
                  ].map((step, index) => (
                    <div key={index} className="text-center p-6 rounded-xl bg-black/5 hover:bg-black/10 transition-colors">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black mb-4">
                        <div className="text-white">{step.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="bg-[#FDF8F3]">
              <Stats />
            </section>

            {/* Benefits Section */}
            <section className="px-4 md:px-8 py-20 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium">The Benefits Of Working With A High Volume Sender</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-16">
                    Maximize Value with High-Volume Emailing
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                  {[
                    { title: "Cheaper Email Accounts", icon: <Mail className="w-6 h-6" /> },
                    { title: "Cost-Effective Leads", icon: <Target className="w-6 h-6" /> },
                    { title: "Cost-Effective Tools", icon: <Bot className="w-6 h-6" /> },
                    { title: "More Access To Information", icon: <BarChart3 className="w-6 h-6" /> }
                  ].map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-lg mb-4">
                        <div className="text-amber-600">{benefit.icon}</div>
                      </div>
                      <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    "More Savings For The End Client",
                    "More Results For The End Client",
                    "The Best Possible Results For The End Client"
                  ].map((benefit, index) => (
                    <div key={index} className="p-8 rounded-xl border-2 border-black/10 text-center hover:border-black/20 transition-colors">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                        <BarChart3 className="w-6 h-6 text-amber-600" />
                      </div>
                      <h3 className="text-xl font-semibold">{benefit}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Chatbot Services Section */}
            <ChatbotServices />

            {/* Cold Email Challenges Section */}
            <section className="px-4 md:px-8 py-20 bg-[#FDF8F3]">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Column */}
                  <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight md:text-left text-center md:text-[unset]">
                      Getting a cold email system up and running is just step one
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Keep Up or Fall Behind:</h3>
                          <p className="text-gray-600">Strategies change, inbox rules tighten. Staying updated is non-negotiable.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Optimize, Don't Overcomplicate:</h3>
                          <p className="text-gray-600">The right setup keeps your outreach efficient and hassle-free.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BarChart3 className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Quality Data Matters:</h3>
                          <p className="text-gray-600">No matter how good your emails are, poor data will ruin them. The right contacts make the difference between replies and silence.</p>
                        </div>
                      </div>

                      <div className="md:text-left text-center">
                        <button className="mt-8 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-black/90 transition-all hover:scale-105">
                          Get A Free Outbound Audit
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="bg-[#F5EBE0] p-8 rounded-2xl">
                    <h3 className="text-xl font-bold mb-6">Running a cold outbound system is not easy.</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                          <Clock className="w-6 h-6 text-amber-600 flex-shrink-0" />
                          <p className="text-gray-800">Balancing system maintenance with response management can quickly become a time-intensive job.</p>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                          <DollarSign className="w-6 h-6 text-amber-600 flex-shrink-0" />
                          <p className="text-gray-800">Not knowing which approach works best can quickly lead to financially damaging mistakes.</p>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                          <TrendingDown className="w-6 h-6 text-amber-600 flex-shrink-0" />
                          <p className="text-gray-800">Spending time on system troubleshooting can take away from advancing your core operations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Outbound Audit Section */}
            <section className="px-4 md:px-8 py-20 bg-black/[0.96] relative overflow-hidden">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
              />
              
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  {/* Left content */}
                  <div className="flex-1 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 md:text-left text-center">
                      <span className="md:hidden">Still Not Sure?</span>
                      <span className="hidden md:block">Are you still on the fence?</span>
                    </h2>
                    <p className="text-xl text-neutral-300 mb-8 md:text-left text-center">
                      <span className="md:hidden">Free consultations carry no obligation to close a deal. In addition to detailed information about our service, you will receive an analysis and valuable knowledge that you can apply to your business. So, there is practically no risk.</span>
                      <span className="hidden md:block">Let's schedule a free outbound audit. We're going to discuss your business, customer acquisition & bounce ideas about outreach. Worst case scenario you get 30 minutes of free advice.</span>
                    </p>
                    <div className="md:text-left text-center">
                      <button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all hover:scale-105">
                        Schedule Your Free Audit
                      </button>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="flex-1 h-[400px] md:h-[500px] relative">
                    <SplineScene 
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      className="w-full h-full scale-150 md:scale-100"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="px-4 md:px-8 py-20">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                  Frequently Asked Questions
                </h2>
                {[
                  {
                    question: "How do you source leads?",
                    answer: "We use AI to scrape and verify leads from multiple sources including LinkedIn, company websites, and professional databases. All leads are triple-verified for accuracy."
                  },
                  {
                    question: "What industries does this work for?",
                    answer: "Our system works best for B2B services, SaaS, agencies, and professional services. We've had success across multiple industries including tech, marketing, consulting, and finance."
                  },
                  {
                    question: "Do I need technical experience?",
                    answer: "Not at all! We handle all the technical setup and maintenance. You'll get a simple dashboard to monitor results and we handle everything else."
                  }
                ].map((faq, index) => (
                  <details key={index} className="group mb-4">
                    <summary className="flex items-center justify-between cursor-pointer p-4 rounded-lg bg-black/5 hover:bg-black/10">
                      <span className="font-medium">{faq.question}</span>
                      <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="p-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="px-4 md:px-8 py-20 bg-black text-white text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Done-for-You AI Outreach That Pays for Itself
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  No more manual prospecting. Just high-quality leads on autopilot.
                </p>
                <button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors">
                  Get Your Free Audit
                </button>
              </div>
            </section>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;