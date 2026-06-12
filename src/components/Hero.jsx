function Hero() {
  return (
    <section className="relative h-[45vh] md:h-[85vh] w-full overflow-hidden">
      {/* Backdrop image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}assets/img/pp.jpeg')`,
        }}
      />

      {/* Gradient overlays */}
<div className="absolute inset-0 bg-gradient-to-t from-chill-bg via-chill-bg/20 to-transparent md:via-chill-bg/30" />
<div className="absolute inset-0 bg-gradient-to-r from-chill-bg/60 via-chill-bg/10 to-transparent hidden md:block" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-5 md:pb-20 px-4 md:px-10 max-w-3xl animate-fade-up">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-white/80 mb-1.5 md:mb-3">
          <span className="w-1 h-3 md:h-4 bg-white rounded-full" />
          Series Original
        </span>

        {/* Title */}
        <h1 className="text-xl md:text-6xl font-bold mb-2 md:mb-3 leading-tight">
          Duty After School
        </h1>

        {/* Deskripsi - hanya tampil di desktop */}
        <p className="hidden md:block max-w-xl text-base text-white/80 mb-6 line-clamp-3">
          Saat ancaman misterius dari luar angkasa muncul, siswa-siswa SMA
          direkrut menjadi tentara untuk bertahan hidup. Sebuah kisah tentang
          keberanian, persahabatan, dan kehilangan di tengah kekacauan.
        </p>

        {/* MOBILE: 1 tombol Mulai + icon Selengkapnya + tag genre */}
        <div className="flex md:hidden items-center gap-2">
          {/* Tombol Mulai - utama */}
          <button className="px-5 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-sm font-semibold flex items-center gap-1.5 border border-white/20 hover:bg-white/25 active:scale-95 transition-all">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Mulai
          </button>

          {/* Icon Selengkapnya (info) - circular */}
          <button className="w-9 h-9 shrink-0 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center hover:bg-black/60 active:scale-95 transition-all">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </button>

          {/* Tag pill */}
          <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[11px] border border-white/15">
            Aksi
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[11px] border border-white/15">
            Selengkapnya
          </span>
        </div>

        {/* DESKTOP: 2 tombol full + meta info */}
        <div className="hidden md:flex flex-col">
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/70 mb-4">
            <span className="text-yellow-400">⭐ 7.8</span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/15">Aksi</span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/15">Drama</span>
            <span className="text-white/60">2023</span>
            <span className="px-1.5 py-0.5 text-[10px] border border-white/30 rounded">17+</span>
          </div>

          {/* Buttons desktop */}
          <div className="flex flex-row gap-3">
            <button className="px-7 py-3 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-gray-200 active:scale-95 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Mulai
            </button>
            <button className="px-7 py-3 rounded-full bg-white/10 backdrop-blur text-white font-semibold flex items-center gap-2 border border-white/20 hover:bg-white/20 active:scale-95 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero