import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import IconLabel from './IconLabel';

type Props = {
  course: {
    id: number;
    title: string;
    duration: string;
    instructor: string;
    ratings: number;
    price: number;
    is_favourite: boolean;
    thumbnail: ImageSourcePropType;
  };
  containerStyle?: StyleProp<ViewStyle>;
};

const HorizontalCourseCard = ({containerStyle, course}: Props) => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
        },
        containerStyle,
      ]}>
      {/* Thumbnail */}
      <ImageBackground
        source={course?.thumbnail}
        resizeMode="cover"
        style={{
          width: 130,
          height: 130,
          marginBottom: SIZES.radius,
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}>
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            backgroundColor: COLORS.white,
          }}>
          <Image
            source={icons.favourite}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: course?.is_favourite
                ? COLORS.secondary
                : COLORS.additionalColor4,
            }}
          />
        </View>
      </ImageBackground>

      {/* Detail*/}
      <View style={{flex: 1, marginLeft: SIZES.base}}>
        {/* Title */}
        <Text
          style={{
            ...FONTS.h3,
            fontSize: 18,
            color: COLORS.black,
          }}>
          {course?.title}
        </Text>

        {/* Instructor & Duration */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.base,
          }}>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.gray50,
            }}>
            By {course?.instructor}
          </Text>
          <IconLabel
            icon={icons.time}
            label={course?.duration}
            containerStyle={{
              marginLeft: SIZES.base,
            }}
            iconStyle={{
              width: 15,
              height: 15,
            }}
            labelStyle={{
              ...FONTS.body4,
            }}
          />
        </View>
        {/* Price & Rating */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.base,
          }}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.primary,
            }}>
            ${course?.price.toFixed(2)}
          </Text>

          <IconLabel
            icon={icons.star}
            label={course?.ratings}
            containerStyle={{
              marginLeft: SIZES.base,
            }}
            iconStyle={{
              width: 15,
              height: 15,
              tintColor: COLORS.primary2,
            }}
            labelStyle={{
              marginLeft: 5,
              color: COLORS.black,
              ...FONTS.h3,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCourseCard;
