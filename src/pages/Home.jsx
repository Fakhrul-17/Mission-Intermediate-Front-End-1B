import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieSection from '../components/MovieSection'
import Footer from '../components/Footer'
import ConfirmDeleteModal from '../components/ConfirmDeleteModal'
import RatingModal from '../components/RatingModal'
import {
  topRating,
  filmTrending,
  rilisBaru,
} from '../data/movies'

function Home({ wishlist, onAdd, onToggleWatched, onSetRating, onDelete }) {

  const [hapusData, setHapusData] = useState(null)
  const [ratingFilm, setRatingFilm] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [location])

  function handleHapus() {
    onDelete(hapusData.id)
    setHapusData(null)
  }

  return (
    <div className="min-h-screen bg-chill-bg">
      <Header />
      <Hero />

      <main className="md:-mt-24 relative z-10">

        <MovieSection
          id="section-daftar"
          title="Melanjutkan Tonton Film"
          movies={wishlist}
          enableCrud={true}
          onToggleWatched={onToggleWatched}
          onSetRating={(film) => setRatingFilm(film)}
          onDeleteFilm={setHapusData}
        />

        <MovieSection
          id="section-series"
          title="Top Rating Film dan Series Hari Ini"
          movies={topRating}
          onAddToWatchlist={onAdd}
        />

        <MovieSection
          id="section-film"
          title="Film Trending"
          movies={filmTrending}
          onAddToWatchlist={onAdd}
        />

        <MovieSection
          title="Rilis Baru"
          movies={rilisBaru}
          onAddToWatchlist={onAdd}
        />
      </main>

      <Footer />

      {hapusData && (
        <ConfirmDeleteModal
          film={hapusData}
          onConfirm={handleHapus}
          onCancel={() => setHapusData(null)}
        />
      )}

      {ratingFilm && (
        <RatingModal
          film={ratingFilm}
          onRate={(rating) => onSetRating(ratingFilm.id, rating)}
          onClose={() => setRatingFilm(null)}
        />
      )}
    </div>
  )
}

export default Home