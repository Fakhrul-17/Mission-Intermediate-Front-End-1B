import { useState, useRef } from 'react'
import MoviePopup from './MoviePopup'

function MovieSection({ title, movies }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const [popupData, setPopupData] = useState(null)
  const scrollRef = useRef(null)

  const isContinueWatching = title === 'Melanjutkan Tonton Film'

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const scrollAmount = scrollRef.current.clientWidth * 0.8
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <section className="py-5 md:py-10 px-4 md:px-10 group/section relative">
        <h2 className="text-base md:text-xl font-semibold mb-4 md:mb-5 text-white tracking-tight">
          {title}
        </h2>

        <div className="relative">
          {/* Panah KIRI */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-1 md:left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-black active:scale-95 transition-all opacity-0 group-hover/section:opacity-100 shadow-xl ring-1 ring-white/10"
            aria-label="Scroll kiri"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Panah KANAN */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-1 md:right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-black active:scale-95 transition-all opacity-0 group-hover/section:opacity-100 shadow-xl ring-1 ring-white/10"
            aria-label="Scroll kanan"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-3 md:gap-4 overflow-x-auto pb-3 no-scrollbar items-start scroll-smooth"
            style={{
              paddingTop: '50px',
              paddingBottom: '50px',
              marginTop: '-50px',
              marginBottom: '-50px',
              overflowY: 'visible',
            }}
          >
            {movies.map((item, i) => {
              const data = typeof item === 'string' ? { url: item } : item
              const isActive = activeIndex === i

              return (
                <MovieCardWrapper
                  key={i}
                  data={data}
                  isActive={isActive}
                  isContinueWatching={isContinueWatching}
                  onClick={
                    isContinueWatching
                      ? () => setActiveIndex(i)        // Melanjutkan Tonton → expanded card
                      : () => setPopupData(data)        // Section lain → langsung popup
                  }
                  onClose={() => setActiveIndex(null)}
                  onOpenPopup={() => setPopupData(data)}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* POPUP detail film */}
      {popupData && (
        <MoviePopup
          data={popupData}
          onClose={() => setPopupData(null)}
        />
      )}
    </>
  )
}

/* Wrapper */
function MovieCardWrapper({ data, isActive, isContinueWatching, onClick, onClose, onOpenPopup }) {
  return (
    <div className="relative shrink-0">
      <div
        className={`group relative cursor-pointer transition-opacity duration-200 ${
          isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        onClick={!isActive ? onClick : undefined}
      >
        {isContinueWatching ? (
          <ContinueWatchingCard data={data} />
        ) : (
          <PortraitCard url={data.url} />
        )}
      </div>

      {isActive && (
        <ExpandedCard
          data={data}
          onClose={onClose}
          onOpenPopup={onOpenPopup}
        />
      )}
    </div>
  )
}

/* Card portrait untuk section lain - tombol play di TENGAH */
function PortraitCard({ url }) {
  return (
    <>
      <div
        className="w-[140px] h-[210px] md:w-[170px] md:h-[255px] rounded-lg bg-cover bg-center transition-all duration-300 group-hover:scale-[1.04] group-hover:shadow-2xl group-hover:shadow-black/90 ring-1 ring-white/[0.06]"
        style={{ backgroundImage: `url('${url}')` }}
      />

      {/* Overlay dengan play button di TENGAH */}
      <div className="absolute inset-0 rounded-lg bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </>
  )
}

/* Card LANDSCAPE Melanjutkan Tonton - juga update tombol play ke tengah */
function ContinueWatchingCard({ data }) {
  const { url, title = 'Untitled', rating = '4.5' } = data

  return (
    <div className="relative w-[210px] h-[125px] md:w-[270px] md:h-[160px] rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-[1.04] group-hover:shadow-2xl group-hover:shadow-black/90 ring-1 ring-white/[0.06]">

      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('${url}')` }}
      />

      {/* Gradient overlay untuk title & rating */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

      {/* Title kiri bawah */}
      <div className="absolute bottom-2.5 left-3 right-14 md:bottom-3 md:left-3.5 md:right-16">
        <h3 className="text-white text-[13px] md:text-sm font-semibold truncate drop-shadow-lg">
          {title}
        </h3>
      </div>

      {/* Rating kanan bawah */}
      <div className="absolute bottom-2.5 right-3 md:bottom-3 md:right-3.5 flex items-center gap-1 text-[11px] md:text-xs text-white font-semibold drop-shadow-lg">
        <span className="text-yellow-400">⭐</span>
        <span>{rating}</span>
      </div>

      {/* Play overlay hover - di TENGAH */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

/* Card EXPANDED inline - tidak berubah */
function ExpandedCard({ data, onClose, onOpenPopup }) {
  const {
    url,
    isSeries,
    episode,
    duration = '2j 33m',
    progress = 60,
    genres = ['Misteri', 'Kriminal', 'Fantasi'],
  } = data

  return (
    <div
      className="absolute top-1/2 left-1/2 z-[60] w-[230px] h-[215px] md:w-[280px] md:h-[260px] rounded-xl overflow-hidden bg-zinc-900 shadow-2xl shadow-black/80 flex flex-col animate-card-expand ring-1 ring-white/10"
    >
      <div className="relative shrink-0" style={{ height: '52%' }}>
        <div
          className="w-full h-full bg-cover bg-top"
          style={{ backgroundImage: `url('${url}')` }}
        />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-zinc-900 to-transparent" />
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 z-30 w-7 h-7 md:w-8 md:h-8 rounded-full bg-black/85 backdrop-blur-md flex items-center justify-center text-white hover:bg-black active:scale-95 transition-all ring-1 ring-white/20 shadow-lg"
      >
        <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* INFO BOX */}
      <div className="flex-1 px-3 pb-3 pt-1 md:px-3.5 md:pb-3.5 md:pt-1.5 flex flex-col justify-between min-h-0">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 active:scale-95 transition-all shadow-md">
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            <button className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-transparent border-[1.5px] border-white/80 text-white flex items-center justify-center hover:border-white hover:bg-white/10 active:scale-95 transition-all">
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>

          <button
            onClick={onOpenPopup}
            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-transparent border-[1.5px] border-white/50 text-white flex items-center justify-center hover:border-white/80 hover:bg-white/10 active:scale-95 transition-all"
          >
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isSeries && episode && (
          <h3 className="text-white text-xs md:text-sm font-semibold italic text-center truncate px-1">
            "{episode}"
          </h3>
        )}

        <div className="flex items-center gap-2.5">
          <div className="flex-1 h-1 rounded-full bg-white/15 overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[10px] md:text-[11px] text-white/70 font-medium whitespace-nowrap tabular-nums">
            {duration}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 text-[10px] md:text-[11px] text-white/60 font-medium">
          {genres.map((genre, i) => (
            <span key={genre} className="flex items-center gap-1.5">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-white/30" />}
              <span>{genre}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieSection