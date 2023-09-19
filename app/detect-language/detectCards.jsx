'use client'

import { useState } from 'react'
import { Card, CardBody, CardHeader, Input, Textarea } from '@nextui-org/react'
import { fetchDetectLanguage } from './fetchText'

export const DetectCards = () => {
  const [inputValue, setInputValue] = useState('Sin contenido')

  const debounce = (func, delay) => {
    let timeoutId

    return function (...args) {
      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }

  const handleTextAreaChange = async (value) => {
    setInputValue('Reconociendo lenguaje...')
    if (value.length === 0) {
      setInputValue('Sin contenido')
      return
    }
    const response = await fetchDetectLanguage(value)
    setInputValue(response)
  }

  const debouncedHandleTextAreaChange = debounce(handleTextAreaChange, 300)

  return (
    <Card className='p-3'>
      <CardHeader>
        <header className='text-lg font-bold text-center'>
          Escribe el lenguaje a detectar
        </header>
      </CardHeader>
      <CardBody className='flex flex-col gap-3 px-3 '>
        <Textarea color='default' type='text' labelPlacement='outside' label='Escribe el texto' onValueChange={debouncedHandleTextAreaChange} />
        <Input disabled value={inputValue} />
      </CardBody>
    </Card>
  )
}
