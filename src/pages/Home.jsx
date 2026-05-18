import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieSection from '../components/MovieSection'
import Footer from '../components/Footer'
import {
  melanjutkanTonton,
  topRating,
  filmTrending,
  rilisBaru,
} from '../data/movies'

function Home() {
  return (
    <div className="min-h-screen bg-chill-bg">
      <Header />
      <Hero />

      <main className="md:-mt-24 relative z-10">
        <MovieSection title="Melanjutkan Tonton Film" movies={melanjutkanTonton} />
        <MovieSection title="Top Rating Film dan Series Hari Ini" movies={topRating} />
        <MovieSection title="Film Trending" movies={filmTrending} />
        <MovieSection title="Rilis Baru" movies={rilisBaru} />
      </main>

      <Footer />
    </div>
  )
}

export default Home