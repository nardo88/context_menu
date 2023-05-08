import { FC, MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'
import { OptionType } from '@customTypes/types'
import cls from './ContextMenu.module.scss'
import { classNames } from 'src/helpers/classNames/classNames'

interface ContextMenu {
  children: ReactNode
  options: OptionType[]
}

export const ContextMenu: FC<ContextMenu> = (props) => {
  const { children, options } = props
  const ref = useRef<HTMLDivElement>(null)
  const menu = useRef<HTMLDivElement>(null)
  const [clicked, setClicked] = useState(false)
  const [data, setData] = useState<null | string>(null)
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  })

  const handleClick = () => {
    setClicked(false)
  }

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  const menuContextHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setClicked(false)
    const target = e.target as HTMLDivElement

    setData(target.closest('.list-item').getAttribute('data-userid'))
    const { left, top } = ref.current.getBoundingClientRect()
    const { width, height } = menu.current.getBoundingClientRect()
    setPoints({
      x:
        width + e.pageX > window.innerWidth
          ? e.pageX - left - width
          : e.pageX - left,
      y:
        window.innerHeight < height + e.pageY
          ? e.pageY - top - window.scrollY - height
          : e.pageY - top - window.scrollY,
    })
    setClicked(true)
  }

  return (
    <div ref={ref} className={cls.wrapper} onContextMenu={menuContextHandler}>
      {children}
      <div
        ref={menu}
        className={classNames(cls.menu, { [cls.isOpen]: clicked })}
        style={{ top: points.y + 'px', left: points.x + 'px' }}>
        <ul>
          {options.map((option) => (
            <li key={option.id} onClick={() => option.click(data)}>
              {option.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
