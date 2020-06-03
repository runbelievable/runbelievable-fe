export const getBuddies = (id) => {
  return fetch(`https://run-be.herokuapp.com/api/v1/users/${id}/find_runner`)
    .then(response => response.json())
}

export const validateUser = (name, pword) => {
  return fetch(`https://run-be.herokuapp.com/api/v1/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: name,
      password: pword
    })
  })
}


export const getSingleUser = (id) => {
  return fetch(`https://run-be.herokuapp.com/api/v1/users/${id}`)
    .then(response => response.json())
}

export const findRandomTrail = (id) => {
  return fetch(`https://run-be.herokuapp.com/api/v1/users/${id}/random_trail`)
    .then(response => response.json())
}

export const logOutUser = () => {
  return fetch('https://run-be.herokuapp.com/api/v1/logout')
}
