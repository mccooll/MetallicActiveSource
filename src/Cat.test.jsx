import { render, screen } from '@testing-library/react'
import Cat from './Cat.jsx'
import { BrowserRouter } from 'react-router-dom'
import { useParams } from "react-router-dom"

describe('Cat', async () => {
  it('should render the input', () => {
    const cats = [{id: "1", name: 'David', breed: 'Human'}, {id: "2", name: 'Bob', breed: 'Human'}]
    vi.mock('react-router-dom', async (importOriginal) => {
      const mod = await importOriginal()
      return {
        ...mod,
        useParams: () => ({ catId: '2' })
      }
    })
    render(
      <BrowserRouter>
        <Cat
          cats={cats}
        />
      </BrowserRouter>
    )
    expect(screen.getByText('Bob')).toBeInTheDocument()
  })
})
