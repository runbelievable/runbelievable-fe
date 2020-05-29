export const getAllUsers = () => {
  fetch('https://run-be.herokuapp.com/api/v1/users')
    .then(response => response.json())
}

export const getSpecificUser = (id) => {
  fetch(`https://run-be.herokuapp.com/api/v1/${id}`)
    .then(response => response.json())
}
