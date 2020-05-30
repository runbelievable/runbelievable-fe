import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';
import '@testing-library/jest-native'
import User from '../components/User';
import Header from '../components/Header';

test('User render the correct items to the page', () => {
    const { getByText } = render(<User />)

    const routes = getByText('Favorite Routes')

    expect(routes).not.toBeNull()

})
