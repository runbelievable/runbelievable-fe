import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import '@testing-library/jest-native'
import Header from '../components/Header';

test('Header should return the correct navigation links', () => {
  const route = ''

    const { getByPlaceholder } = render(<Header route={route}/>)

    const Trail = getByPlaceholder('Trail')
    const Profile = getByPlaceholder('Profile')

    expect(Trail).not.toBeNull()
    expect(Profile).not.toBeNull()
})
