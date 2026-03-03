import { Link } from 'react-router';
import { Heart, Users, Award, TrendingUp, Download, ArrowRight } from 'lucide-react';
import { sponsorContent } from '../data/sponsorContent';

const sponsorTierAssetModules = import.meta.glob('../assets/sponsor logo/*.{png,jpg,jpeg,avif,webp,gif,svg}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

function buildSponsorTierAltText(fileName: string) {
  const normalizedLabel = fileName
    .replace(/\.(avif|webp|png|jpe?g|gif|svg)$/i, '')
    .replace(/-[A-Za-z0-9]{8,}$/, '')
    .replace(/[_-]+/g, ' ')
    .trim();

  return normalizedLabel
    ? `Sponsorship level image: ${normalizedLabel}`
    : 'Sponsorship level image';
}

const sponsorTierImages = Object.entries(sponsorTierAssetModules)
  .map(([path, src]) => {
    const fileName = path.split('/').pop() ?? '';
    return {
      src,
      alt: buildSponsorTierAltText(fileName),
      fileName
    };
  })
  .sort((left, right) => left.fileName.localeCompare(right.fileName));

const sponsorLogosByFileName = sponsorTierImages.reduce<Record<string, { src: string; alt: string }>>((acc, image) => {
  acc[image.fileName] = { src: image.src, alt: image.alt };
  return acc;
}, {});

const sponsorPacketPdf = new URL(`../assets/sponsor logo/${sponsorContent.packet.pdfFileName}`, import.meta.url).href;

function getTierPlaceholderImage(tierName: string) {
  const normalizedTierName = tierName.toLowerCase();

  if (normalizedTierName.includes('main stage')) {
    return sponsorTierImages.find((item) => /platinum/i.test(item.fileName)) ?? null;
  }

  if (normalizedTierName.includes('showcase')) {
    return sponsorTierImages.find((item) => /gold/i.test(item.fileName)) ?? null;
  }

  if (normalizedTierName.includes("people's choice")) {
    return sponsorTierImages.find((item) => /silver/i.test(item.fileName)) ?? null;
  }

  if (normalizedTierName.includes('camp')) {
    return sponsorTierImages.find((item) => /bronze/i.test(item.fileName)) ?? null;
  }

  return null;
}

export function Sponsor() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E53935] to-[#1A237E] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">{sponsorContent.hero.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {sponsorContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1A237E] mb-4">{sponsorContent.impact.title}</h2>
            <p className="text-[#1A237E]/70 text-xl max-w-3xl mx-auto">{sponsorContent.impact.description}</p>
          </div>

          {/* Impact Stories */}
          <div className="grid md:grid-cols-3 gap-8">
            {[Heart, Users, TrendingUp].map((Icon, index) => (
              <div key={`${sponsorContent.impact.stories[index].title}-${index}`} className="bg-[#F5F3EE] rounded-xl p-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${index === 1 ? 'bg-[#E53935]/10' : 'bg-[#00BCD4]/10'}`}>
                  <Icon className={`w-6 h-6 ${index === 1 ? 'text-[#E53935]' : 'text-[#00BCD4]'}`} />
                </div>
                <h3 className="text-[#1A237E] mb-3">{sponsorContent.impact.stories[index].title}</h3>
                <p className="text-[#1A237E]/70">{sponsorContent.impact.stories[index].text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1A237E] mb-4">{sponsorContent.tiers.title}</h2>
            <p className="text-[#1A237E]/70 text-xl max-w-3xl mx-auto">{sponsorContent.tiers.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorContent.tiers.items.map((tier, index) => (
              (() => {
                const tierImage = getTierPlaceholderImage(tier.name);

                return (
              <div
                key={`${tier.name}-${index}`}
                className={`bg-white rounded-xl p-6 shadow-md border-t-4 ${tier.badge ? 'relative' : ''}`}
                style={{ borderColor: tier.accent }}
              >
                {tier.badge && (
                  <div className="absolute -top-3 right-6 bg-[#E53935] text-white text-xs px-3 py-1 rounded-full font-medium">
                    {tier.badge}
                  </div>
                )}
                {tierImage && (
                  <div className="flex justify-center mb-4">
                    <img
                      src={tierImage.src}
                      alt={tierImage.alt}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-[#1A237E] mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-[#1A237E] mb-1">{tier.price}</div>
                  <div className="text-sm text-[#1A237E]/60">{tier.subtitle}</div>
                </div>
                <ul className="space-y-3 text-sm text-[#1A237E]/80 mb-6">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={`${benefit}-${benefitIndex}`} className="flex items-start gap-2">
                      <span className="text-[#00BCD4]">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
                );
              })()
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#1A237E]/70 mb-6">{sponsorContent.tiers.footerText}</p>
            <Link
              to={sponsorContent.tiers.buttonTo}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors shadow-lg"
            >
              {sponsorContent.tiers.buttonLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] text-center mb-16">{sponsorContent.whySponsor.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[Award, Users].map((Icon, index) => (
              <div key={`${sponsorContent.whySponsor.items[index].title}-${index}`}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${index === 1 ? 'bg-[#E53935]/10' : 'bg-[#00BCD4]/10'}`}>
                  <Icon className={`w-7 h-7 ${index === 1 ? 'text-[#E53935]' : 'text-[#00BCD4]'}`} />
                </div>
                <h3 className="text-[#1A237E] mb-4">{sponsorContent.whySponsor.items[index].title}</h3>
                <p className="text-[#1A237E]/70 leading-relaxed mb-4">{sponsorContent.whySponsor.items[index].text}</p>
                <ul className="space-y-2 text-[#1A237E]/70">
                  {sponsorContent.whySponsor.items[index].bullets.map((bullet, bulletIndex) => (
                    <li key={`${bullet}-${bulletIndex}`}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] text-center mb-12">{sponsorContent.sponsors.title}</h2>
          <p className="text-center text-[#1A237E]/70 mb-12 max-w-2xl mx-auto">{sponsorContent.sponsors.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {sponsorContent.sponsors.items.map((sponsor) => {
              const sponsorImage = sponsorLogosByFileName[sponsor.fileName];

              return (
              <div
                key={sponsor.name}
                className="bg-white rounded-lg p-6 flex items-center justify-center h-32 border border-[#1A237E]/10 hover:shadow-md transition-shadow"
                aria-label={sponsor.name}
              >
                {sponsorImage ? (
                  <img
                    src={sponsorImage.src}
                    alt={sponsor.name}
                    className="max-h-20 w-auto object-contain"
                  />
                ) : (
                  <div className="text-[#1A237E]/40 text-center text-sm">{sponsor.name}</div>
                )}
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download Sponsorship Packet */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#F5F3EE] rounded-xl p-12">
            <Download className="w-16 h-16 text-[#00BCD4] mx-auto mb-6" />
            <h2 className="text-[#1A237E] mb-4">{sponsorContent.packet.title}</h2>
            <p className="text-[#1A237E]/70 mb-8 max-w-2xl mx-auto">{sponsorContent.packet.description}</p>
            <a
              href={sponsorPacketPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors shadow-lg"
            >
              <Download className="w-5 h-5" />
              {sponsorContent.packet.buttonLabel}
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1A237E] to-[#00BCD4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">{sponsorContent.cta.title}</h2>
          <p className="text-xl text-white/90 mb-8">{sponsorContent.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={sponsorContent.cta.primaryTo}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1A237E] rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              {sponsorContent.cta.primaryLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={sponsorContent.cta.secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              {sponsorContent.cta.secondaryLabel}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
