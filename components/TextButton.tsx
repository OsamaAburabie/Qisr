import {
  TouchableOpacity,
  Text,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  onPress?: () => void;
};

const TextButton = ({
  contentContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.primary,
        },
        contentContainerStyle,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text
        style={[
          {
            color: COLORS.white,
            ...FONTS.h3,
          },
          labelStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
