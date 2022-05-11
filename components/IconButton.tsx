import {
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  icon: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
  onPress?: () => void;
};

const IconButton = ({containerStyle, icon, iconStyle, onPress}: Props) => {
  return (
    <TouchableOpacity style={[containerStyle]} onPress={onPress}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[
          {
            width: 30,
            height: 30,
            tintColor: COLORS.white,
          },
          iconStyle,
        ]}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
