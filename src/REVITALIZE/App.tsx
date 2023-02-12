import AuthNavigationStack from  './routes/auth-navigation';
import { NavigationContainer } from '@react-navigation/native';
import GlobalDateProvider from './screens/Date-component'

export default function App() {
  return (
    <GlobalDateProvider>
    <NavigationContainer>
      <AuthNavigationStack />
    </NavigationContainer>
    </GlobalDateProvider>
  );
}
