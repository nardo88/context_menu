import { FC } from 'react'
import './List.scss'
import { IDataItem } from '@customTypes/types'
import { ListItem } from '@components/ListItem/ListItem'

interface ListProps {
  data: IDataItem[]
}

export const List: FC<ListProps> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </ul>
  )
}
