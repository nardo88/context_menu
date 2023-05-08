import { FC, useMemo, useState } from 'react'
import cls from './Grid.module.scss'
import { ContextMenu } from '@components/ContextMenu/ContextMenu'
import { IDataItem, OptionType } from '@customTypes/types'

interface GridProps {
  className?: string
}

const mockData = [
  { id: '1', name: 'Max', age: 20, tel: '89035259226' },
  { id: '2', name: 'Alex', age: 21, tel: '89035259226' },
  { id: '3', name: 'Elena', age: 24, tel: '89035259226' },
  { id: '4', name: 'Viktor', age: 32, tel: '89035259226' },
  { id: '5', name: 'Nick', age: 19, tel: '89035259226' },
  { id: '6', name: 'Mary', age: 26, tel: '89035259226' },
  { id: '7', name: 'Don', age: 45, tel: '89035259226' },
  { id: '8', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '9', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '10', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '11', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '12', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '13', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '14', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '15', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '16', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '17', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '18', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '19', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '20', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '21', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '22', name: 'Pit', age: 39, tel: '89035259226' },
  { id: '23', name: 'Pit', age: 39, tel: '89035259226' },
]

export const Grid: FC<GridProps> = () => {
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
    <div>
      <ContextMenu
        options={options}
        selector={'.list-item'}
        dataAtribute={'data-id'}>
        <div className={cls.grid}>
          {data.map((item) => (
            <div key={item.id} className="list-item" data-id={item.id}>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </ContextMenu>
    </div>
  )
}
