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
import {useTheme} from '../hooks/useTheme';

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
  const theme = useTheme();
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
            tintColor: theme.textColor3,
          },
          iconStyle,
        ]}
      />

      <Text
        style={[
          {
            marginLeft: SIZES.base,
            color: theme.textColor3,
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
