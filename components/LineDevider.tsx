import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

type Props = {
  lineStyle?: StyleProp<ViewStyle>;
};
const LineDevider = ({lineStyle}: Props) => {
  return (
    <View
      style={[
        {
          height: 2,
          width: '100%',
          backgroundColor: COLORS.gray20,
        },
        lineStyle,
      ]}></View>
  );
};

export default LineDevider;
