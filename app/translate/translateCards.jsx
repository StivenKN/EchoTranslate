'use client'
import { Card, CardBody, CardHeader, Divider, Select, SelectItem, Textarea } from '@nextui-org/react'
import { fetchLanguages, fetchTranslate } from './languages'
import { useEffect, useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'

export const TranslateCard = () => {
  const [languages, setLanguages] = useState([])
  const [fromLanguage, setFromLanguage] = useState(null)
  const [toLanguage, setToLanguage] = useState(null)
  const [translatedText, setTranslatedText] = useState('Sin traducción')

  useEffect(() => {
    const getData = async () => {
      const { data } = await fetchLanguages()
      setLanguages(data.languages)
    }
    getData()
  }, [])

  const handleSelectionFromChange = (e) => {
    setFromLanguage(e.target.value)
  }

  const handleSelectionToChange = (e) => {
    setToLanguage(e.target.value)
  }

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
    if (!value) {
      setTranslatedText('Sin traducción')
      return
    }
    const { data } = await fetchTranslate(fromLanguage, toLanguage, value)
    setTranslatedText(data.translatedText)
  }

  const debouncedHandleTextAreaChange = debounce(handleTextAreaChange, 300)

  return (
    <Card className='p-3'>
      <CardHeader className='grid grid-rows-2 pt-0'>
        <header className='text-lg font-bold text-center'>
          Decide los idiomas de traducción
        </header>
        <section className='grid grid-cols-[1fr_40px_1fr] place-items-center'>
          <Select isRequired label='De' placeholder='English' className='w-56' items={languages} onChange={handleSelectionFromChange}>
            {languages.map((value) => (
              <SelectItem key={value.code} value={value.code}>
                {value.name}
              </SelectItem>
            ))}
          </Select>
          <AiOutlineSend />
          <Select isRequired label='A' placeholder='Spanish' items={languages} onChange={handleSelectionToChange}>
            {languages.map((value) => (
              <SelectItem key={value.code} value={value.code}>
                {value.name}
              </SelectItem>
            ))}
          </Select>
        </section>
      </CardHeader>
      <Divider />
      <CardBody className='grid grid-cols-2 gap-8 px-3'>
        {(fromLanguage && toLanguage)
          ? (
            <Textarea color='default' type='text' labelPlacement='outside' label='Tu idioma' onValueChange={debouncedHandleTextAreaChange} />
            )
          : (
            <Textarea type='text' labelPlacement='outside' color='danger' placeholder='Elige los idiomas a traducir' label='Tu idioma' disabled />
            )}
        <Textarea type='text' labelPlacement='outside' label='Traducción' value={translatedText} disabled />
      </CardBody>
    </Card>
  )
}
