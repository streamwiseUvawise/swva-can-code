import { useState } from 'react';
import { Link } from 'react-router';
import { Search, BookOpen, Download, Video, X } from 'lucide-react';
import { curriculumContent } from '../data/curriculumContent';

export function Curriculum() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  const getYouTubeEmbedUrl = (videoId: string) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.youtube.com';
    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      origin
    });
    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  };

  // Glossary terms data
  const glossaryTerms = curriculumContent.glossaryTerms;

  // Filter terms based on search
  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A237E] to-[#00BCD4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">{curriculumContent.hero.title}</h1>
          <p className="text-xl text-white/90">
            {curriculumContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#1A237E]/80 text-lg leading-relaxed">
            {curriculumContent.intro}
          </p>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-[#1A237E] mb-4">{curriculumContent.modulesSection.title}</h2>
            <p className="text-[#1A237E]/70 text-lg">{curriculumContent.modulesSection.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumContent.modules.map((module, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4"
                style={{ borderColor: module.color }}
              >
                <h3 className="text-[#1A237E] mb-3">{module.title}</h3>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span 
                    className="text-xs px-2 py-1 rounded-full text-white font-medium"
                    style={{ backgroundColor: module.color }}
                  >
                    {module.level}
                  </span>
                  <span className="text-xs px-2 py-1 bg-[#F5F3EE] rounded-full text-[#1A237E] font-medium">
                    {module.duration}
                  </span>
                </div>
                <p className="text-sm text-[#1A237E]/70 mb-1">{module.grade}</p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-[#1A237E] mb-2">Includes:</p>
                  <ul className="text-sm text-[#1A237E]/70 space-y-1">
                    {module.includes.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                {module.pdfPath ? (
                  <a
                    href={module.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90"
                    style={{ backgroundColor: module.color }}
                  >
                    <Download className="w-4 h-4" />
                    Download Module
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-lg font-medium text-white/90 opacity-70 cursor-not-allowed"
                    style={{ backgroundColor: module.color }}
                  >
                    <Download className="w-4 h-4" />
                    PDF Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] mb-8">{curriculumContent.resourcesSection.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {curriculumContent.resourcesSection.items.map((resource, index) => (
              <div key={index} className="bg-[#F5F3EE] rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{resource.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-[#1A237E] mb-2">{resource.name}</h3>
                    <p className="text-[#1A237E]/70 mb-3">{resource.description}</p>
                    <a 
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00BCD4] font-medium hover:underline text-sm"
                    >
                      Visit Site →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Searchable Glossary */}
      <section className="py-20 bg-[#00BCD4]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-[#1A237E] mb-4">{curriculumContent.glossarySection.title}</h2>
            <p className="text-[#1A237E]/70 text-lg mb-8">{curriculumContent.glossarySection.description}</p>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A237E]/40" />
              <input
                type="text"
                placeholder={curriculumContent.glossarySection.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-[#1A237E]/10 focus:border-[#00BCD4] focus:outline-none text-[#1A237E]"
              />
            </div>
          </div>

          {/* Glossary Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4"
                style={{ borderColor: item.color }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-[#1A237E] text-xl">{item.term}</h3>
                  <span 
                    className="text-xs px-2 py-1 rounded-full text-white font-medium"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.difficulty}
                  </span>
                </div>
                
                <p className="text-[#1A237E]/80 mb-4 leading-relaxed">
                  {item.definition}
                </p>

                <button
                  onClick={() => setSelectedTerm(index)}
                  className="w-full flex items-center justify-center gap-2 py-2 bg-[#F5F3EE] hover:bg-[#E0DED8] text-[#1A237E] rounded-lg font-medium transition-colors"
                >
                  <Video className="w-4 h-4" />
                  Watch Video Explanation
                </button>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12 text-[#1A237E]/70">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>{curriculumContent.glossarySection.emptyMessagePrefix}"{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedTerm !== null && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTerm(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-[#1A237E] text-2xl mb-2">
                  {filteredTerms[selectedTerm].term}
                </h3>
                <p className="text-[#1A237E]/70">
                  {filteredTerms[selectedTerm].definition}
                </p>
              </div>
              <button
                onClick={() => setSelectedTerm(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-[#1A237E]" />
              </button>
            </div>
            
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src={getYouTubeEmbedUrl(filteredTerms[selectedTerm].videoId)}
                title={filteredTerms[selectedTerm].term}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* CTA for Educators */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1A237E] mb-6">{curriculumContent.cta.title}</h2>
          <p className="text-[#1A237E]/80 text-lg mb-8">{curriculumContent.cta.description}</p>
          <Link
            to={curriculumContent.cta.buttonTo}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors shadow-lg"
          >
            {curriculumContent.cta.buttonLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
