import { Route, Routes } from 'react-router-dom'
import { DateForm } from './pages/DateForm'
import { Food } from './pages/Food'
import { Home } from './pages/Home'
import { Letter } from './pages/Letter'
import { Paid, Paywall } from './pages/Paywall'
import { Yay } from './pages/Yay'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yay" element={<Yay />} />
      <Route path="/date" element={<DateForm />} />
      <Route path="/food" element={<Food />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="/paywall" element={<Paywall />} />
      <Route path="/paid" element={<Paid />} />
    </Routes>
  )
}
