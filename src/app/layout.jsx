'use client'
import './globals.css'
import { useState, useEffect } from 'react'
export default function DashboardLayout({ children }) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
    return (
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    )
  }