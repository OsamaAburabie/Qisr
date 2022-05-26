import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation, useEventsQuery} from '../../app/services/auth';
import {RootState} from '../../app/store';
import {SIZES} from '../../constants';
import {
  logout,
  selectCurrentUser,
  setCredentials,
} from '../../features/auth/authSlice';
import {slelectTheme, toggleTheme} from '../../features/theme/themeSlice';
import {useTheme} from '../../hooks/useTheme';
import axios from '../../config/axios';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [login, {isLoading}] = useLoginMutation();
  // const {data} = useEventsQuery(undefined, {
  //   refetchOnFocus: true,
  //   refetchOnReconnect: true,
  // });

  const [data, setData] = useState([]);

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

  const getData = async () => {
    try {
      const response = await axios.get('/api/student/events');
      setData(response.data?.data?.events);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
      <Button title="Refetch" onPress={getData} />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {data?.map((event: any) => (
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
