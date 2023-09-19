import axios from 'axios'

export const fetchDetectLanguage = async (payload) => {
  const options = {
    method: 'POST',
    url: 'https://microsoft-translator-text.p.rapidapi.com/Detect',
    params: {
      'api-version': '3.0'
    },
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'a4f1793d41mshacc4887e0e4c319p14a2adjsnb76dda3e2f02',
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    },
    data: [
      {
        Text: payload
      }
    ]
  }

  try {
    const response = await axios.request(options)
    const result = response.data[0].language
    return result
  } catch (error) {
    console.error(error)
  }
}
