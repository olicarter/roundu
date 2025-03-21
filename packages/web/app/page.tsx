'use client'

import { db } from '@/db'
import styles from './page.module.css'
import SignInPage from '@/components/sign-in-page/sign-in-page'
import { useEffect, useRef } from 'react'

export default function Home() {
  const { user } = db.useAuth()

  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (user && mapRef.current && window.mapkit) {
      // Initialize MapKit
      window.mapkit.init({
        authorizationCallback: done => {
          if (!process.env.NEXT_PUBLIC_MAPKIT_TOKEN) {
            throw new Error('MapKit token is not set')
          }
          done(process.env.NEXT_PUBLIC_MAPKIT_TOKEN)
        },
      })

      // Create a new map instance
      const map = new window.mapkit.Map(mapRef.current, {
        showsZoomControl: false,
        showsCompass: 'false',
        showsScale: 'false',
      })

      // Center the map on the user's location
      navigator.geolocation.getCurrentPosition(position => {
        map.center = new window.mapkit.Coordinate(
          position.coords.latitude,
          position.coords.longitude,
        )
        map.cameraDistance = 1000
      })
    }
  }, [user])

  if (!user) return <SignInPage />

  return (
    <main className={styles.main}>
      <header className={styles.header}></header>
      <div className={styles.list}>
        <p>hello {user.email}</p>
      </div>
      <div className={styles.map} ref={mapRef} />
    </main>
  )
}
