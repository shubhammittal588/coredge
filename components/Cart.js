import React from 'react';
import { FlatList, Text, View, Button, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';
import CartItem from './CartItem';
import useProduct from './useProduct';

const Cart = ({ navigation }) => {
  const { cart, calculaTotal } = useProduct();

  return (
    <>
      {cart?.length === 0 ? (
        <Text className="font-extrabold text-4xl self-center items-center">No products </Text>
      ) : (
        <View>
          <Text style={styles.totalAmountText}>Total Amount: $ {calculaTotal().toFixed(2)}</Text>
          <View style={styles.checkoutButtonContainer}>
            <Button
              title="Checkout"
              onPress={() => {
                navigation.dispatch(StackActions.replace("Buy"));
              }}
              color="#fff" // Change the button's text color
            />
          </View>
          <FlatList
            data={cart}
            keyExtractor={(product) => product.id}
            renderItem={({ item }) => <CartItem item={item} />}
            contentContainerStyle={styles.flatListContainer}
          />
          
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  totalAmountText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  flatListContainer: {
    paddingHorizontal: 15,
  },
  checkoutButtonContainer: {
    backgroundColor: '#007bff', // Change the button's background color
    padding: 5,
    borderRadius: 5,
    marginVertical: 16,
  },
});

export default Cart;
