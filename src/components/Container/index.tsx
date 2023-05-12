import React, { type FC, type ReactNode } from 'react'

import styles from './index.module.css'

interface Props {
  children?: ReactNode
};

const Container: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Container
