'use client'
import { Card, CardHeader, Divider, CardBody, Button, CardFooter, Code } from '@nextui-org/react'
import Link from 'next/link'

import { TbMessageLanguage } from 'react-icons/tb'
import { BsTranslate } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export const InitialCard = () => {
  return (
    <Card className='p-2'>
      <CardHeader className='text-lg font-bold'>Bienvenido. ¿Qué desea hacer?</CardHeader>
      <Divider />
      <CardBody className='flex flex-col gap-2'>
        <Button as={Link} href='/' color='secondary' variant='ghost' startContent={<TbMessageLanguage />}>
          Detectar idioma
        </Button>
        <Button as={Link} href='/translate' color='success' variant='ghost' startContent={<BsTranslate />}>
          Traducir texto
        </Button>
      </CardBody>
      <Divider />
      <CardFooter className='grid place-content-center'>
        <Code><a href='https://github.com/ConanGH-S' target='_blank' className='flex flex-row items-center gap-2' rel='noreferrer'>Hecho por Conan <FaGithub className='text-lg' /></a></Code>
      </CardFooter>
    </Card>
  )
}
