const baseURL = 'https://norma.nomoreparties.space/api';

const getResponse = async (res) => {
  const data = await res.json()
  if(res.ok) {
    return data;
  } else {
    return Promise.reject(new Error(data.message || data.error))
  }
}

const getData = async () => {
  const res = await fetch(`${baseURL}/ingredients`)
  return getResponse(res)
}

const sendData = async (ingredients) => {
  const res = await fetch(`${baseURL}/orders`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ingredients
    })
  })
  return getResponse(res)
}

const api = {
  getData,
  sendData
}

export default api
