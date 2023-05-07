import { FC, MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'
import './ContextMenu.scss'
import { OptionType } from '@customTypes/types'

interface ContextMenu {
  children: ReactNode
  options: OptionType[]
}

export const ContextMenu: FC<ContextMenu> = (props) => {
  const { children, options } = props
  const ref = useRef<HTMLDivElement>(null)
  const [clicked, setClicked] = useState(false)
  const [data, setData] = useState<null | string>(null)
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleClick = () => setClicked(false)
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  const menuContextHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const target = e.target as HTMLDivElement

    setData(target.closest('.list-item').getAttribute('data-userId'))
    const { left, top } = ref.current.getBoundingClientRect()
    setPoints({
      x: e.pageX - left,
      y: e.pageY - top - window.scrollY,
    })
    setClicked(true)
  }

  return (
    <div
      ref={ref}
      className="context-menu-wrapper"
      onContextMenu={menuContextHandler}>
      {children}
      {clicked && (
        <div
          className="context-menu"
          style={{ top: points.y + 'px', left: points.x + 'px' }}>
          <ul>
            {options.map((option) => (
              <li key={option.id} onClick={() => option.click(data)}>
                {option.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
