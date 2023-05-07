import { FC, useMemo, useState } from 'react'
import './App.scss'
import { List } from '@components/List/List'
import { IDataItem, OptionType } from '@customTypes/types'
import { ContextMenu } from '@components/ContextMenu/ContextMenu'

const mockData = [
  { id: '1', name: 'Max', age: 20, tel: '89035259226' },
  { id: '2', name: 'Alex', age: 21, tel: '89035259226' },
  { id: '3', name: 'Elena', age: 24, tel: '89035259226' },
  { id: '4', name: 'Viktor', age: 32, tel: '89035259226' },
  { id: '5', name: 'Nick', age: 19, tel: '89035259226' },
  { id: '6', name: 'Mary', age: 26, tel: '89035259226' },
  { id: '7', name: 'Don', age: 45, tel: '89035259226' },
  { id: '8', name: 'Pit', age: 39, tel: '89035259226' },
]

export const App: FC = () => {
  const [data, setData] = useState<IDataItem[]>(mockData)

  const remove = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id))
  }

  const options: OptionType[] = useMemo(
    () => [
      { id: 1, title: 'Удалить', click: remove },
      { id: 2, title: 'Редактировать', click: () => null },
    ],
    []
  )
  return (
    <div className="content">
      <ContextMenu options={options}>
        <List data={data} />
      </ContextMenu>
    </div>
  )
}
