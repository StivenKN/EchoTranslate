import axios from 'axios'

export const fetchLanguages = async () => {
  const URL = 'https://text-translator2.p.rapidapi.com/getLanguages'

  try {
    const response = await axios.get(URL, {
      headers: {
        'X-RapidAPI-Key': 'a4f1793d41mshacc4887e0e4c319p14a2adjsnb76dda3e2f02',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      }
    })
    return response.data
  } catch (error) {
    return error
  }
}

export const fetchTranslate = async (from, to, text) => {
  const encodedParams = new URLSearchParams()
  encodedParams.set('source_language', from)
  encodedParams.set('target_language', to)
  encodedParams.set('text', text)

  const options = {
    method: 'POST',
    url: 'https://text-translator2.p.rapidapi.com/translate',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'a4f1793d41mshacc4887e0e4c319p14a2adjsnb76dda3e2f02',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    data: encodedParams
  }

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    return error
  }
}
