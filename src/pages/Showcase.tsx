import { ExternalLink, Code, Palette, Trophy, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { showcaseContent } from '../data/showcaseContent';

export function Showcase() {
  const { gallery, projects, stats, submitCta, eventDetails } = showcaseContent;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E53935] to-[#1A237E] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">{showcaseContent.hero.title}</h1>
          <p className="text-xl text-white/90">
            {showcaseContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F3EE] rounded-xl p-6 md:p-8 text-[#1A237E]">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#00BCD4]" />
                <span className="font-medium">{eventDetails.dateAndVenue}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#E53935]" />
                <span>{eventDetails.campus}</span>
              </div>
            </div>

            <h2 className="text-[#1A237E] mb-3">{eventDetails.celebrationTitle}</h2>
            <p className="text-[#1A237E]/80 mb-2">{eventDetails.posterSessionText}</p>
            <p className="text-[#1A237E]/80">{eventDetails.pitchCompetitionText}</p>
          </div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {showcaseContent.filterTags.map((tag, index) => (
              <button
                key={`${tag}-${index}`}
                className={
                  index === 0
                    ? 'px-4 py-2 bg-[#00BCD4] text-white rounded-full text-sm font-medium hover:bg-[#00ACC1] transition-colors'
                    : 'px-4 py-2 bg-[#F5F3EE] text-[#1A237E] rounded-full text-sm font-medium hover:bg-[#E0DED8] transition-colors'
                }
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.length === 0 ? (
            <div className="max-w-3xl mx-auto bg-[#F5F3EE] border border-[#1A237E]/10 rounded-xl p-8 text-center">
              <h3 className="text-[#1A237E] mb-2">Projects Coming Soon</h3>
              <p className="text-[#1A237E]/70">{showcaseContent.projectsEmptyMessage}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#00BCD4] text-white text-sm font-medium rounded-full">
                      Age {project.age}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-[#1A237E] mb-2">{project.title}</h3>
                    <p className="text-[#00BCD4] text-sm font-medium mb-3">By {project.student}</p>
                    <p className="text-[#1A237E]/70 text-sm mb-4">{project.description}</p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-[#F5F3EE] text-[#1A237E] text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    {project.projectUrl ? (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 bg-[#E53935] text-white rounded-lg font-medium hover:bg-[#D32F2F] transition-colors flex items-center justify-center gap-2"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="w-full py-2 bg-[#F5F3EE] text-[#1A237E]/60 rounded-lg font-medium flex items-center justify-center gap-2">
                        Showcase Link Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Student Gallery */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-[#1A237E] mb-3">{gallery.title}</h2>
              <p className="text-[#1A237E]/70 text-lg max-w-2xl">
                {gallery.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.images.map((image, index) => (
              <div key={`${image.src}-${index}`} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full ${image.fit === 'contain' ? 'object-contain bg-white p-2' : 'object-cover'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Project CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#00BCD4] to-[#1A237E] rounded-2xl p-8 md:p-12 text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10" />
            </div>
            <h2 className="text-white mb-4">{submitCta.title}</h2>
            <p className="text-xl text-white/90 mb-8">{submitCta.description}</p>
            <Link
              to={submitCta.buttonTo}
              className="inline-flex px-8 py-4 bg-white text-[#1A237E] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {submitCta.buttonLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[Code, Palette, Trophy].map((Icon, index) => (
              <div key={`${stats[index].label}-${index}`} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${index === 1 ? 'bg-[#E53935]/10' : 'bg-[#00BCD4]/10'}`}>
                  <Icon className={`w-8 h-8 ${stats[index].colorClass}`} />
                </div>
                <div className="text-3xl font-bold text-[#1A237E] mb-2">{stats[index].value}</div>
                <div className="text-[#1A237E]/70">{stats[index].label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
