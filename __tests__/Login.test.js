import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';
import '@testing-library/jest-native'
import Login from '../components/Login';

test('Login should have inputs for a username and password', () => {
    const { getByPlaceholder } = render(<Login />)

    const username = getByPlaceholder('username')
    const password = getByPlaceholder('password')

    expect(username).not.toBeNull()
    expect(password).not.toBeNull()
})
