import { FC, useState } from 'react'
import './App.scss'
import { List } from '@components/List/List'
import { IDataItem } from '@customTypes/types'
import { ContextMenu } from '@components/ContextMenu/ContextMenu'

const mockData = [
  { id: 1, title: 'First' },
  { id: 2, title: 'Second' },
  { id: 3, title: 'Third' },
]

export const App: FC = () => {
  const [data] = useState<IDataItem[]>(mockData)
  return (
    <div>
      <ContextMenu>
        <List data={data} />
      </ContextMenu>
    </div>
  )
}
