import { HomeIcon, Library, Search } from 'lucide-react'
import { NavLink } from './nav-link'
import { NavList } from './nav-list'

export function Sidebar() {
  return (
    <aside className="w-60 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="size-3 bg-red-500 rounded-full" />
        <div className="size-3 bg-yellow-500 rounded-full" />
        <div className="size-3 bg-green-500 rounded-full" />
      </div>

      <nav className="space-y-5 mt-10">
        <NavLink>
          <HomeIcon />
          Home
        </NavLink>

        <NavLink>
          <Search />
          Search
        </NavLink>

        <NavLink>
          <Library />
          Your Library
        </NavLink>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <NavList>Hot Hits Brasil</NavList>
        <NavList>Aniver Funk</NavList>
        <NavList>My Playlist #13</NavList>
        <NavList>Top Brasil</NavList>
      </nav>
    </aside>
  )
}
