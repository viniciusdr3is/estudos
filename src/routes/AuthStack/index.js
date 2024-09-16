import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


    import Login from '../../screens/Login';
const AuthStack = () => {
    return(
        const AuthStack = createNativeStackNavigator();
        <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Registrar" component={Register} />
      </AuthStack.Navigator>
    )
}