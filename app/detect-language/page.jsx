import { NavbarComponent } from '@/components/navbar'
import { DetectCards } from './detectCards'

export default function DetectLanguage () {
  return (
    <main className='h-screen grid grid-rows-[auto_1fr]'>
      <NavbarComponent actualLink='detect' />
      <section className='grid place-content-center'>
        <DetectCards />
      </section>
    </main>
  )
}
