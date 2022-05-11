import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  icon: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
  labelStyle?: StyleProp<TextStyle>;
  label: string | number;
};
const IconLabel = ({
  containerStyle,
  icon,
  iconStyle,
  label,
  labelStyle,
}: Props) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
        },
        containerStyle,
      ]}>
      <Image
        source={icon}
        style={[
          {
            width: 20,
            height: 20,
            tintColor: COLORS.gray30,
          },
          iconStyle,
        ]}
      />

      <Text
        style={[
          {
            marginLeft: SIZES.base,
            color: COLORS.gray30,
            ...FONTS.body3,
          },
          labelStyle,
        ]}>
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
