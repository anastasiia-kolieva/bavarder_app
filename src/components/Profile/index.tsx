import React from 'react'

import styles from './index.module.css'

// TODO: Fix logo img import from backend
import logoImg from './img/profile_foto.jpg'

const Profile = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoImg}>
          <img src={logoImg} alt='Logo'/>
        </div>
        <div className={styles.logoInfo}></div>
      </div>
      <div className={styles.dots}></div>
    </div>
  )
}

export default Profile
