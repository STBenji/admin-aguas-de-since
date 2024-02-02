import { Navbar, NavbarContent, NavbarMenuToggle, NavbarItem, NavbarMenuItem, NavbarMenu, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, NavbarBrand } from '@nextui-org/react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { DropDownIcon, Logo } from './icons'
import axios from 'axios'

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const menuItems = ['Usuarios', 'Facturas', 'Transparencia']

  const logout = () => {
    axios
      .post(`${import.meta.env.VITE_API_ROUTE}/v1/users/logout`, {}, { withCredentials: true })
      .then(() => {
        navigate('/login')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      position='sticky'
      className='h-navbar'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand className='cursor-pointer'>
          <Logo
            width={100}
            height={100}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='hidden gap-16 sm:flex'
        justify='center'>
        <NavbarItem className='cursor-pointer'>
          <Link to='/users'>Usuarios</Link>
        </NavbarItem>
        <NavbarItem className='cursor-pointer'>
          <Link to='/bills'>Facturas</Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem className='text-sm'>
            <DropdownTrigger>
              <Button
                disableRipple
                className='p-0 bg-transparent data-[hover=true]:bg-transparent'
                radius='sm'
                variant='light'
                endContent={<DropDownIcon />}>
                Contenido
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu>
            <DropdownItem key='Transparencia'>
              <Link to='/content/transparency'>Transparencia</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            color='danger'
            href='#'
            variant='flat'
            onClick={logout}>
            Cerrar sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>{item}</NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
