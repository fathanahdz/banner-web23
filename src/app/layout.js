import Navbar from '@components/navbar/navbar.js'
import '@styles/global.css'


export const metadata = {
  title: 'Fathanah Dz',
  description: 'Tugas Week 12 Pemrograman Web 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      {children}</body>
    </html>
  )
}
