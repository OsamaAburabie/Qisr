import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {COLORS, SIZES, FONTS, images, icons, dummyData} from '../../constants';

import {FlatList} from 'react-native-gesture-handler';

import {
  IconButton,
  TextButton,
  VerticalCourseCard,
  LineDevider,
  CategoryCard,
  HorizontalCourseCard,
} from '../../components';

type SectionProps = {
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  onPress?: () => void;
  children: React.ReactNode;
};
const Section = ({containerStyle, title, onPress, children}: SectionProps) => {
  return (
    <View style={containerStyle}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
        }}>
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
            color: COLORS.gray50,
          }}>
          {title}
        </Text>
        <TextButton
          contentContainerStyle={{
            width: 80,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
          }}
          label="See All"
          onPress={onPress}
        />
      </View>
      {children}
    </View>
  );
};

const Home = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* Greetings */}
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
            }}>
            Hello, ByProgrammers!
          </Text>
          <Text
            style={{
              color: COLORS.gray50,
              ...FONTS.body3,
            }}>
            9th March 2020
          </Text>
        </View>
        {/* Notification */}
        <IconButton
          icon={icons.notification}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        />
      </View>
    );
  }

  function renderStartLearning() {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={{
          alignItems: 'flex-start',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: SIZES.padding,
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}>
        {/* Info */}
        <View>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body2,
            }}>
            HOW TO
          </Text>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
            }}>
            Make your brain more visible with our checklist.
          </Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.white,
              ...FONTS.body4,
            }}>
            By Scott Harris
          </Text>
        </View>
        {/* Image */}
        <Image
          source={images.start_learning}
          style={{
            width: '100%',
            height: 110,
            marginTop: SIZES.padding,
          }}
        />
        {/* Button */}
        <TextButton
          label="Start Learning"
          contentContainerStyle={{
            height: 40,
            paddingHorizontal: SIZES.padding,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          }}
          labelStyle={{
            color: COLORS.black,
          }}
        />
      </ImageBackground>
    );
  }

  function renderCourses() {
    return (
      <FlatList
        horizontal
        data={dummyData.courses_list_1}
        listKey="Courses"
        keyExtractor={item => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        renderItem={({item, index}) => (
          <VerticalCourseCard
            containerStyle={{
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index == dummyData.courses_list_1.length - 1
                  ? SIZES.padding
                  : 0,
            }}
            course={item}
          />
        )}
      />
    );
  }

  function renderCategories() {
    return (
      <Section title="Categories">
        <FlatList
          horizontal
          data={dummyData.categories}
          listKey="Categories"
          keyExtractor={item => `Categories-${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => (
            <CategoryCard
              category={item}
              containerStyle={{
                marginLeft: index == 0 ? SIZES.padding : SIZES.base,
                marginRight:
                  index == dummyData.categories.length - 1 ? SIZES.padding : 0,
              }}
            />
          )}
        />
      </Section>
    );
  }

  function renderPopularCourses() {
    return (
      <Section
        title="Popular Courses"
        containerStyle={{
          marginTop: 30,
        }}>
        <FlatList
          data={dummyData.courses_list_2}
          listKey="Courses"
          scrollEnabled={false}
          keyExtractor={item => `PopularCourses-${item.id}`}
          contentContainerStyle={{
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.padding,
          }}
          renderItem={({item, index}) => (
            <HorizontalCourseCard
              course={item}
              containerStyle={{
                marginVertical: SIZES.padding,
                marginTop: index == 0 ? SIZES.radius : SIZES.padding,
              }}
            />
          )}
          ItemSeparatorComponent={() => (
            <LineDevider
              lineStyle={{
                backgroundColor: COLORS.gray20,
              }}
            />
          )}
        />
      </Section>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* Header */}
      {renderHeader()}

      {/* Content */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}>
        {/* Start Learning */}
        {renderStartLearning()}

        {/* Courses */}
        {renderCourses()}

        <LineDevider
          lineStyle={{
            marginVertical: SIZES.padding,
          }}
        />

        {/* Categories */}
        {renderCategories()}

        {/* Popular Courses */}
        {renderPopularCourses()}
      </ScrollView>
    </View>
  );
};

export default Home;
