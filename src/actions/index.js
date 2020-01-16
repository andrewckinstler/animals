export const setAnimals = animals => ({
  type: 'SET_ANIMALS',
  animals
});

export const addLoading = isLoading => ({
  type: 'IS_LOADING',
  isLoading
});

export const hasErrored = error => ({
  type: 'HAS_ERRORED',
  error
});

