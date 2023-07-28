import React from 'react'
import Profile from './../Profile/index'
import ChatList from './../ChatList/index'

import styles from './index.module.css'

const Sidebar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.profileWrapper}>
        <Profile/>
      </div>
      <div className={styles.chatListWrapper}>
        <ChatList/>
      </div>
    </div>
  )
}

export default Sidebar
