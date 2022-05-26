import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation} from '../../app/services/auth';
import {RootState} from '../../app/store';
import {SIZES} from '../../constants';
import {selectCurrentUser, setCredentials} from '../../features/auth/authSlice';
import {slelectTheme, toggleTheme} from '../../features/theme/themeSlice';
import {useTheme} from '../../hooks/useTheme';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [login, {isLoading}] = useLoginMutation();

  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  React.useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  const handleSubmit = async () => {
    try {
      const user = await login(inputData).unwrap();
      dispatch(setCredentials(user));
    } catch (err: any) {
      console.log(err?.data);
    }
  };

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
    </View>
  );
};

export default Profile;
