import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { contactContent } from '../data/contactContent';

export function Contact() {
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  // Form state management - don't edit this section
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!formspreeEndpoint) {
      setSubmitError('Contact form is not configured yet. Please set VITE_FORMSPREE_ENDPOINT.');
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Unable to send your message right now. Please try again.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        message: ''
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* ============================================
          HERO SECTION (Page header)
          ============================================ */}
      <section className="bg-gradient-to-r from-[#1A237E] to-[#00BCD4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Page title - edit this text */}
          <h1 className="text-white mb-6">{contactContent.hero.title}</h1>
          {/* Page description - edit this text */}
          <p className="text-xl text-white/90">{contactContent.hero.subtitle}</p>
        </div>
      </section>

      {/* ============================================
          MAIN CONTENT: Contact info + Form
          ============================================ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT COLUMN: Contact Information */}
            <div>
              <h2 className="text-[#1A237E] mb-6">{contactContent.intro.title}</h2>
              {/* Intro paragraph - edit this text */}
              <p className="text-[#1A237E]/70 mb-8 leading-relaxed">{contactContent.intro.text}</p>

              {/* CONTACT DETAILS - Edit email, phone, and location below */}
              <div className="space-y-6">
                {/* EMAIL - Change the email address and description */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#00BCD4]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A237E] mb-1">{contactContent.contactDetails.email.label}</h3>
                    {/* Change email address here */}
                    <a 
                      href={`mailto:${contactContent.contactDetails.email.address}`}
                      className="text-[#00BCD4] hover:underline"
                    >
                      {contactContent.contactDetails.email.address}
                    </a>
                    {/* Edit response time text */}
                    <p className="text-sm text-[#1A237E]/60 mt-1">
                      {contactContent.contactDetails.email.responseTime}
                    </p>
                  </div>
                </div>

                {/* PHONE - Change the phone number and hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E53935]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#E53935]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A237E] mb-1">{contactContent.contactDetails.phone.label}</h3>
                    {/* Change phone number here */}
                    <a 
                      href={`tel:${contactContent.contactDetails.phone.tel}`}
                      className="text-[#00BCD4] hover:underline"
                    >
                      {contactContent.contactDetails.phone.number}
                    </a>
                    {/* Edit office hours */}
                    <p className="text-sm text-[#1A237E]/60 mt-1">
                      {contactContent.contactDetails.phone.hours}
                    </p>
                  </div>
                </div>

                {/* LOCATION - Change location text */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#00BCD4]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A237E] mb-1">{contactContent.contactDetails.location.label}</h3>
                    {/* Change location text here */}
                    <p className="text-[#1A237E]/70">
                      {contactContent.contactDetails.location.line1}
                    </p>
                    <p className="text-sm text-[#1A237E]/60 mt-1">
                      {contactContent.contactDetails.location.line2}
                    </p>
                  </div>
                </div>
              </div>

              {/* QUICK LINKS BOX */}
              <div className="mt-12 bg-[#F5F3EE] rounded-xl p-6">
                <h3 className="text-[#1A237E] mb-4">{contactContent.quickLinks.title}</h3>
                {/* Edit these quick links as needed */}
                <ul className="space-y-3 text-[#1A237E]/70">
                  {contactContent.quickLinks.items.map((link, index) => (
                    <li key={`${link.label}-${index}`}>
                      <strong className="text-[#1A237E]">{link.label}</strong>{' '}
                      <a href={link.href} className="text-[#00BCD4] hover:underline">{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            {/* Don't edit the form structure, but you can edit labels and placeholder text */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-[#00BCD4]">
                <h2 className="text-[#1A237E] mb-6">{contactContent.form.title}</h2>

                {/* Success message - shown after form submission */}
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    {contactContent.form.successMessage}
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* NAME FIELD */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1A237E] mb-2">
                      {contactContent.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#1A237E]/20 rounded-lg focus:border-[#00BCD4] focus:outline-none text-[#1A237E]"
                      placeholder={contactContent.form.namePlaceholder}
                    />
                  </div>

                  {/* EMAIL FIELD */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1A237E] mb-2">
                      {contactContent.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#1A237E]/20 rounded-lg focus:border-[#00BCD4] focus:outline-none text-[#1A237E]"
                      placeholder={contactContent.form.emailPlaceholder}
                    />
                  </div>

                  {/* PHONE FIELD (Optional) */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1A237E] mb-2">
                      {contactContent.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#1A237E]/20 rounded-lg focus:border-[#00BCD4] focus:outline-none text-[#1A237E]"
                      placeholder={contactContent.form.phonePlaceholder}
                    />
                  </div>

                  {/* INQUIRY TYPE DROPDOWN */}
                  {/* To add/remove options, edit the <option> tags below */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-[#1A237E] mb-2">
                      {contactContent.form.inquiryLabel}
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#1A237E]/20 rounded-lg focus:border-[#00BCD4] focus:outline-none text-[#1A237E]"
                    >
                      {/* Edit these options or add new ones */}
                      {contactContent.form.inquiryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* MESSAGE FIELD */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1A237E] mb-2">
                      {contactContent.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-[#1A237E]/20 rounded-lg focus:border-[#00BCD4] focus:outline-none text-[#1A237E] resize-none"
                      placeholder={contactContent.form.messagePlaceholder}
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : contactContent.form.submitLabel}
                  </button>

                  <p className="text-sm text-[#1A237E]/60 text-center">
                    {contactContent.form.requiredNote}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      {/* Frequently asked questions - add or edit questions below */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] text-center mb-12">{contactContent.faq.title}</h2>
          
          {/* Each FAQ is in its own box - copy/paste to add more */}
          <div className="space-y-6">
            {contactContent.faq.items.map((item, index) => (
              <div key={`${item.question}-${index}`} className="bg-[#F5F3EE] rounded-lg p-6">
                <h3 className="text-[#1A237E] mb-3">{item.question}</h3>
                <p className="text-[#1A237E]/70">{item.answer}</p>
              </div>
            ))}
            
            {/* TO ADD MORE FAQs: Copy the section above from <div className="bg-[#F5F3EE]...
                 to the closing </div>, paste it here, and edit the question and answer */}
          </div>
        </div>
      </section>
    </div>
  );
}