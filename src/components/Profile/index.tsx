import React, { useState } from 'react'
import classnames from 'classnames'

import useOnClickOutside from '../../utils/useOnClickOutside'

import styles from './index.module.css'

// TODO: Fix logo img import from backend
import logoImg from './img/profile_foto.jpg'
import arrowStatusDropdown from '../../images/arrow_status_dropdown.svg'
import purpleDots from '../../images/purple_dots.svg'

import { STATUS_MENU_LIST } from '../../constants/text'
// TODO: Fix name import from backend
const PROFILE_NAME = 'Mehmet Revnaki';

const Profile: React.FC = () => {
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const addStatusDropdownRef = React.useRef<HTMLInputElement>(null);

  const handleStatusDropdownClick = () => {
    setIsStatusDropdownOpen(!isStatusDropdownOpen);
  };

  useOnClickOutside(addStatusDropdownRef, () => { setIsStatusDropdownOpen(false); });

  return (
    <div className={styles.root}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoImg}>
          <img src={logoImg} alt='Logo'/>
        </div>
        <div className={styles.logoInfo}>
          <p className={styles.name}>{PROFILE_NAME}</p>
          <div className={styles.statusDropdownWrapper}>
          <div ref={addStatusDropdownRef} className={styles.statusDropdown} onClick={handleStatusDropdownClick}>
            {/* TODO: Fix statusDot color */}
            <div style={{ backgroundColor: '#F3BA4A' }} className={styles.statusDot}/>
            {/* TODO: Fix status */}
            <p className={styles.statusText}>{STATUS_MENU_LIST[0].label}</p>
            <img src={arrowStatusDropdown} alt='Arrow status dropdown'/>
          </div>

          <div className={classnames(styles.statusDropdownList, {
            [styles.openStatusDropdownList]: isStatusDropdownOpen
          })}>
              {STATUS_MENU_LIST.map(({ path, label }) =>
                <p key={path} className={styles.listItem}>
                  {label}
                </p>
              )}
          </div>

          </div>
        </div>
      </div>
      <div className={styles.dots}>
        <img src={purpleDots} alt='Three purple dots'/>
      </div>
    </div>
  )
}

export default Profile
