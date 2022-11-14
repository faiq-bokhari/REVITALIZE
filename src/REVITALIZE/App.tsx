import AuthNavigationStack from  './routes/auth-navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigationStack />
    </NavigationContainer>
  );
}
