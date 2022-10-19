import React from 'react'
import TopicItem from './TopicItem'
import styles from './Topics.module.css'

const topics = [
  'Turtles are faster than humans, tell me otherwise',
  'I just published an open source project. Wanna see?',
  'Chess match? ♟️',
  'Just having lunch. Join me and crack me up',
]

function Topics() {
  return (
    <div className={styles.topics}>
      <ul>
        {topics.map((topic, index) => (
          <TopicItem key={index} topic={topic} />
        ))}
      </ul>
    </div>
  )
}

export default Topics
