import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Image } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';
import '@testing-library/jest-native'
import Homepage from '../components/Homepage';
import Header from '../components/Header';

test('Homepage should render the correct items', () => {
    const { getByText, getByTestId } = render(<Homepage />)

    const title = getByText('Runbelievable')
    const greeting = getByText('Welcome, Runner!')
    const logo = getByTestId('logo')
    const login = getByText('Log In')
    const signup = getByText('Sign up')
    const notMember = getByText('Not a member?')

    expect(title).not.toBeNull()
    expect(greeting).not.toBeNull()
    expect(logo).not.toBeNull()
    expect(login).not.toBeNull()
    expect(signup).not.toBeNull()
    expect(notMember).not.toBeNull()
})
