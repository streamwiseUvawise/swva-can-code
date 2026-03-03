import { Outlet, Link, useLocation } from 'react-router';
import { FileText, Users, GraduationCap, DollarSign, Settings, GitBranch, BookOpen } from 'lucide-react';
import logoCanCode from '../assets/canCodeLogo.png';

export function Root() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Overview', icon: FileText },
    { path: '/parents', label: 'Parents', icon: Users },
    { path: '/students', label: 'Students', icon: GraduationCap },
    { path: '/educators', label: 'Educators', icon: BookOpen },
    { path: '/sponsors', label: 'Sponsors', icon: DollarSign },
    { path: '/organizers', label: 'Organizers', icon: Settings },
    { path: '/flows', label: 'Key Flows', icon: GitBranch },
    { path: '/curriculum', label: 'Curriculum Page', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      {/* Header with wave pattern */}
      <header className="bg-white border-b border-gray-200 relative overflow-hidden">
        {/* Binary code pattern background */}
        <div className="absolute inset-0 opacity-5 text-[#00BCD4] text-xs leading-tight font-mono pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i}>
              {Array.from({ length: 200 })
                .map(() => Math.random() > 0.5 ? '1' : '0')
                .join(' ')}
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="flex items-center gap-4">
            <img src={logoCanCode} alt="SWVA Can Code Logo" className="h-20 w-20" />
            <div>
              <h1 className="text-[#1A237E]">Southwest Virginia Can Code</h1>
              <p className="text-[#1A237E]/70 mt-1">UX Artifacts: User Stories, Flows & Content Structure</p>
            </div>
          </div>
        </div>
        
        {/* Wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-[#1A237E] via-[#E53935] to-[#00BCD4]"></div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-140px)] p-6">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-[#00BCD4] text-white'
                        : 'text-[#1A237E] hover:bg-[#F5F3EE]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}