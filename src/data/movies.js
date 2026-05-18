// Data poster film untuk tiap section di home
// Sumber gambar: TMDB - poster sudah diverifikasi sesuai judul
const img = (path) => `https://image.tmdb.org/t/p/w500${path}`

// Melanjutkan Tonton — poster + judul sudah match
export const melanjutkanTonton = [
  {
    url: img('https://image.tmdb.org/t/p/original/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg'), // All of Us Are Dead - Netflix
    title: 'All of Us Are Dead',
    rating: '4.5',
    isSeries: true,
    episode: 'Episode 1',
    duration: '1j 02m',
    progress: 60,
    genres: ['Horror', 'Drama', 'Thriller'],
  },
  {
    url: img('/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg'), // Don't Look Up
    title: "Don't Look Up",
    rating: '4.5',
    isSeries: false,
    duration: '2j 18m',
    progress: 45,
    genres: ['Komedi', 'Drama', 'Sci-Fi'],
  },
  {
    url: img('/74xTEgt7R36Fpooo50r9T25onhq.jpg'), // The Batman
    title: 'The Batman',
    rating: '4.2',
    isSeries: false,
    duration: '2j 56m',
    progress: 30,
    genres: ['Aksi', 'Kriminal', 'Misteri'],
  },
  {
    url: img('/130H1gap9lFfiTF9iDrqNIkFvC9.jpg'), // A Man Called Otto
    title: 'A Man Called Otto',
    rating: '4.4',
    isSeries: false,
    duration: '2j 06m',
    progress: 80,
    genres: ['Drama', 'Komedi', 'Keluarga'],
  },
  {
    url: img('/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg'), // Squid Game
    title: 'Squid Game',
    rating: '4.7',
    isSeries: true,
    episode: 'Episode 3',
    duration: '0j 55m',
    progress: 25,
    genres: ['Thriller', 'Drama', 'Misteri'],
  },
  {
    url: img('/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg'), // John Wick: Chapter 4
    title: 'John Wick: Chapter 4',
    rating: '4.6',
    isSeries: false,
    duration: '2j 49m',
    progress: 70,
    genres: ['Aksi', 'Thriller', 'Kriminal'],
  },
  {
    url: img('/49WJfeN0moxb9IPfGn8AIqMGskD.jpg'), // Stranger Things
    title: 'Stranger Things',
    rating: '4.8',
    isSeries: true,
    episode: 'Episode 8',
    duration: '1j 18m',
    progress: 50,
    genres: ['Misteri', 'Sci-Fi', 'Horror'],
  },
  {
    url: img('/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg'), // Sonic the Hedgehog 2
    title: 'Sonic the Hedgehog 2',
    rating: '4.3',
    isSeries: false,
    duration: '2j 02m',
    progress: 40,
    genres: ['Animasi', 'Petualangan', 'Komedi'],
  },
  {
    url: img('/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'), // Avengers: Infinity War
    title: 'Avengers: Infinity War',
    rating: '4.7',
    isSeries: false,
    duration: '2j 29m',
    progress: 85,
    genres: ['Aksi', 'Petualangan', 'Sci-Fi'],
  },
]

// Top Rating Film dan Series
export const topRating = [
  img('https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg'), // Dune Part Two
  img('https://image.tmdb.org/t/p/original/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg'), // Meg 2: The Trench
  img('/74xTEgt7R36Fpooo50r9T25onhq.jpg'), // The Batman
  img('/130H1gap9lFfiTF9iDrqNIkFvC9.jpg'), // A Man Called Otto
  img('/49WJfeN0moxb9IPfGn8AIqMGskD.jpg'), // Stranger Things
  img('/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg'), // John Wick: Chapter 4
  img('/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg'), // Sonic 2
  img('/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'), // Avengers: Infinity War
]

// Film Trending
export const filmTrending = [
  img('https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg'), // The Dark Knight
  img('https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg'), // Avengers: Endgame
  img('https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg'), // The Super Mario Bros Movie
  img('https://image.tmdb.org/t/p/original/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg'), // Game of Thrones
  img('https://image.tmdb.org/t/p/original/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg'), // All of Us Are Dead
  img('https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg'), // Spiderman: Across the spider-verse
  img('https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpgg'), // Wednesday
  img('https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg'), // The witcher
]

// Rilis Baru
export const rilisBaru = [
  img('https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg'), // money heist
  img('https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg'), // Breaking Bead
  img('https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'), // The Last Of Us
  img('https://image.tmdb.org/t/p/original/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg'), // Demon Slayer: Mugen Train
  img('https://image.tmdb.org/t/p/original/20mOwAAPwZ1vLQkw0fvuQHiG7bO.jpg'), // Alice in Borderland
  img('https://image.tmdb.org/t/p/original/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg'), // Me Before You
  img('https://image.tmdb.org/t/p/original/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg'), //A Star Is Born
  img('https://image.tmdb.org/t/p/original/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg'), //The Notebook
]