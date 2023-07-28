import React from 'react'
// import classnames from 'classnames'

import styles from './index.module.css'

import { CHAT_USERS_LIST } from '../../constants/text'

const ChatList = () => {
  return (
    <div className={styles.root}>
        {CHAT_USERS_LIST.map(({ id, name }) =>
                <p key={id} className={styles.listItem}>
                  {name}
                </p>
        )}
    </div>
  )
}

export default ChatList
