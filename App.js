import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  state = {
    contactInfo: {
      name: '',
      phone: '',
      email: '',
      website: ''
    }
  };

  handleChangeText = field => text => {
    const { contactInfo } = this.state;

    this.setState({ contactInfo: { ...contactInfo, [field]: text } });
  };

  handleSubmit = () => {
    console.log('Submitted!', this.state.contactInfo);
    Alert.alert('You submitted the form, bro!', JSON.stringify(this.state.contactInfo));
  };

  render = () => {
    return (
      <View style={styles.container}>
        <Text>We are gonna create a form cuz we can bitch!</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='words'
          onChangeText={this.handleChangeText('name')}
          placeholder='Name'
          returnKeyType='next'
        />
        <TextInput
          style={styles.input}
          keyboardType='phone-pad'
          onChangeText={this.handleChangeText('phone')}
          placeholder='Phone number'
          returnKeyType='next'
        />
        <TextInput
          style={styles.input}
          keyboardType='email-address'
          onChangeText={this.handleChangeText('email')}
          placeholder='Email'
          returnKeyType='next'
        />
        <TextInput
          style={styles.input}
          keyboardType='url'
          onChangeText={this.handleChangeText('website')}
          onSubmitEditing={this.handleSubmit}
          placeholder='Website Address'
          returnKeyType='done'
        />
        <Button
          title='Submit that bitch!'
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    alignSelf: 'center'
  }
});
