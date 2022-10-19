import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import React from 'react'
import Topics from '../components/Topics'
import styles from './Main.module.css'

function Main() {
  const mainRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    // OverlayScrollbars(mainRef.current!)
  }, [])

  return (
    <>
      <MainHeader />
      <main className={styles.main} ref={mainRef}>
        <Topics />
      </main>
      <MainFooter />
    </>
  )
}

export default Main
