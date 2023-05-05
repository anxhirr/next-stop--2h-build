import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-gray-600 min-h-screen'>{children}</body>
    </html>
  )
}
