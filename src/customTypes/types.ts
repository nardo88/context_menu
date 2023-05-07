export interface IDataItem {
  id: string
  name: string
  age: number
  tel: string
}

export interface OptionType {
  id: number
  title: string
  click: (id: string) => void
}
