export const getAllUsers = () => {
  fetch('https://run-be.herokuapp.com/api/v1/users')
    .then(response => response.json())
}

export const getSpecificUser = (id) => {
  fetch(`https://run-be.herokuapp.com/api/v1/${id}`)
    .then(response => response.json())
}

export const createUser = () => {
  fetch('https://run-be.herokuapp.com/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'appplication/json'
    },
    body: JSON.stringify({
      'first_name': firstName,
      'last_name': lastName,
      'age': age,
      'gender': gender,
      'max_run_distance': maxRunDistance,
      'estimated_mile_pace': estimatedMilePlace
    })
  })
    .then(response => response.json())
}
