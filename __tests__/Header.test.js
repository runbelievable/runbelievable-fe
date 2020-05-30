import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';
import '@testing-library/jest-native'
import Header from '../components/Header';

test('Header should have buttons for buddies, profile, and chat', () => {
    const { getByText } = render(<Header />)

    const buddies = getByText('Buddies')
    const profile = getByText('Profile')
    const chat = getByText('Chat')

    expect(buddies).not.toBeNull()
    expect(profile).not.toBeNull()
    expect(chat).not.toBeNull()
})
