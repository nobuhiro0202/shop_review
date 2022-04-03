import { createNativeStackNavigator } from '@react-navigation/native-stack';
/**components */
import { IconButton } from '../components/IconButton';
/**screens */
import { HomeScreen } from '../screens/HomeScreen';
import { ShopScreen } from '../screens/ShopScreen';
import { CreateReviewScreen } from '../screens/CreateReviewScreen';
/**types */
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerTintColor: '#000',
      }}
    >
      <Stack.Screen
        name="Home" 
        component={HomeScreen}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Shop" 
        component={ShopScreen} 
      />
    </Stack.Navigator>
  );
};

export const HomeStackNavigator = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Group>
      <RootStack.Screen name="Main" component={MainStack} />
    </RootStack.Group>
    <RootStack.Group screenOptions={{ presentation: 'modal' }}>
      <RootStack.Screen 
        name="CreateReview" 
        component={CreateReviewScreen} 
        options={({ navigation, route }) => ({
          headerTitle: route.params.shop.name,
          headerLeft: () => <IconButton name='x' onPress={() => navigation.goBack()} />
        })}
      />
    </RootStack.Group>
  </RootStack.Navigator>
);