import { TranslateCard } from './translateCards'
import { NavbarComponent } from '@/components/navbar'

export default function Translate () {
  return (
    <main className='h-screen grid grid-rows-[auto_1fr]'>
      <NavbarComponent actualLink='translate' />
      <section className='grid place-content-center'>
        <TranslateCard />
      </section>
    </main>
  )
}
