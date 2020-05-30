import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';
import '@testing-library/jest-native'
import Signup from '../components/Signup';
import CustomButton from '../components/CustomButton';

test('Signup should render correct items', () => {
    const { getByPlaceholder, getByText } = render(<Signup />)

    const first_name = getByPlaceholder('First Name')
    const last_name = getByPlaceholder('Last Name')
    const age = getByPlaceholder('Age')
    const gender = getByPlaceholder('Gender')
    const max_run_distance = getByPlaceholder('Max Run Distance')
    const estimated_pace_per_mile = getByPlaceholder('Estimated Pace per Mile')
    const location = getByPlaceholder('Location')
    const username = getByPlaceholder('Username')
    const password = getByPlaceholder('Password')
    const submit = getByText('Submit')

    expect(first_name).not.toBeNull()
    expect(last_name).not.toBeNull()
    expect(age).not.toBeNull()
    expect(password).not.toBeNull()
    expect(gender).not.toBeNull()
    expect(max_run_distance).not.toBeNull()
    expect(estimated_pace_per_mile).not.toBeNull()
    expect(location).not.toBeNull()
    expect(password).not.toBeNull()
    expect(username).not.toBeNull()
    expect(submit).not.toBeNull()
})
