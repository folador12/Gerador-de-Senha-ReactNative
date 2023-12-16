import { Home } from "./pages/home";
import { PasswordSaves } from "./pages/passwordSaves";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            if(focused){
              return <Ionicons name="home" size={size} color={color} />
            }
            return <Ionicons name="home-outline" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="PasswordSaves"
        component={PasswordSaves}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            if(focused){
              return <Ionicons name="lock-closed" size={size} color={color} />
            }
            return <Ionicons name="lock-closed-outline" size={size} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  );
}
