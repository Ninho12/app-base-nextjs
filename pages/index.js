import { Inter } from '@next/font/google'
import FormMaranatha from '../components/forms/formmaranatha'
import InputMaranatha from '../components/forms/inputmaranatha'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>

        <h1> Meu Nome é João Paulo</h1>
        <FormMaranatha>
            <InputMaranatha></InputMaranatha>
        </FormMaranatha>
      </main>
    </>
  )
}
