import './globals.css'
import { Providers } from './providers'
// eslint-disable-next-line camelcase
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({ subsets: ['latin'], preload: true })

export default function RootLayout ({ children }) {
  return (
    <html lang='es' className={`dark ${workSans.className}`}>
      <head>
        <title>EchoTranslate</title>
        <link rel='icon' href='/favicon.png' />
      </head>
      <body className='relative z-10 h-screen before:absolute before:-z-10 before:inset-0 before:w-full before:h-full before:bg-black/70' style={{ backgroundImage: 'url(/bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
