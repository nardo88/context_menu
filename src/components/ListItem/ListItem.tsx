import { FC } from 'react'
import './ListItem.scss'

interface ListItem {
  id: number
  title: string
}

export const ListItem: FC<ListItem> = ({ id, title }) => {
  return (
    <li data-id={id} className="list-item">
      {title}
    </li>
  )
}
