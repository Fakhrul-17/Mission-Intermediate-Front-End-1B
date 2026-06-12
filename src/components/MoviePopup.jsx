import { useState, useEffect } from 'react'

function MoviePopup({
  data,
  onClose,
  enableCrud,
  onToggleWatched,
  onSetRating,
  onDelete,
  onAddToWatchlist,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close dropdown saat klik di luar
  useEffect(() => {
    if (!isMenuOpen) return
    function handleClickOutside() {
      setIsMenuOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  if (!data) return null

  const {
    url,
    title,
    isSeries,
    episode,
    duration = '2j 33m',
    progress = 60,
    rating = '4.5',
    genres = ['Misteri', 'Kriminal', 'Fantasi'],
    isWatched,
    userRating,
  } = data

  // Tentukan apakah ada action menu yang tersedia
  const hasMenu = enableCrud || onAddToWatchlist

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 md:pt-28 px-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[340px] md:max-w-[420px] rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl shadow-black/80 ring-1 ring-white/10 animate-card-expand-popup mb-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Menu (⋮) - hanya muncul kalau ada action */}
        {hasMenu && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
            className="absolute top-3 right-14 z-30 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white text-lg hover:bg-black/90 active:scale-95 transition-all ring-1 ring-white/10"
            title="Menu"
          >
            ⋮
          </button>
        )}

        {/* Dropdown menu */}
        {isMenuOpen && hasMenu && (
          <div
            className="absolute top-14 right-3 z-40 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-1 min-w-[200px] animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {enableCrud ? (
              <>
                <button
                  onClick={() => {
                    onToggleWatched(data.id)
                    setIsMenuOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2.5"
                >
                  <span className="text-base">{isWatched ? '🔄' : '✓'}</span>
                  <span>{isWatched ? 'Belum Ditonton' : 'Tandai Sudah Ditonton'}</span>
                </button>

                {onSetRating && (
                  <button
                    onClick={() => {
                      onSetRating(data)
                      setIsMenuOpen(false)
                      onClose()
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2.5"
                  >
                    <span className="text-base">⭐</span>
                    <span>{userRating > 0 ? 'Ubah Rating' : 'Beri Rating'}</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    onDelete(data)
                    setIsMenuOpen(false)
                    onClose()
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-colors flex items-center gap-2.5"
                >
                  <span className="text-base">🗑️</span>
                  <span>Hapus dari Daftar</span>
                </button>
              </>
            ) : (
              onAddToWatchlist && (
                <button
                  onClick={() => {
                    onAddToWatchlist(data)
                    setIsMenuOpen(false)
                    onClose()
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2.5"
                >
                  <span className="text-base">➕</span>
                  <span>Tambah ke Daftar</span>
                </button>
              )
            )}
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/90 transition-colors ring-1 ring-white/10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* POSTER besar */}
        <div className="relative">
          <div
            className="w-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${url}')`,
              aspectRatio: '4/3',
            }}
          />

          {/* Badge Sudah Ditonton */}
          {isWatched && (
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-500/90 backdrop-blur-sm text-white text-xs font-semibold shadow-md">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Ditonton</span>
            </div>
          )}

          {/* Gradient fade bawah */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-900 to-transparent" />
        </div>

        {/* INFO */}
        <div className="p-4 md:p-5 flex flex-col gap-3 md:gap-4 -mt-2 relative">

          {/* Tombol baris */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <button className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 active:scale-95 transition-all shadow-lg">
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              <button className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-transparent border-[1.5px] border-white/80 text-white flex items-center justify-center hover:border-white hover:bg-white/10 active:scale-95 transition-all">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>

            {/* Mute */}
            <button className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-transparent border-[1.5px] border-white/50 text-white flex items-center justify-center hover:border-white/80 hover:bg-white/10 active:scale-95 transition-all">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l4 4m0-4l-4 4" />
              </svg>
            </button>
          </div>

          {/* Judul + Rating row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              {title && (
                <h2 className="text-white text-lg md:text-xl font-bold leading-tight">
                  {title}
                </h2>
              )}
              {isSeries && episode && (
                <p className="text-white/60 text-xs md:text-sm font-medium italic mt-1">
                  "{episode}"
                </p>
              )}
            </div>

            {/* Rating row: IMDb + user rating */}
            <div className="flex flex-col items-end gap-1 shrink-0">
              <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 text-white text-xs md:text-sm font-semibold">
                <span className="text-yellow-400">⭐</span>
                <span>{rating}</span>
              </div>

              {userRating > 0 && (
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-yellow-500/90 text-black text-xs font-bold">
                  <span>★</span>
                  <span>{userRating}</span>
                </div>
              )}
            </div>
          </div>

          {/* Progress bar + durasi */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[11px] md:text-xs text-white/70 font-medium whitespace-nowrap tabular-nums">
              {duration}
            </span>
          </div>

          {/* Genre tags */}
          <div className="flex flex-wrap items-center gap-1.5">
            {genres.map((genre) => (
              <span
                key={genre}
                className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[11px] md:text-xs font-medium"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviePopup