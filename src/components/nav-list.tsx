import type { ComponentProps } from 'react'

interface NavListProps extends ComponentProps<'a'> {}

export function NavList({ ...props }: NavListProps) {
  return (
    <a
      href=""
      className="text-sm text-zinc-400 hover:text-zinc-100"
      {...props}
    />
  )
}
