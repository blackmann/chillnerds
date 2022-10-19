import React from 'react'
import config from '../config'
import styles from './HeaderFooter.module.css'

function MainHeader() {
  return (
    <header className={styles.header}>
      <div>{config.appName}</div>
      <div></div>
    </header>
  )
}

export default MainHeader
