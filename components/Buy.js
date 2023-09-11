import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PurchaseForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Perform any necessary actions here, such as sending the form data to a server
    setIsSubmitted(true);
  };

  return (
    <View style={styles.container}>
      
      {isSubmitted ? (
        <View style={styles.submittedContainer}>
          <Text style={styles.thanksText}>Thanks for your purchase !!</Text>
          <Button title="Return" onPress={() => navigation.popToTop()} />
        </View>
      ) : (
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => {
            // Remove non-numeric characters
            const numericText = text.replace(/[^0-9]/g, '');

            // Set a maximum length of 10 characters
            if (numericText.length <= 10) {
            setPhoneNumber(numericText);
            }
            }}
            keyboardType="numeric"
            style={styles.input}
            maxLength={10}
            
          />

          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submittedContainer: {
    alignItems: 'center',
  },
  thanksText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  input: {
    fontSize: 18,
    marginBottom: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default PurchaseForm;
