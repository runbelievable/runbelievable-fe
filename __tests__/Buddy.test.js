import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';
import { NavigationContainer } from '@react-navigation/native';
import '@testing-library/jest-native'
import Buddy from '../components/Buddy';
import Header from '../components/Header';

test('Buddy render the correct items to the page', () => {
    const route = {
      params: {
        buddyInfo: {
          attributes: {
            age: "32",
            estimated_mile_pace: "09:00",
            first_name: "Michelle",
            gender: "Female",
            last_name: "Seinfeld",
            location: "Denver",
            max_run_distance: 10,
            username: "baluga"
          },
          id: "18",
          type: "user",
        },
        userId: "16",
      }
    }

    const { getByText } = render(<Buddy route={route}/>)

    const routes = getByText('Favorite Routes')

    expect(routes).not.toBeNull()
})
