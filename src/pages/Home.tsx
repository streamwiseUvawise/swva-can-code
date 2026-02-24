import { Link } from 'react-router';
import { Code, Users, Lightbulb, Award, ArrowRight, Calendar, MapPin } from 'lucide-react';
import bannerImage from '../assets/logo1.png';
import swiftLogo from '../assets/swift.svg';
import { homeContent } from '../data/homeContent';
import { findCampContent } from '../data/findCampContent';
import { showcaseContent } from '../data/showcaseContent';

export function Home() {
  const offerIconMap = {
    code: Code,
    award: Award,
    lightbulb: Lightbulb,
    users: Users
  } as const;

  const previewCamps = findCampContent.camps.slice(0, 3).map((camp) => ({
    title: camp.title,
    date: camp.date,
    location: camp.location,
    ages: `Ages ${camp.ageRange}`,
    color: camp.color
  }));
  const galleryPreview = showcaseContent.gallery.images.slice(0, 4);

  return (
    <div>
      {/* ============================================
          HERO SECTION (Top banner with main headline)
          ============================================ */}
      {/* This is the first thing visitors see - the big navy blue section with the main headline */}
      <section className="relative bg-[#1A237E] text-white overflow-hidden">
        {/* Binary code pattern background - decorative only, can be removed if desired */}
        <div className="absolute inset-0 opacity-10 text-[#00BCD4] text-xs leading-tight font-mono pointer-events-none overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i}>
              {Array.from({ length: 200 })
                .map(() => Math.random() > 0.5 ? '1' : '0')
                .join(' ')}
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE: Main headline and text */}
            <div className="text-center lg:text-left">
              {/* Small badge above headline - change text here */}
              <div className="inline-block px-4 py-2 bg-[#00BCD4] rounded-full text-sm font-medium mb-6">
                {homeContent.hero.badge}
              </div>
              
              {/* MAIN HEADLINE - Edit the text between the tags to change the headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {homeContent.hero.titleParts.map((part, index) => (
                  <span key={`${part.text}-${index}`} className={part.className}>
                    {part.text}
                  </span>
                ))}
              </h1>
              
              {/* SUBHEADLINE - Edit this paragraph to change the description */}
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                {homeContent.hero.subtitle}
              </p>

              {/* BUTTONS - These are the two main call-to-action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* First button (cyan) - Links to Find a Camp page */}
                {/* To change where it goes, edit the text in to="/find-camp" */}
                <Link
                  to={homeContent.hero.primaryCta.to}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors shadow-lg"
                >
                  {homeContent.hero.primaryCta.label}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                {/* Second button (white) - Links to About page */}
                <Link
                  to={homeContent.hero.secondaryCta.to}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1A237E] rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  {homeContent.hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE: Hero image */}
            {/* This displays the main banner image - image file is imported at the top */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={bannerImage} 
                  alt="Students coding together" 
                  className="rounded-2xl"
                />
              </div>
              {/* Decorative colored blurs behind the image - can be removed if desired */}
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#00BCD4] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#E53935] rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Wave decoration at bottom - decorative only */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="#F5F3EE"
            />
          </svg>
        </div>
      </section>

      {/* ============================================
          STATS SECTION (500+ Students, 25+ Camps, etc.)
          ============================================ */}
      {/* This section shows key numbers/statistics in a row */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* STAT 1 - Edit the number and label text */}
            {homeContent.stats.map((stat, index) => (
              <div key={`${stat.label}-${index}`} className="text-center">
                <div className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.colorClass}`}>{stat.value}</div>
                <div className="text-[#1A237E]/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT WE OFFER SECTION (4 program cards)
          ============================================ */}
      {/* This section shows the 4 main program types in card format */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header - edit these texts */}
          <div className="text-center mb-16">
            <h2 className="text-[#1A237E] mb-4">{homeContent.offersSection.title}</h2>
            <p className="text-[#1A237E]/70 text-xl max-w-3xl mx-auto">{homeContent.offersSection.description}</p>
          </div>

          {/* The 4 program cards - each card follows the same structure */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeContent.offers.map((offer, index) => {
              const Icon = offerIconMap[offer.icon];
              return (
                <div
                  key={`${offer.title}-${index}`}
                  className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 ${offer.borderClass}`}
                >
                  <div className={`w-14 h-14 ${offer.iconBgClass} rounded-full flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${offer.colorClass}`} />
                  </div>
                  <h3 className="text-[#1A237E] mb-3">{offer.title}</h3>
                  <p className="text-[#1A237E]/70 mb-4">{offer.description}</p>
                  <Link to={offer.linkTo} className={`${offer.colorClass} font-medium hover:underline inline-flex items-center gap-1`}>
                    {offer.linkLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          APPLE CURRICULUM SECTION
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs tracking-[0.4em] text-[#1A237E]/60 mb-3">
            {homeContent.appleCurriculum.logoLabel}
          </div>
          <h2 className="text-[#1A237E] mb-6">{homeContent.appleCurriculum.title}</h2>
          <div className="flex items-start gap-6 mb-4">
            <img
              src={swiftLogo}
              alt="Swift logo"
              className="h-20 w-20 shrink-0"
            />
            <p className="text-[#1A237E]/80 text-lg">{homeContent.appleCurriculum.intro}</p>
          </div>
          <p className="text-[#1A237E]/70 mb-6">{homeContent.appleCurriculum.details}</p>
          <ul className="space-y-3 text-[#1A237E]/80 mb-6">
            {homeContent.appleCurriculum.bullets.map((item, index) => (
              <li key={`${item}-${index}`} className="flex items-start gap-2">
                <span className="text-[#00BCD4] font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            {homeContent.appleCurriculum.links.map((link, index) => (
              <a
                key={`${link.label}-${index}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#1A237E] text-[#1A237E] font-medium hover:bg-[#1A237E]/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          UPCOMING CAMPS PREVIEW (3 camp cards)
          ============================================ */}
      {/* This section displays upcoming camps with dates and locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with link to all camps */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-[#1A237E] mb-2">{homeContent.upcomingCampsSection.title}</h2>
              <p className="text-[#1A237E]/70 text-lg">{homeContent.upcomingCampsSection.description}</p>
            </div>
            <Link
              to={homeContent.upcomingCampsSection.linkTo}
              className="mt-4 sm:mt-0 text-[#00BCD4] font-medium hover:underline inline-flex items-center gap-1"
            >
              {homeContent.upcomingCampsSection.linkLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Camp cards grid */}
          {/* HOW TO EDIT: Change the text in the array below to update camp details */}
          <div className="grid md:grid-cols-3 gap-8">
            {previewCamps.map((camp, index) => (
              // Don't edit this part - it displays each camp from the array above
              <div key={index} className="bg-[#F5F3EE] rounded-xl p-6 border-l-4 hover:shadow-lg transition-shadow" style={{ borderColor: camp.color }}>
                <h3 className="text-[#1A237E] mb-4">{camp.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-[#1A237E]/70">
                    <Calendar className="w-4 h-4" style={{ color: camp.color }} />
                    <span className="text-sm">{camp.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#1A237E]/70">
                    <MapPin className="w-4 h-4" style={{ color: camp.color }} />
                    <span className="text-sm">{camp.location}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-[#1A237E]">
                    {camp.ages}
                  </div>
                </div>
                <button className="w-full py-2 rounded-lg font-medium text-white transition-colors" style={{ backgroundColor: camp.color }}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          STUDENT SHOWCASE GALLERY PREVIEW
          ============================================ */}
      <section className="py-20 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-[#1A237E] mb-2">{homeContent.showcasePreview.title}</h2>
              {/* Edit this sentence to change the preview description. */}
              <p className="text-[#1A237E]/70 text-lg">{homeContent.showcasePreview.description}</p>
            </div>
            <Link
              to={homeContent.showcasePreview.linkTo}
              className="mt-4 sm:mt-0 text-[#E53935] font-medium hover:underline inline-flex items-center gap-1"
            >
              {homeContent.showcasePreview.linkLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* This message shows if there are no approved photos yet. */}
            {galleryPreview.length === 0 && (
              <div className="col-span-full bg-white rounded-xl p-8 text-center text-[#1A237E]/70">
                {homeContent.showcasePreview.emptyMessage}
              </div>
            )}
            {galleryPreview.map((photo, index) => (
              <div key={`${photo.src}-${index}`} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CALL-TO-ACTION SECTION (Bottom banner)
          ============================================ */}
      {/* Final section encouraging visitors to take action */}
      <section className="py-20 bg-gradient-to-r from-[#1A237E] to-[#00BCD4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Headline - edit this text */}
          <h2 className="text-white mb-6">{homeContent.cta.title}</h2>
          {/* Description - edit this text */}
          <p className="text-xl text-white/90 mb-8">{homeContent.cta.description}</p>
          {/* Two action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={homeContent.cta.primaryTo}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1A237E] rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              {homeContent.cta.primaryLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={homeContent.cta.secondaryTo}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              {homeContent.cta.secondaryLabel}
            </Link>
          </div>
          {homeContent.cta.followUp && (
            <p className="text-white/90 mt-6">{homeContent.cta.followUp}</p>
          )}
        </div>
      </section>

      {/* ============================================
          FAQ TEASER SECTION
          ============================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1A237E] mb-3">{homeContent.faqTeaser.title}</h2>
          <p className="text-[#1A237E]/70 text-lg mb-6">{homeContent.faqTeaser.subtitle}</p>
          <Link
            to={homeContent.faqTeaser.ctaTo}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#00BCD4] text-white font-medium hover:bg-[#00ACC1] transition-colors"
          >
            {homeContent.faqTeaser.ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}