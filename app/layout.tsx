import type { ReactNode } from 'react'

export const metadata = {
  title: 'Viz Company OS',
  description: 'Sistema de gestao Viz Company',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
