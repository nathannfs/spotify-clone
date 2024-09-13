import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Footer } from './components/footer'
import { ListAlbum } from './components/list-album'
import { ListPlaylist } from './components/list-playlist'
import { Sidebar } from './components/sidebar'

export function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button type="button" className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button type="button" className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-4">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {Array.from({ length: 6 }).map(index => (
              <ListAlbum key={index as number} title="Wasting Light" />
            ))}
          </div>

          <h2 className="font-semibold text-2xl mt-4">
            Made for Nathan Santos
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            {Array.from({ length: 5 }).map(index => (
              <ListPlaylist
                key={index as number}
                title="Daily Mix 1"
                description="Wallows, COIN, girl in red and more"
              />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
