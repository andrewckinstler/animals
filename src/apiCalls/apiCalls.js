export const getAnimals = async () => {
  const url = 'http://localhost:3001/api/v1/rescue-animals';

  const response = await fetch(url);
  if (!response.ok){
    throw Error('There has been a mistake')
  }

  const data = await response.json()
  return data
}