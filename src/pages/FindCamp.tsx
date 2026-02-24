import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight, Search } from 'lucide-react';
import { findCampContent } from '../data/findCampContent';

export function FindCamp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const camps = findCampContent.camps;
  const ageOptions = [...new Set(camps.map((camp) => camp.ageRange))].sort();
  const locationOptions = [...new Set(camps.map((camp) => camp.location))].sort((a, b) =>
    a.localeCompare(b)
  );

  const filteredCamps = camps.filter((camp) => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const searchMatches =
      normalizedSearch.length === 0 ||
      camp.title.toLowerCase().includes(normalizedSearch) ||
      camp.location.toLowerCase().includes(normalizedSearch) ||
      camp.description.toLowerCase().includes(normalizedSearch) ||
      camp.date.toLowerCase().includes(normalizedSearch);

    const ageMatches = ageFilter === 'all' || camp.ageRange === ageFilter;
    const locationMatches = locationFilter === 'all' || camp.location === locationFilter;

    return searchMatches && ageMatches && locationMatches;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A237E] to-[#00BCD4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">{findCampContent.hero.title}</h1>
          <p className="text-xl text-white/90">
            {findCampContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 shadow-md sticky top-[84px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1A237E]/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search camps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#1A237E]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
              />
            </div>

            {/* Age Filter */}
            <select
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value)}
              className="px-4 py-2 border border-[#1A237E]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4] text-[#1A237E]"
            >
              <option value="all">All Ages</option>
              {ageOptions.map((age) => (
                <option key={age} value={age}>
                  Ages {age}
                </option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-4 py-2 border border-[#1A237E]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4] text-[#1A237E]"
            >
              <option value="all">All Locations</option>
              {locationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setAgeFilter('all');
                setLocationFilter('all');
              }}
              className="px-6 py-2 bg-[#F5F3EE] text-[#1A237E] rounded-lg hover:bg-[#E0DED8] transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </section>

      {/* Camps Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-[#1A237E] mb-2">{findCampContent.sectionHeader.title}</h2>
            <p className="text-[#1A237E]/70">{findCampContent.sectionHeader.description}</p>
            <p className="text-[#1A237E]/60 mt-2">
              Showing {filteredCamps.length} of {camps.length} camps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCamps.map((camp) => (
              <div
                key={camp.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border-t-4"
                style={{ borderColor: camp.color }}
              >
                <div className="p-6">
                  {/* Badge */}
                  <div className="mb-4">
                    {camp.spots === 'Limited spots available' ? (
                      <span className="inline-block px-3 py-1 bg-[#E53935]/10 text-[#E53935] text-sm font-medium rounded-full">
                        {camp.spots}
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 bg-[#00BCD4]/10 text-[#00BCD4] text-sm font-medium rounded-full">
                        {camp.spots}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-[#1A237E] mb-3">{camp.title}</h3>

                  {/* Description */}
                  <p className="text-[#1A237E]/70 text-sm mb-6">{camp.description}</p>

                  {/* Info Grid */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-[#1A237E]/70 text-sm">
                      <Calendar className="w-4 h-4" style={{ color: camp.color }} />
                      <span>{camp.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1A237E]/70 text-sm">
                      <MapPin className="w-4 h-4" style={{ color: camp.color }} />
                      <span>{camp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1A237E]/70 text-sm">
                      <Users className="w-4 h-4" style={{ color: camp.color }} />
                      <span>Ages {camp.ageRange}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1A237E]/70 text-sm">
                      <Clock className="w-4 h-4" style={{ color: camp.color }} />
                      <span>{camp.duration}</span>
                    </div>
                  </div>

                  {/* Camp Contacts */}
                  {camp.contacts && camp.contacts.length > 0 && (
                    <div className="border-t border-[#1A237E]/10 pt-4 space-y-2">
                      <div className="text-xs uppercase tracking-[0.2em] text-[#1A237E]/60">
                        Camp Contacts
                      </div>
                      <div className="space-y-1 text-sm text-[#1A237E]/70">
                        {camp.contacts.map((contact) => (
                          <div key={`${camp.id}-${contact.label}`}> 
                            <span className="text-[#1A237E] font-medium">{contact.label}:</span>{' '}
                            <a
                              href={`mailto:${contact.value}`}
                              className="text-[#1A237E]/70 hover:text-[#1A237E]"
                            >
                              {contact.value}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredCamps.length === 0 && (
            <div className="mt-8 text-center text-[#1A237E]/70">
              No camps match your current filters.
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[#1A237E] mb-4">{findCampContent.expectations.title}</h2>
              <ul className="space-y-3 text-[#1A237E]/80">
                {findCampContent.expectations.items.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex items-start gap-2">
                    <span className="text-[#00BCD4] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[#1A237E] mb-4">{findCampContent.questions.title}</h2>
              <p className="text-[#1A237E]/80 mb-6">{findCampContent.questions.description}</p>
              <div className="space-y-4">
                <a
                  href={findCampContent.questions.emailHref}
                  className="block px-6 py-3 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors text-center"
                >
                  {findCampContent.questions.emailLabel}
                </a>
                <a
                  href={findCampContent.questions.phoneHref}
                  className="block px-6 py-3 bg-[#1A237E] text-white rounded-lg font-medium hover:bg-[#283593] transition-colors text-center"
                >
                  {findCampContent.questions.phoneLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
