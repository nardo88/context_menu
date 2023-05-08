import { FC } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Table } from '@components/Table/Table'
import { Navbar } from '@components/Navbar/Navbar'
import { Grid } from '@components/Grid/Grid'

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Table />} />
          <Route path="/grid" element={<Grid />} />
        </Route>
      </Routes>
    </>
  )
}
