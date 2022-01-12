import { screen, render } from "@testing-library/react"
import Async from "./Async"

describe('Async component', () =>{
    test('renders post if request succeeds', async () =>{
        render(<Async />)

        const listItemElement = await screen.findAllByRole('listitem')

        expect(listItemElement).not.toHaveLength(0)
    })
})