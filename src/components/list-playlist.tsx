import album from '/album.jpg'

interface ListPlaylistProps {
  title: string
  description: string
}

export function ListPlaylist({ title, description }: ListPlaylistProps) {
  return (
    <a
      href="#"
      className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
    >
      <img
        className="w-full"
        width={128}
        height={104}
        src={album}
        alt="Capa do álbum"
      />
      <strong className="font-semibold">{title}</strong>
      <span className="text-sm text-zinc-500">{description}</span>
    </a>
  )
}
