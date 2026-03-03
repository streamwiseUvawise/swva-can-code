import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoCanCode from '../assets/canCodeLogo.png';

export function Footer() {
  return (
    <footer className="bg-[#1A237E] text-white mt-16">
      {/* Colored bar at top - decorative element */}
      {/* To change colors, edit: [#00BCD4]=cyan, [#E53935]=red, [#1A237E]=navy */}
      <div className="h-2 bg-gradient-to-r from-[#00BCD4] via-[#E53935] to-[#1A237E]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ============================================
              COLUMN 1: Logo & Mission Statement
              ============================================ */}
          {/* Takes up 2 columns on desktop for emphasis */}
          <div className="md:col-span-2">
            {/* Logo and organization name */}
            <div className="flex items-center gap-3 mb-4">
              <img src={logoCanCode} alt="SWVA Can Code" className="h-16 w-16" />
              <div>
                {/* Edit organization name here */}
                <div className="font-bold text-xl">Southwest Virginia</div>
                <div className="text-[#00BCD4] font-bold text-lg">Can Code</div>
              </div>
            </div>
            {/* Mission statement - edit this paragraph */}
            <p className="text-white/80 max-w-md">
              Empowering K-12 students in Southwest Virginia through coding camps, 
              creative tech experiences, and accessible learning resources.
            </p>
          </div>

          {/* ============================================
              COLUMN 2: Quick Links
              ============================================ */}
          {/* Main navigation links in the footer */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            {/* Edit or add links below - each <Link> should have to="page-url" and link text */}
            <ul className="space-y-2 text-white/80">
              <li><Link to="/about" className="hover:text-[#00BCD4] transition-colors">About</Link></li>
              <li><Link to="/find-camp" className="hover:text-[#00BCD4] transition-colors">Find a Camp</Link></li>
              <li><Link to="/showcase" className="hover:text-[#00BCD4] transition-colors">Showcase</Link></li>
              <li><Link to="/curriculum" className="hover:text-[#00BCD4] transition-colors">Curriculum</Link></li>
              <li><Link to="/sponsor" className="hover:text-[#00BCD4] transition-colors">Sponsor</Link></li>
            </ul>
            {/* TO ADD MORE LINKS: Copy a line like <li><Link to="/about"...></Link></li>
                 and paste it below, then change the URL and text */}
          </div>

          {/* ============================================
              COLUMN 3: Contact Information
              ============================================ */}
          {/* Email, phone, and location details */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white/80">
              {/* EMAIL - Change email address below */}
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00BCD4]" />
                <a href="mailto:haskea@uvawise.edu" className="hover:text-[#00BCD4] transition-colors">
                  haskea@uvawise.edu
                </a>
              </li>
              {/* PHONE - Change phone number below */}
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00BCD4]" />
                <a href="tel:+12763765445" className="hover:text-[#00BCD4] transition-colors">
                  (276) 376-5445
                </a>
              </li>
              {/* LOCATION - Change location text below */}
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00BCD4]" />
                <span>Wise, Virginia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ============================================
            BOTTOM BAR: Copyright & Legal
            ============================================ */}
        {/* Displays copyright year and organization name */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70 text-sm">
          {/* The {new Date().getFullYear()} automatically shows the current year */}
          {/* Edit the organization name if needed */}
          <p>&copy; {new Date().getFullYear()} Southwest Virginia Can Code. All rights reserved.</p>
          {/* TO ADD LEGAL LINKS: Uncomment the lines below and edit as needed
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
}