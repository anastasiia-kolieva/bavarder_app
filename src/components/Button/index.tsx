import React, { type FC, type ReactNode, type SyntheticEvent } from 'react'
import classnames from 'classnames'

interface Props {
  children?: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  active?: boolean
  // attrs?: Object
};

const Button: FC<Props> = ({
  children = 'Default button',
  onClick = (e: SyntheticEvent) => {},
  className = '',
  disabled = false,
  active = false,
  // attrs = { href: ''}
  ...attrs
}) => {
  const onClickAction = (e: SyntheticEvent) => {
    if (disabled) {
      e.preventDefault()
    } else {
      onClick(e)
    }
  }

  const classes = classnames(
    'btn',
    className,
    { active }
  )

  // TODO: Check is correct using attrs.href in case 'a'
  const Tag = Object.prototype.hasOwnProperty.call(attrs, 'href') ? 'a' : 'button'

  return (
        <Tag
            {...attrs}
            className={classes}
            disabled={disabled}
            onClick={onClickAction}
        >
            {children}
        </Tag>
  )
}

export default Button
