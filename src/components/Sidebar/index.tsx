import React from 'react'

import styles from './index.module.css'

const Sidebar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.profileWrapper}>Hello world!</div>
      <div className={styles.chatListWrapper}></div>
    </div>
  )
}

export default Sidebar
