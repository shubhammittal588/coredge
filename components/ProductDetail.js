import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <View>
      <Image source={{ uri: product.image }} style={{ width: 200, height: 200 }} />
      <Text>{product.title}</Text>
      <Text>${product.price}</Text>
      <Text>{product.description}</Text>
      {/* You can add any additional details you want to display here */}
      <Button
        title="Add to Cart"
        onPress={() => {
          // Implement add to cart functionality here
        }}
      />
    </View>
  );
};

export default ProductDetail;
