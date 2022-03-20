//libs
import { memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

//components
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

//constants
import { COLORS } from "../constants/colors";

//types
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => (
	<NavigationContainer>
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Platform.OS === "ios" ? "" : COLORS.primaryColor,
				},
				headerTintColor: Platform.OS === "ios" ? COLORS.primaryColor : "white",
			}}
			initialRouteName='CategoriesScreen'
		>
			<Stack.Screen
				name='CategoriesScreen'
				component={CategoriesScreen}
				options={{
					title: "Meal Categories",
				}}
			/>
			<Stack.Screen name='CategoryMeals' component={CategoryMealsScreen} />
			<Stack.Screen name='MealDetail' component={MealDetailScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default memo(App);
