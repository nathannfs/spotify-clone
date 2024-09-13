import { Play } from 'lucide-react'

import album from '/album.jpg'

interface ListAlbumProps {
  title: string
}

export function ListAlbum({ title }: ListAlbumProps) {
  return (
    <a
      href="#"
      className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
    >
      <img width={80} height={80} src={album} alt="Capa do álbum" />
      <strong>{title}</strong>

      <button
        type="button"
        className="size-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
      >
        <Play />
      </button>
    </a>
  )
}
