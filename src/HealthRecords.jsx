import React, { useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { Home,ArrowLeft, Search, ChevronDown, Plus, Calendar, Download, Share2, FileText, Pill, TestTube, Image } from 'lucide-react';
import logo from "./assets/logo.jpg";

const mockRecords = [
  {
    id: '1',
    title: 'Blood Test Results',
    type: 'Lab Report',
    date: '2/5/2025',
    doctor: 'Dr. Sarah Johnson',
    category: 'Lab Results',
    fileSize: '2.3MB',
  },
  {
    id: '2',
    title: 'Cardiology Prescription',
    type: 'Prescription',
    date: '20/5/2025',
    doctor: 'Dr. Michael Chen',
    category: 'Prescriptions',
    fileSize: '0.5MB',
  },
  {
    id: '3',
    title: 'Allergy Test Results',
    type: 'Lab Report',
    date: '24/5/2025',
    doctor: 'Dr. Emily Rodriguez',
    category: 'Lab Results',
    fileSize: '1.5MB',
  },
  {
    id: '4',
    title: 'Chest X-Ray',
    type: 'Medical Image',
    date: '28/5/2025',
    doctor: 'Dr. Lisa Thompson',
    category: 'Medical Images',
    fileSize: '0.5MB',
  },
  {
    id: '5',
    title: 'Diabetes Medication',
    type: 'Prescription',
    date: '1/6/2025',
    doctor: 'Dr. Robert Wilson',
    category: 'Prescriptions',
    fileSize: '0.3MB',
  },
  {
    id: '6',
    title: 'MRI Scan',
    type: 'Medical Image',
    date: '3/6/2025',
    doctor: 'Dr. Amanda Davis',
    category: 'Medical Images',
    fileSize: '15.2MB',
  },
];

const getTypeIcon = (category) => {
  switch (category) {
    case 'Lab Results':
      return <TestTube className="w-6 h-6 text-blue-600" />;
    case 'Prescriptions':
      return <Pill className="w-6 h-6 text-green-600" />;
    case 'Medical Images':
      return <Image className="w-6 h-6 text-purple-600" />;
    default:
      return <FileText className="w-6 h-6 text-gray-600" />;
  }
};

const getCategoryColor = (category) => {
  switch (category) {
    case 'Lab Results':
      return 'bg-blue-100 text-blue-800';
    case 'Prescriptions':
      return 'bg-green-100 text-green-800';
    case 'Medical Images':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const RecordCard = ({ record, onDownload, onShare }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 hover:border-teal-200">
      {/* Header with icon and title */}
      <div className="flex items-start space-x-3 mb-4">
        <div className="bg-gray-50 p-2 rounded-lg">
          {getTypeIcon(record.category)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{record.title}</h3>
          <p className="text-gray-600 text-sm">{record.type}</p>
        </div>
      </div>

      {/* Date */}
      <div className="flex items-center space-x-2 mb-3">
        <Calendar className="w-4 h-4 text-gray-400" />
        <span className="text-gray-600 text-sm">{record.date}</span>
      </div>

      {/* Doctor name */}
      <p className="text-gray-900 font-medium mb-3">{record.doctor}</p>

      {/* Category badge and file size */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(record.category)}`}>
          {record.category}
        </span>
        <span className="text-gray-500 text-sm">{record.fileSize}</span>
      </div>

      {/* Action buttons */}
      <div className="flex space-x-3">
        <button
          onClick={() => onDownload(record.id)}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
        >
          <Download className="w-4 h-4" />
          <span>Download</span>
        </button>
        <button
          onClick={() => onShare(record.id)}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
        >
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

function HealthRecordPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categoryOptions = [
    'All Categories',
    'Lab Results',
    'Prescriptions', 
    'Medical Images'
  ];

  // Filter and search logic
  const filteredRecords = useMemo(() => {
    let filtered = mockRecords;

    // Filter by tab
    if (activeTab !== 'all') {
      const categoryMap = {
        'prescriptions': 'Prescriptions',
        'lab-results': 'Lab Results',
        'images': 'Medical Images'
      };
      filtered = filtered.filter(record => record.category === categoryMap[activeTab]);
    }

    // Filter by dropdown selection
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(record => record.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(record =>
        record.title.toLowerCase().includes(query) ||
        record.doctor.toLowerCase().includes(query) ||
        record.type.toLowerCase().includes(query) ||
        record.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeTab, searchQuery, selectedCategory]);

  // Calculate counts for tabs
  const tabCounts = useMemo(() => {
    return {
      all: mockRecords.length,
      prescriptions: mockRecords.filter(r => r.category === 'Prescriptions').length,
      'lab-results': mockRecords.filter(r => r.category === 'Lab Results').length,
      images: mockRecords.filter(r => r.category === 'Medical Images').length,
    };
  }, []);

  const tabs = [
    { id: 'all', label: 'All Records', count: tabCounts.all },
    { id: 'prescriptions', label: 'Prescriptions', count: tabCounts.prescriptions },
    { id: 'lab-results', label: 'Lab Results', count: tabCounts['lab-results'] },
    { id: 'images', label: 'Images', count: tabCounts.images },
  ];

  const handleDownload = (id) => {
    console.log('Downloading record:', id);
    alert(`Downloading record ${id}`);
  };

  const handleShare = (id) => {
    console.log('Sharing record:', id);
    alert(`Sharing record ${id}`);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    // Reset tab to 'all' when using dropdown filter
    if (category !== 'All Categories') {
      setActiveTab('all');
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // Reset dropdown to 'All Categories' when using tab filter
    setSelectedCategory('All Categories');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
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
                <a href="/finddoctor" className="flex items-center space-x-2 hover:text-teal-200 transition-colors">
                  <Search size={22} />
                  <span className="text-[20px]">Find Doctors</span>
                </a>
                <a href="#" className="flex items-center space-x-2 hover:text-teal-200 transition-colors">
                  <Calendar size={22} />
                  <span className="text-[20px]">My Appointments</span>
                </a>
                <a className="underline decoration-4 decoration-teal flex items-center space-x-2 transition-colors">
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
      <header className="bg-gradient-to-br from-blue-100 via-purple-50 to-blue-200 shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Center - Search and Filters */}
            <div className="flex-1 max-w-2xl mx-8 flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search Records"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>
              
              {/* Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors min-w-[160px] justify-between"
                >
                  <span className="text-gray-700">{selectedCategory}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {categoryOptions.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          selectedCategory === category ? 'bg-teal-50 text-teal-700' : 'text-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right side - Upload button */}
            <button className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
              <Plus className="w-4 h-4" />
              <span>Upload Record</span>
            </button>
          </div>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-4 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id && selectedCategory === 'All Categories'
                    ? 'bg-teal-100 text-teal-700 border border-teal-200'
                    : 'text-gray-600 hover:bg-gray-100 border border-transparent'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  activeTab === tab.id && selectedCategory === 'All Categories'
                    ? 'bg-teal-200 text-teal-800'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  ({tab.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Records Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredRecords.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FileText className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No records found</h3>
            <p className="text-gray-500">
              {searchQuery ? 'Try adjusting your search terms.' : 'No records match the selected filter.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {filteredRecords.map((record) => (
              <RecordCard
                key={record.id}
                record={record}
                onDownload={handleDownload}
                onShare={handleShare}
              />
            ))}
          </div>
        )}
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
}

export default HealthRecordPage;