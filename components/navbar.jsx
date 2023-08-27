'use client'
import { Code, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { FaGithub } from 'react-icons/fa'

export const NavbarComponent = ({ actualLink }) => {
  return (
    <Navbar position='static'>
      <NavbarBrand>
        <Code><a href='https://github.com/ConanGH-S' target='_blank' className='flex flex-row items-center gap-2' rel='noreferrer'>Hecho por Conan <FaGithub className='text-lg' /></a></Code>
      </NavbarBrand>
      <NavbarContent justify='center'>
        {actualLink === 'translate'
          ? (
            <>
              <NavbarItem isActive>
                <Link isBlock color='secondary' href='/translate'>
                  Traductor
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link isBlock color='foreground' href='/'>
                  Detectar idioma
                </Link>
              </NavbarItem>
            </>
            )
          : (
            <>
              <NavbarItem>
                <Link color='foreground' href='/translate'>
                  Traductor
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href='/'>
                  Detectar idioma
                </Link>
              </NavbarItem>
            </>
            )}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Link isBlock color='foreground' href='/'>
            Inicio
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
