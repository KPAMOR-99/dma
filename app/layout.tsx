import "./globals.css";
import React from "react"
import { montserrat } from '@/app/font'

export default function Layout({children}:{children: React.ReactNode}){
    return(
       <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={`${montserrat.className}`}>{children}</body>
      </html>
    )
}