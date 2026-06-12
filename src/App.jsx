import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import DaftarSaya from './pages/DaftarSaya'
import ProtectedRoute from './components/ProtectedRoute'
import { melanjutkanTonton } from './data/movies'

function App() {

  const [wishlist, setWishlist] = useState(melanjutkanTonton)

  // CREATE - tambah film
  function addToWishlist(film) {
    const sudahAda = wishlist.find((f) => f.title === film.title)
    if (sudahAda) {
      alert(`"${film.title}" sudah ada di daftar!`)
      return
    }
    const filmBaru = { id: Date.now(), ...film, isWatched: false }
    setWishlist([...wishlist, filmBaru])
    alert(`"${film.title}" berhasil ditambahkan!`)
  }

  // UPDATE - toggle isWatched 
  function toggleWatched(id) {
    const baru = wishlist.map((f) => {
      if (f.id === id) {
        return { ...f, isWatched: !f.isWatched }
      }
      return f
    })
    setWishlist(baru)
  }

  // UPDATE - set rating user
function setRating(id, rating) {
  const baru = wishlist.map((f) => {
    if (f.id === id) {
      return { ...f, userRating: rating }
    }
    return f
  })
  setWishlist(baru)
}

  // DELETE - hapus film
  function deleteFromWishlist(id) {
    const baru = wishlist.filter((f) => f.id !== id)
    setWishlist(baru)
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home
              wishlist={wishlist}
              onAdd={addToWishlist}
              onToggleWatched={toggleWatched}
              onSetRating={setRating}
              onDelete={deleteFromWishlist}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path="/daftar-saya"
        element={
          <ProtectedRoute>
            <DaftarSaya
              wishlist={wishlist}
              onAdd={addToWishlist}
              onToggleWatched={toggleWatched}
              onSetRating={setRating}
              onDelete={deleteFromWishlist}
            />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App