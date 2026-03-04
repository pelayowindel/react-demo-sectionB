import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CounterComponent } from './CounterComponent'
import { Classmates } from './Classmates'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CounterComponent /> */}
    <Classmates />
  </StrictMode>
)
