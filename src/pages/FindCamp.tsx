import { useState } from 'react';
import { Calendar, MapPin, Clock, Search } from 'lucide-react';
import { findCampContent } from '../data/findCampContent';

export function FindCamp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');
  const [countyFilter, setCountyFilter] = useState('all');

  const camps = findCampContent.camps;
  const levelOptions = ['MS(5-8)', 'HS(9-12)', 'CC(1-3)', 'CC(4-6)'];
  const normalizeKey = (value?: string) =>
    (value || '')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();

  const normalizeCountyKey = (value?: string) => normalizeKey(value).replace(/\bcounty\b/g, '').trim();
  const normalizeLevelKey = (value?: string) => normalizeKey(value).replace(/\s+/g, '');

  const getCampCounty = (camp: (typeof camps)[number]) => {
    const explicitCounty = camp.county?.trim();
    if (explicitCounty) return explicitCounty;

    const titleAndLocation = `${camp.title} ${camp.location || ''}`;
    if (/uvawise|streamwise/i.test(titleAndLocation)) {
      return 'Wise County';
    }

    return (camp.location || '').split(',')[0].trim();
  };

  const countyOptions = [...new Set(camps.map((camp) => getCampCounty(camp)).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b)
  );

  const filteredCamps = camps.filter((camp) => {
    const normalizedSearch = normalizeKey(searchTerm);
    const searchMatches =
      normalizedSearch.length === 0 ||
      normalizeKey(camp.title).includes(normalizedSearch) ||
      normalizeKey(camp.location).includes(normalizedSearch) ||
      normalizeKey(camp.county).includes(normalizedSearch) ||
      normalizeKey(camp.date).includes(normalizedSearch) ||
      normalizeKey(camp.time).includes(normalizedSearch);

    const ageMatches = true; // kept for compatibility if needed elsewhere
    const levelMatches = levelFilter === 'all' || normalizeLevelKey(camp.level) === normalizeLevelKey(levelFilter);
    const countyMatches = countyFilter === 'all' || normalizeCountyKey(getCampCounty(camp)) === normalizeCountyKey(countyFilter);

    return searchMatches && levelMatches && countyMatches;
  });

  // Sort camps: chronological (if parseable) → level (MS, HS, CC(1-3), CC(4-6)) → title
  const levelOrder = ['MS(5-8)', 'HS(9-12)', 'CC(1-3)', 'CC(4-6)'];

  function parseDateToTimestamp(dateStr?: string) {
    if (!dateStr) return Infinity;
    const m = dateStr.match(/(January|February|March|April|May|June|July|August|September|October|November|December)/i);
    const y = dateStr.match(/(20\d{2})/);
    const monthMap: Record<string, number> = {
      january: 0,
      february: 1,
      march: 2,
      april: 3,
      may: 4,
      june: 5,
      july: 6,
      august: 7,
      september: 8,
      october: 9,
      november: 10,
      december: 11
    };
    if (y) {
      const year = parseInt(y[1], 10);
      if (m) {
        const month = monthMap[m[1].toLowerCase()] ?? 0;
        return new Date(year, month, 1).getTime();
      }
      return new Date(year, 0, 1).getTime();
    }
    return Infinity;
  }

  const sortedCamps = [...filteredCamps].sort((a, b) => {
    const ta = parseDateToTimestamp(a.date);
    const tb = parseDateToTimestamp(b.date);
    if (ta !== tb) return ta - tb;
    const la = levelOrder.findIndex((level) => normalizeLevelKey(level) === normalizeLevelKey(a.level));
    const lb = levelOrder.findIndex((level) => normalizeLevelKey(level) === normalizeLevelKey(b.level));
    if (la !== lb) return la - lb;
    return a.title.localeCompare(b.title);
  });

  function formatNameFromEmail(email?: string) {
    if (!email) return '';

    const local = email.split('@')[0]?.trim() || '';
    if (!local) return '';

    const blockedPrefixes = ['info', 'admin', 'support', 'contact', 'office', 'district', 'camp', 'noreply', 'no-reply'];
    if (blockedPrefixes.includes(local.toLowerCase())) {
      return '';
    }

    const tokens = local.split(/[._-]+/).filter(Boolean);
    if (tokens.length >= 2) {
      return tokens
        .map((part) => part.replace(/\d+/g, '').trim())
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ');
    }

    return '';
  }

  function renderContactDetails(
    roleLabel: string,
    contact?: { label: string; value: string },
    phone?: string,
    customName?: string
  ) {
    const name = customName?.trim() || formatNameFromEmail(contact?.value);
    const email = contact?.value || '';
    const normalizedPhone = phone || '';

    return (
      <>
        {name && (
          <div className="flex items-center gap-2">
            <span className="font-medium">{roleLabel}:</span>
            <span className="text-[#1A237E]/70">{name}</span>
          </div>
        )}

        {email && (
          <div className="flex items-center gap-2">
            <span className="font-medium">{roleLabel} email:</span>
            <a href={`mailto:${email}`} className="text-[#1A237E]/70 hover:text-[#1A237E]">
              {email}
            </a>
          </div>
        )}

        {normalizedPhone && (
          <div className="flex items-center gap-2">
            <span className="font-medium">{roleLabel} phone:</span>
            <a
              href={`tel:${normalizedPhone.replace(/[^\d+]/g, '')}`}
              className="text-[#1A237E]/70 hover:text-[#1A237E]"
            >
              {normalizedPhone}
            </a>
          </div>
        )}
      </>
    );
  }

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

            {/* Level Filter */}
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="px-4 py-2 border border-[#1A237E]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4] text-[#1A237E]"
            >
              <option value="all">All Levels</option>
              {levelOptions.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>

            {/* County Filter */}
            <select
              value={countyFilter}
              onChange={(e) => setCountyFilter(e.target.value)}
              className="px-4 py-2 border border-[#1A237E]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4] text-[#1A237E]"
            >
              <option value="all">All Counties</option>
              {countyOptions.map((county) => (
                <option key={county} value={county}>
                  {county}
                </option>
              ))}
            </select>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setLevelFilter('all');
                setCountyFilter('all');
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
            {sortedCamps.map((camp) => {
              const districtContact = camp.contacts?.find((c) =>
                /superintendent|district|kil|tech director/i.test(c.label?.trim() || '')
              );
              const campLeader = camp.contacts?.find((c) =>
                /camp\s*lead(er)?|camp lead/i.test(c.label?.trim() || '')
              );
              const additional = camp.contacts
                ? camp.contacts.filter((c) => c !== districtContact && c !== campLeader)
                : [];
              const districtContactPhone = (camp as { districtContactPhone?: string }).districtContactPhone || '';
              const districtContactName = (camp as { districtContactName?: string }).districtContactName || '';
              const campLeadPhone = camp.leaderPhone || '';
              const campLeadName = (camp as { leaderName?: string }).leaderName || '';

              return (
                <div
                  key={camp.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border-t-4"
                  style={{ borderColor: camp.color }}
                >
                  <div className="p-6">
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

                    <h3 className="text-[#1A237E] mb-3">{camp.title}</h3>

                    <div className="space-y-2 text-sm text-[#1A237E]/80 mb-4">
                      {renderContactDetails('District Contact', districtContact, districtContactPhone, districtContactName)}

                      <div className="flex items-center gap-2">
                        <span className="font-medium">Camp Level:</span>
                        <span className="text-[#1A237E]/70">{camp.level || 'TBD'}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" style={{ color: camp.color }} />
                        <span>{camp.date || 'Dates TBD'}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" style={{ color: camp.color }} />
                        <span>{camp.time || 'Time TBD'}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" style={{ color: camp.color }} />
                        <span>{camp.location || camp.county || 'Location TBD'}</span>
                      </div>

                      {renderContactDetails('Camp Lead', campLeader, campLeadPhone, campLeadName)}

                      {additional.length > 0 && (
                        <div>
                          <div className="font-medium">Additional Personnel:</div>
                          <div className="mt-1 space-y-1 text-[#1A237E]/70">
                            {additional.map((p) => (
                              <div key={`${camp.id}-${p.label}`} className="space-y-1">
                                {renderContactDetails(p.label, p)}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {(camp.registration || camp.directions) && (
                        <div className="mt-3">
                          {camp.registration && (
                            <a href={camp.registration} className="inline-block px-4 py-2 bg-[#00BCD4] text-white rounded-lg mr-2">Register</a>
                          )}
                          {camp.directions && (
                            <a href={camp.directions} className="inline-block px-4 py-2 bg-[#1A237E] text-white rounded-lg">Directions</a>
                          )}
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              );
            })}
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
