import React from 'react';
import { View, FlatList } from 'react-native';
import StoryCircleListItem from './StoryCircleListItem';
import { StoryCircleListViewProps } from 'src/interfaces';

const StoryCircleListView = ({
  data,
  handleStoryItemPress,
  unPressedBorderColor,
  pressedBorderColor,
  avatarSize,
  showText,
  textStyle,
  customItemComponent,
  horizontal=true
}: StoryCircleListViewProps) => {
  return (
      <FlatList
        keyExtractor={(_item, index) => index.toString()}
        data={data}
        horizontal={horizontal}
        style={{ paddingLeft: 12 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View style={{ flex: 1, width: 8 }} />}
        renderItem={({ item, index }) => (
          customItemComponent ? customItemComponent(item,index,handleStoryItemPress) :
          <StoryCircleListItem
            avatarSize={avatarSize}
            handleStoryItemPress={() =>
              handleStoryItemPress && handleStoryItemPress(item, index)
            }
            unPressedBorderColor={unPressedBorderColor}
            pressedBorderColor={pressedBorderColor}
            item={item}
            showText={showText}
            textStyle={textStyle}
          />
        )}
      />
  );
};

export default StoryCircleListView;
