import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StudyCast - 진로·진학·입시 컨설팅',
  description: '옥타그노시스 검사와 AI 분석을 통한 맞춤형 진로·진학·입시 컨설팅 서비스',
  keywords: ['진로상담', '진학상담', '입시상담', '옥타그노시스', '성향검사', 'AI분석'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
} 