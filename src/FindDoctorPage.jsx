import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.jpg";
import doctor1 from './assets/doctor1.png';
import doctor2 from './assets/doctor2.jpg';
import doctor4 from './assets/doctor4.png';
import doctor5 from './assets/doctor5.jpg';
import doctor6 from './assets/doctor6.jpg';
import {Home,FileText,Search,ChevronDown,Star,Clock,MapPin,Calendar,User} from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    rating: 4.9,
    reviews: 127,
    experience: 15,
    location: 'DownTown Medical Centre',
    availability: 'Available Today',
    image: doctor1
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    rating: 4.8,
    reviews: 89,
    experience: 18,
    location: 'City Hospital',
    availability: 'Next Available: Wednesday',
    image: doctor2
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Dermatologist',
    rating: 4.9,
    reviews: 156,
    experience: 18,
    location: 'Skin Care Clinic',
    availability: 'Available Today',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 4,
    name: 'Dr. Lisa Thompson',
    specialty: 'Pediatrician',
    rating: 4.9,
    reviews: 78,
    experience: 10,
    location: "Children's Hospital",
    availability: 'Available Today',
    image:doctor4
  },
  {
    id: 5,
    name: 'Dr. James Anderson',
    specialty: 'Psychiatrist',
    rating: 4.8,
    reviews: 92,
    experience: 16,
    location: 'Mental Health Centre',
    availability: 'Available Today',
    image: doctor5
  },
  {
    id: 6,
    name: 'Dr. David Wilson',
    specialty: 'Orthopedic Surgeon',
    rating: 4.7,
    reviews: 203,
    experience: 18,
    location: 'Sports Medicine Centre',
    availability: 'Next Available: Wednesday',
    image: doctor6
  }
];

function FindDoctorPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [availability, setAvailability] = useState('All');
  const [specialty, setSpecialty] = useState('All Specialties');

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAvailability = availability === 'All' || doctor.availability === availability;
    const matchesSpecialty = specialty === 'All Specialties' || doctor.specialty === specialty;
    
    return matchesSearch && matchesAvailability && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-blue-200">
      <header className="bg-teal-400 text-teal-1000 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">

            {/* Left: Logo + Navigation */}
            <div className="flex items-center space-x-28">
              {/* Logo */}
              <img className="w-[90px] h-[90px]" src={logo} alt="Logo" />

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-11">
                <a href="/" className="flex items-center space-x-2 hover:text-teal-200 transition-colors">
                  <Home size={22} />
                  <span className="text-[20px]">Home</span>
                </a>
                <a className="underline decoration-4 decoration-teal flex items-center space-x-2 transition-colors">
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
              <button className="px-4 py-2 text-[19px] text-teal-800 bg-white rounded-md hover:bg-gray-300 transition-colors font-medium mx-[8px]">
                Sign In
              </button>
              <button className="px-4 py-2 text-[19px] text-teal-800 bg-white rounded-md hover:bg-gray-300 transition-colors font-medium">
                Get Started
              </button>
            </div>

          </div>
        </div>
      </header>
      {/* Header */}
      <div className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Your Doctor</h1>
            <p className="text-gray-600 text-sm">Choose from our network of qualified healthcare professionals</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Doctors By Name or Specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white shadow-sm transition-all duration-200"
              />
            </div>
            
            {/* Filters */}
            <div className="flex gap-4">
              <div className="relative">
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <option value="All">Availability</option>
                  <option value="Available Today">Available Today</option>
                  <option value="Next Available: Wednesday">Next Available: Wednesday</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              
              <div className="relative">
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <option value="All Specialties">Specialty</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="Psychiatrist">Psychiatrist</option>
                  <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:transform hover:-translate-y-1"
              >
                {/* Profile Section */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{doctor.name}</h3>
                    <p className="text-teal-600 font-medium text-sm">{doctor.specialty}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-800">{doctor.rating}</span>
                      <span className="text-gray-500 text-sm">({doctor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>


                {/* Details */}
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{doctor.experience} years experience</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{doctor.location}</span>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      doctor.availability === 'Available Today'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {doctor.availability}
                  </span>
                </div>

                {/* Book Appointment Button */}
                <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </button>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No doctors found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or filters to find more doctors.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FindDoctorPage;