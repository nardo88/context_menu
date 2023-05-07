import { FC } from 'react'
import './ListItem.scss'
import { IDataItem } from '@customTypes/types'

interface ListItem extends IDataItem {
  className?: string
}

export const ListItem: FC<ListItem> = (props) => {
  const { id, age, name, tel } = props
  return (
    <li data-userId={id} className="list-item">
      <div>{name}</div>
      <div>{age}</div>
      <div>{tel}</div>
    </li>
  )
}
