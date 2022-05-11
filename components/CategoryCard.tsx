import {
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

type Props = {
  category: {
    thumbnail: ImageSourcePropType;
    title: string;
  };
  containerStyle?: StyleProp<ViewStyle>;
};

const CategoryCard = ({category, containerStyle}: Props) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={category?.thumbnail}
        resizeMode="cover"
        style={[
          {
            height: 150,
            width: 200,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.radius,
            justifyContent: 'flex-end',
          },
          containerStyle,
        ]}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2,
          }}>
          {category?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
