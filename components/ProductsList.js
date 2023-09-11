import React, { useState, useEffect } from 'react';
import { FlatList, TextInput, View, Text, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';
import useProduct from './useProduct';

const ProductsList = () => {
  const { products } = useProduct();
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on the search text
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText, products]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search products"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          style={styles.searchBar}
        />
      </View>
      {filteredProducts.length === 0 ? (
        <Text style={styles.noProductText}>No product found</Text>
      ) : (
        <FlatList
          data={searchText ? filteredProducts : products}
          keyExtractor={(product) => product.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  searchBarContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  searchBar: {
    paddingVertical: 12,
  },
});

export default ProductsList;
