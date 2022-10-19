import React from 'react'
import styles from './TopicItem.module.css'

interface TopicItemProps {
  topic: string
}

function TopicItem({ topic }: TopicItemProps) {
  return <button className={styles.topic}>{topic}</button>
}

export default TopicItem
