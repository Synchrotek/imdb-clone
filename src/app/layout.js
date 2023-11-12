import './globals.css';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Providers from './Providers';
import SearchBox from '@/components/SearchBox';

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is the IMDB clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>

          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* SearchBox */}
          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  )
}
