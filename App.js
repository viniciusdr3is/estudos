import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const App = () => {
	const Stack = createNativeStackNavigator();
	const Tab = createBottomTabNavigator();

	return (
        //<NavigationContainer>
		//	<Stack.Navigator initialRouteName='Home'>
		//		<Stack.Screen name='Home' component={Home} />
		//		<Stack.Screen name='Login' component={Login} />
		//	</Stack.Navigator>
		//</NavigationContainer>
		<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name="Home" component={Home}/>
					<Tab.Screen name="Login" component={Login}/>
					</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
