import React from 'react'
import classnames from 'classnames'

import styles from './index.module.css'

import { CHAT_USERS_LIST } from '../../constants/text'

const ChatList: React.FC = () => {
  return (
    <div className={styles.root}>
        {CHAT_USERS_LIST.map(({ id, name, surname, avatar, status, frameColor }) =>
          <div className={styles.listItemWrapper} key={id}>
            <div style={{ border: `2px solid ${frameColor}` }} className={styles.avatarWrapper}>
              <img src={avatar} alt='Avatar'/>
              <span className={classnames(styles.status, styles[status])}/>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.name}>
                {name} {surname}
              </p>
              <p className={styles.lastMessage}>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</p>
            </div>
            <div className={styles.dateWrapper}>
            </div>
          </div>
        )}
    </div>
  )
}

export default ChatList
