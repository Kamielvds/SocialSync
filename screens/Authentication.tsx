import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

const Stack = createNativeStackNavigator();

export const AuthenticationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GettingStarted"
          component={GettingStartedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign up"
          component={SigninScreen}
          options={{
            headerStyle: {backgroundColor: 'black'},
            headerTitleStyle: {color: 'white'},
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: {backgroundColor: 'black'},
            headerTitleStyle: {color: 'white'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const GettingStartedScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SocialSync</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}> Login </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Sign up');
        }}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={(styles.Spacing, styles.container)}>
      <Text style={styles.logo}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        keyboardType="default"
        returnKeyType="next"
        onSubmitEditing={() => {
          this.passwordInput.focus();
        }}
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        returnKeyType="go"
        ref={input => {
          this.passwordInput = input;
        }}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const SigninScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inner}>
          <Text style={styles.logo}>Welcome!</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#aaa"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.emailInput.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#aaa"
            keyboardType="default"
            returnKeyType="next"
            ref={input => {
              this.emailInput = input;
            }}
            onSubmitEditing={() => {
              this.passwordInput.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            returnKeyType="next"
            ref={input => {
              this.passwordInput = input;
            }}
            onSubmitEditing={() => {
              this.confirmPasswordInput.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            returnKeyType="go"
            ref={input => {
              this.confirmPasswordInput = input;
            }}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 300,
  },
  Spacing: {},
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#ababab',
    marginBottom: 100,
    marginTop: 60,
    paddingTop: 40,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    paddingHorizontal: 75,
    borderRadius: 15,
    marginBottom: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'black',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    color: 'white',
    width: 250, // Set a fixed width for the text fields
    paddingHorizontal: 10, // Adjust padding to ensure text is not too far from the edges
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Ensure inner view takes full width
  },
});

export default AuthenticationStack;
