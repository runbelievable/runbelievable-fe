import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import '@testing-library/jest-native'
import Buddies from '../components/Buddies';
// import 'isomorphic-fetch';
import { getBuddies } from '../apicalls';

jest.mock('../apicalls')

test('Buddies should return a list of runners', async() => {
    getBuddies.mockResolvedValueOnce({"data":[
      {
            "id": "1",
            "type": "user",
            "attributes": {
                "first_name": "Smudge",
                "last_name": "Zoe",
                "username": "Sparky",
                "age": "62",
                "gender": "Male",
                "max_run_distance": 6,
                "estimated_mile_pace": "07:00",
                "location": "Port Talishafurt"
            }
        },
        {
            "id": "2",
            "type": "user",
            "attributes": {
                "first_name": "Misty",
                "last_name": "Sadie",
                "username": "Rascal",
                "age": "1",
                "gender": "Female",
                "max_run_distance": 49,
                "estimated_mile_pace": "05:00",
                "location": "New Angeloshire"
            }
        },
        {
            "id": "3",
            "type": "user",
            "attributes": {
                "first_name": "Smokey",
                "last_name": "Bo",
                "username": "Sandy",
                "age": "95",
                "gender": "Female",
                "max_run_distance": 36,
                "estimated_mile_pace": "06:00",
                "location": "Port Delmerfort"
            }
        }
    ]})
    const { getByText } = render(<Buddies />)

    const username = await waitFor(() => {
      expect(getByText('Sparky')).toBeTruthy()
    })

    const pace = await waitFor(() => {
      expect(getByText('05:00/min')).toBeTruthy()
    })

    const location = await waitFor(() => {
      expect(getByText('Port Delmerfort')).toBeTruthy()
    })
})
