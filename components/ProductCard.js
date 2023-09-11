import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import useProduct from './useProduct';

const ProductCard = ({ product }) => {
  const { image, category, title, price, description } = product;
  const { addCart } = useProduct();
  const [count, setCount] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false); // Track expansion state
  const { colorScheme } = useColorScheme();

  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-3">
      <View className="bg-white rounded-xl">
        <Image source={{ uri: image }} className=" w-full h-72" style={{ resizeMode: "contain" }} />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">{category}</Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <View className=" flex-row justify-between mx-2 my-3">
          <View className="flex-row gap-3 items-center">
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => count === 0 ? setCount(0) : setCount(count - 1)}
            />
            <Text className="text-xl dark:text-white">{count}</Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text className="text-2xl font-extrabold dark:text-white">$ {price * count}</Text>
        </View>
        {/* Render expanded description if isExpanded is true */}
        {isExpanded ? (
          <Text className="text-sm text-black/60 dark:text-white/70">{description}</Text>
        ) : (
          // Render a shortened description with a clickable "Read more" option
          <TouchableOpacity
            onPress={() => setIsExpanded(true)}
          >
            <Text numberOfLines={2} className="text-sm text-black/60 dark:text-white/70">
              {description}
            </Text>
            <Text className="text-blue-500">Read more</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          className="flex-row justify-center mt-3 w-10/12 self-center bg-black dark:bg-white p-3 rounded-full"
          onPress={() => addCart({ ...product, qty: count })}
        >
          <Text className="text-white dark:text-black font-bold">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
