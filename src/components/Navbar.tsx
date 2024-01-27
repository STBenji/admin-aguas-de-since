import { Navbar, NavbarContent, NavbarMenuToggle, NavbarItem, NavbarMenuItem, NavbarMenu, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, NavbarBrand } from '@nextui-org/react'
import { useState } from 'react'
import { DropDownIcon, Logo } from './icons'

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['Usuarios', 'Facturas', 'Transparencia']

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
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
        <NavbarItem className='cursor-pointer'>Usuarios</NavbarItem>
        <NavbarItem className='cursor-pointer'>Facturas</NavbarItem>
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
            <DropdownItem key='Transparencia'>Transparencia</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            color='danger'
            href='#'
            variant='flat'>
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