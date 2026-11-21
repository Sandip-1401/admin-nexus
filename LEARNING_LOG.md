# Nexus Admin – Learning Log

## Concept 1: Route Groups
- Folder in (parentheses) is hidden from the URL
- (auth)/login/page.tsx -> /login, /auth/login gives 404
- Each group can have its own layout.tsx
- Mistake: empty page.tsx gives "default export is not a React Component"

## Concept 2: Nested Layouts
- layout.tsx wraps pages in its folder; `children` = current page
- Layouts persist on navigation, only page content swaps
- Order: RootLayout > DashboardLayout > page
- Keep layouts thin: Sidebar is a separate component, menu data in config

## Concept 3: Navigation
- <Link> navigates without full reload
- usePathname() needs "use client"
- Active link = pathname === href || startsWith(href + "/")
- Breadcrumbs: pathname.split("/").filter(Boolean) -> segments
- href for each crumb = "/" + segments.slice(0, index + 1).join("/")
- redirect() from next/navigation: used in analytics/page.tsx and app/page.tsx
- Server layout can contain a Client Component (Sidebar, Breadcrumbs)
- Each section can own its layout: analytics/layout.tsx (tabs), settings/layout.tsx (side menu)
- Same pattern, different shell: layout = shape, page = content
- redirect() used for section roots (/analytics, /settings) so they never 404

## Dynamic routes (preview of Project 2)
- [id] folder = dynamic segment, /users/1 and /users/2 use same page.tsx
- params is a Promise in Next.js 16: const { id } = await params (needs async)
- params values are always strings
- notFound() shows 404 for unknown ids
- Mistake to avoid: forgetting await params

## Special files
- not-found.tsx: shown when notFound() is called; renders inside the layout
- loading.tsx: shown while an async page loads; layout stays visible
- Pattern: keep label logic in lib/breadcrumbs.ts, component stays dumb

## Route Groups in action
- (auth)/layout.tsx = centered card, (dashboard)/layout.tsx = sidebar + topbar
- Link from dashboard to /login switches the whole layout shell
- Server Component by default; add "use client" only when hooks/state are needed (Topbar stays server)
- Layout shape: Sidebar | (Topbar over main)  -> flex row, then flex-col inside