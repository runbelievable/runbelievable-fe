export const getBuddies = () => {
  return fetch('https://run-be.herokuapp.com/api/v1/users')
    .then(response => response.json())
}

export const validateUser = (name, pword) => {
  return fetch(`https://run-be.herokuapp.com/api/v1/login?username=${name}&password=${pword}`)
}