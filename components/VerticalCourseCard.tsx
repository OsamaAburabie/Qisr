import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {IconLabel} from '../components';

type Props = {
  course: {
    thumbnail: ImageSourcePropType;
    title: string;
    duration: string;
  };
  containerStyle?: StyleProp<ViewStyle>;
};
const VerticalCourseCard = ({containerStyle, course}: Props) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: 270,
        },
        containerStyle,
      ]}>
      {/* Thumbnail */}
      <Image
        source={course?.thumbnail}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 150,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
      />

      {/* Details */}
      <View
        style={{
          flexDirection: 'row',
        }}>
        {/* Play */}
        <View
          style={{
            width: 45,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            backgroundColor: COLORS.primary,
          }}>
          <Image
            source={icons.play}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </View>
        {/* Info */}
        <View
          style={{
            flexShrink: 1,
            paddingHorizontal: SIZES.radius,
          }}>
          <Text
            style={{
              flex: 1,
              ...FONTS.h3,
              fontSize: 16,
              color: COLORS.black,
            }}>
            {course?.title}
          </Text>

          <IconLabel
            icon={icons.time}
            label={course?.duration}
            containerStyle={{
              marginTop: SIZES.base,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalCourseCard;
