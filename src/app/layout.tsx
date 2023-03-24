import SideBar from '../components/SideBar'
import '../styles/globals.css'

export const metadata = {
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideBar />
          
          {/* Provider for notifications */}

          {/* Main app */}
          <div className="bg-slate-700 flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
