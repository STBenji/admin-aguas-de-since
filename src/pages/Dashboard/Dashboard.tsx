import { Button, Image } from '@nextui-org/react'
import { Card } from '../../components/Card'
import NavbarComponent from '../../components/Navbar'

export default function DashboardPage() {
  return (
    <main className='flex flex-col h-screen gap-12 bg-base'>
      <NavbarComponent />
      <section className='pt-10 text-2xl font-bold text-center'>
        <h1>Bienvenido!, ¿Qué deseas realizar?</h1>
      </section>
      <section className='flex items-center justify-center gap-5 '>
        <Card className='w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem]  grid place-content-center rounded-xl bg-white border'>
          <Image
            src='./user.png'
            width={100}
            height={100}
          />
          <footer>
            <Button variant='bordered'>ver usuarios</Button>
          </footer>
        </Card>
        <Card className='w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] grid place-content-center gap-3 rounded-xl bg-white border'>
          <Image
            src='./factura.png'
            width={100}
            height={100}
          />
          <footer>
            <Button variant='bordered'>Facturas</Button>
          </footer>
        </Card>
      </section>
    </main>
  )
}
