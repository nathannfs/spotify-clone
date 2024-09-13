import type { ComponentProps } from 'react'

interface NavLinkProps extends ComponentProps<'a'> {}

export function NavLink({ ...props }: NavLinkProps) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
      {...props}
    />
  )
}
