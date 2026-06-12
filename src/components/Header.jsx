import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import Logo from './Logo'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const profileRef = useRef(null)
  const navigate = useNavigate()

  const username = localStorage.getItem('user') || 'Fakhrul'

  useEffect(() => {
    const onClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('login')
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black border-b border-white/10'
          : 'bg-black/90 backdrop-blur-md'
      }`}
    >
      <div className="h-14 md:h-16 px-4 md:px-10 flex items-center">

        <div className="flex items-center gap-4 md:gap-6">

          {/* Logo - klik untuk balik ke Home */}
          <Link to="/home">
            <Logo />
          </Link>

          {/* NAVIGATION */}
          <nav className="flex items-center gap-3 md:gap-6 text-[11px] md:text-sm">
            <NavLink sectionId="section-series">Series</NavLink>
            <NavLink sectionId="section-film">Film</NavLink>
            <NavLink to="/daftar-saya">Daftar Saya</NavLink>
          </nav>
        </div>

        <div className="relative ml-auto" ref={profileRef}>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setMenuOpen((s) => !s)
            }}
            className="flex items-center gap-1 md:gap-2"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover ring-1 ring-white/20"
            />

            <span className="hidden md:block text-sm text-white">
              {username}
            </span>

            <svg
              className={`w-3 h-3 text-white/70 transition-transform ${
                menuOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute top-11 md:top-12 right-0 w-44 md:w-48 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-fade-up">

              <MenuItem icon="👤">Profil Saya</MenuItem>
              <MenuItem icon="⭐">Ubah Premium</MenuItem>

              <div className="h-px bg-white/5" />

              <a
                href="#"
                onClick={handleLogout}
                className="px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors flex items-center gap-2"
              >
                <span>🚪</span>
                Keluar
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function NavLink({ children, to, sectionId }) {
  const navigate = useNavigate()
  const location = useLocation()

  // Kalau ada "to" → pakai Link (navigate ke halaman)
  if (to) {
    return (
      <Link
        to={to}
        className="text-white/90 hover:text-white transition-colors relative group whitespace-nowrap"
      >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
      </Link>
    )
  }

  // Kalau ada sectionId → scroll ke section
  function handleClick(e) {
    e.preventDefault()
    if (!sectionId) return

    // Kalau SUDAH di Home → langsung scroll
    if (location.pathname === '/home') {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // Kalau di halaman LAIN → navigate ke Home dulu, lalu scroll
      navigate('/home', { state: { scrollTo: sectionId } })
    }
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      className="text-white/90 hover:text-white transition-colors relative group whitespace-nowrap cursor-pointer"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
    </a>
  )
}

function MenuItem({ icon, children }) {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="px-4 py-3 text-sm text-white/90 hover:bg-white/5 transition-colors flex items-center gap-2"
    >
      <span>{icon}</span>
      {children}
    </a>
  )
}

export default Header