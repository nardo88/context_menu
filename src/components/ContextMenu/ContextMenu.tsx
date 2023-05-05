import { FC, MouseEvent, ReactNode } from 'react'
import './ContextMenu.scss'

interface ContextMenu {
  children: ReactNode
}

export const ContextMenu: FC<ContextMenu> = (props) => {
  const { children } = props

  const menuContextHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    console.log('click')
  }

  return <div onContextMenu={menuContextHandler}>{children}</div>
}
