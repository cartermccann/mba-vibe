export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Athletes & Parents", href: "/athletes-parents" },
  { label: "Contact", href: "/contact" },
] as const

export function isActiveNav(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}
