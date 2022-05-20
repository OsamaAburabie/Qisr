import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {
  decrement,
  increment,
  selectCount,
} from '../../features/counter/counterSlice';

const Search = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{color: '#333'}}>{count}</Text>
      <Button title="add" onPress={() => dispatch(increment())} />
      <Button title="sub" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default Search;
