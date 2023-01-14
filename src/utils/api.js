const baseURL = 'https://norma.nomoreparties.space/api/ingredients';

const getResponse = async (res) => {
  const data = await res.json()
  if(res.ok) {
    return data;
  } else {
    return Promise.reject(new Error(data.message || data.error))
  }
}

const getData = async () => {
  const res = await fetch(baseURL)
  return getResponse(res)
}

const api = {
  getData
}

export default api
