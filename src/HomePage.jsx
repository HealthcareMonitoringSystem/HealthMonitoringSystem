import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.jpg";
import {Home, Search, Calendar, FileText, Stethoscope, Clock, Users, Shield, Star } from 'lucide-react';

// Header Component
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-teal-400 text-teal-1000 shadow-md">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between py-4">

      {/* Left: Logo + Navigation */}
      <div className="flex items-center space-x-28">
        {/* Logo */}
        <img className="w-[90px] h-[90px]" src={logo} alt="Logo" />

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-11">
          <a className="underline decoration-4 decoration-black flex items-center space-x-2 transition-colors">
            <Home size={22} />
            <span className="text-[20px]">Home</span>
          </a>
          <a href="/finddoctor" className="flex items-center space-x-2 hover:text-teal-200 transition-colors">
            <Search size={22} />
            <span className="text-[20px]">Find Doctors</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-teal-200 transition-colors">
            <Calendar size={22} />
            <span className="text-[20px]">My Appointments</span>
          </a>
          <a href="/healthrecord" className="flex items-center space-x-2 hover:text-teal-200 transition-colors">
            <FileText size={22} />
            <span className="text-[20px]">Health Records</span>
          </a>
        </nav>
      </div>

      {/* Right: Auth Buttons */}
      <div className="flex items-center space-x-1">
        <button onClick={() => window.location.href = '/signup'} className="px-4 py-2 text-[19px] text-teal-800 bg-white rounded-md hover:bg-gray-300 transition-colors font-medium mx-[8px]">
          Sign In
        </button>
        <button onClick={() => window.location.href = '/login'} className="px-4 py-2 text-[19px] text-teal-800 bg-white rounded-md hover:bg-gray-300 transition-colors font-medium">
          Get Started
        </button>
      </div>
    </div>
  </div>
</header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="bg-[#B9DEFB90] from-teal-50 to-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-[45px] font-bold text-gray-800 mb-6">
          Your Health, Our Priority
        </h1>
        <p className="text-[20px] text-gray-800 mb-8 max-w-2xl mx-auto">
          Book appointments with top doctors, access your health records,
          and download reports anytime & anywhere securely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center space-x-2 bg-gray-700 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors text-[20px]">
            <Calendar size={20} />
            <span>Book Appointments</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition-colors text-[20px]">
            <FileText size={20} />
            <span>View Records</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// Features Component
const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-teal-500" />,
      title: "Easy Booking",
      description: "Book your appointments easily with just a few clicks."
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-teal-500" />,
      title: "Expert Doctors",
      description: "Get connected with top-rated professionals."
    },
    {
      icon: <FileText className="w-12 h-12 text-teal-500" />,
      title: "Instant Reports",
      description: "Download medical reports quickly and securely."
    },
    {
      icon: <Clock className="w-12 h-12 text-teal-500" />,
      title: "24/7 Access",
      description: "Access your health information anytime, anywhere."
    },
    {
      icon: <Users className="w-12 h-12 text-teal-500" />,
      title: "Family Management",
      description: "Manage your entire family's health needs in one place."
    },
    {
      icon: <Shield className="w-12 h-12 text-teal-500" />,
      title: "Insurance Policy",
      description: "Track and manage your health insurance easily."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[45px] font-bold text-center text-gray-800 mb-12">
          Why Choose Healthcare+?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#B9DEFB60] text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-[21px] font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-[19px] text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Component
const Stats = () => {
  const stats = [
    { number: "5000+", label: "Qualified Doctors", color: "bg-teal-500" },
    { number: "1000+", label: "Happy Patients", color: "bg-blue-500" },
    { number: "800k+", label: "Appointments Booked", color: "bg-purple-500" },
    { number: "24x7", label: "Appointment Support", color: "bg-green-500" }
  ];

  return (
    <section className="py-16 bg-[#A7D3F5B2]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} text-white p-8 rounded-lg text-center`}>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-[18px] opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah",
      role: "Patient",
      text: "Healthcare+ made it so easy to find and book appointments with a specialist. The platform is user-friendly and the doctors are professional.",
      rating: 5
    },
    {
      name: "Alice",
      role: "Patient",
      text: "I love how I can access all my medical records online. It's so convenient and saves me time during doctor visits.",
      rating: 5
    },
    {
      name: "David",
      role: "Patient",
      text: "The online consultation feature is fantastic. I received expert advice from the comfort of my home.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-16 bg-[#f0fbff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold text-gray-800 mb-2">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-[22px]">
            Trusted by thousands of patients worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#4DB6AC4D] p-6 rounded-[20px]">
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-[18px] text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="text-right">
                <div className="text-[18px] font-semibold text-gray-800">— {testimonial.name}</div>
                <div className="text-[18px] text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Component
const CTA = () => {
  return (
    <section className="py-16 bg-[#e0f7fa]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[40px] font-bold text-gray-800 mb-4">
          Ready to Take Control of Your Health?
        </h2>
        <p className="text-[22px] text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of patients who trust HealthCare Plus for their healthcare needs.
        </p>
        <button className="bg-teal-500 text-white px-8 py-3 rounded-md hover:bg-teal-600 transition-colors font-medium text-[20px]">
          Get Started Today
        </button>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[25px] font-semibold mb-4">HealthCare+</h3>
            <p className="text-teal-100 text-[18px]">
              Your trusted partner in <br></br>healthcare management and medical services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[25px]">Services</h4>
            <ul className="space-y-2 text-teal-100 text-[18px]">
              <li><a href="#" className="hover:text-white transition-colors">Appointments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Family Health</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[25px]">Support</h4>
            <ul className="space-y-2 text-teal-100 text-[18px]">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[25px]">Contact</h4>
            <div className="text-teal-100 text-[18px] space-y-2">
              <p>support@healthcare.com</p>
              <p>+1 800 123 456</p>
            </div>
          </div>
        </div>
        <div className="border-t border-teal-500 mt-8 pt-8 text-center text-teal-100">
          <p className="text-[20px]">© 2024 HealthCare+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default HomePage;