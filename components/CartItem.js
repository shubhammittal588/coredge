import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const CartItem = ({ item }) => {
  const { image, category, title, price, description, qty } = item;
  const [isExpanded, setIsExpanded] = useState(false); // Track expansion state

  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-3">
      <View className="bg-white rounded-xl">
        <Image source={{ uri: image }} className="w-full h-72" style={{ resizeMode: "contain" }} />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">{category}</Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <View className="flex-row justify-between mx-2 my-3">
          <Text className="text-2xl font-extrabold">Amount: {qty}</Text>
          <Text className="text-2xl font-extrabold">₹ {qty * price}</Text>
        </View>
        {/* Render expanded description if isExpanded is true */}
        {isExpanded ? (
          <Text className="text-sm text-black/60 dark:text-white/70">{description}</Text>
        ) : (
          // Render a shortened description with a clickable "Read more" option
          <TouchableOpacity onPress={() => setIsExpanded(true)}>
            <Text numberOfLines={2} className="text-sm text-black/60 dark:text-white/70">
              {description}
            </Text>
            <Text className="text-blue-500">Read more</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CartItem;
