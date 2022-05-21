import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {SIZES} from '../../constants';
import {
  decrement,
  increment,
  selectCount,
} from '../../features/counter/counterSlice';
import {slelectTheme, toggleTheme} from '../../features/theme/themeSlice';
import {useTheme} from '../../hooks/useTheme';

const Search = () => {
  const count = useSelector(selectCount);
  const themeName = useSelector(slelectTheme);
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor1,
        flex: 1,
        width: SIZES.width,
      }}>
      <Text style={{color: '#333'}}>{count}</Text>
      <Text style={{color: '#333'}}>{themeName}</Text>
      <Button title="add" onPress={() => dispatch(increment())} />
      <Button title="sub" onPress={() => dispatch(decrement())} />
      <Button title="Toggle theme" onPress={() => dispatch(toggleTheme())} />
    </View>
  );
};

export default Search;
