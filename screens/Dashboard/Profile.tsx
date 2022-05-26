import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation, useEventsQuery} from '../../app/services/auth';
import {RootState} from '../../app/store';
import {useQuery} from 'react-query';
import {SIZES} from '../../constants';
import {
  logout,
  selectCurrentUser,
  setCredentials,
} from '../../features/auth/authSlice';
import {slelectTheme, toggleTheme} from '../../features/theme/themeSlice';
import {useTheme} from '../../hooks/useTheme';
import axios from '../../config/axios';
import {selectEvents, setEvents} from '../../features/data/DataSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const events = useSelector(selectEvents);
  const [login] = useLoginMutation();
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    try {
      const user = await login(inputData).unwrap();
      dispatch(setCredentials(user));
    } catch (err: any) {
      console.log(err?.data);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const fetchEvents = () => {
    return axios.get('/api/student/events');
  };

  const placeholderData = {
    data: {
      data: {
        events: events,
      },
    },
  };
  const {data, isSuccess, isLoading, refetch} = useQuery(
    'events',
    fetchEvents,
    {
      ...(events.length > 0 && {
        initialData: placeholderData as any,
      }),
      onSuccess: data => {
        dispatch(setEvents(data.data.data.events));
      },
    },
  );

  return (
    <View
      style={{
        flex: 1,
        width: SIZES.width,
      }}>
      {user !== null && <Text style={{color: '#333'}}>{user?.firstName}</Text>}
      <TextInput
        value={inputData.email}
        placeholder="Email"
        placeholderTextColor="#333"
        onChangeText={text => setInputData({...inputData, email: text})}
        style={{
          color: '#333',
        }}
      />
      <TextInput
        value={inputData.password}
        placeholder="Password"
        placeholderTextColor="#333"
        onChangeText={text => setInputData({...inputData, password: text})}
        style={{
          color: '#333',
        }}
      />
      <Button title="Login" onPress={handleSubmit} />
      <Button title="Logout" onPress={handleLogout} />
      <Button title="Refetch" onPress={() => refetch()} />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {isLoading && (
          <Text style={{color: '#333', fontSize: 20}}>Loading</Text>
        )}
        {data?.data?.data?.events?.map((event: any) => (
          <Text
            style={{
              color: '#333',
            }}
            key={event.id}>
            {event.title}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Profile;
