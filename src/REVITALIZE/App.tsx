import AuthNavigationStack from  './routes/auth-navigation';
import { NavigationContainer } from '@react-navigation/native';
import GlobalDateProvider from './screens/Date-component'
import EmailProvider from './screens/Email-component'

export default function App() {
  return (
    <GlobalDateProvider>
          <EmailProvider>
    <NavigationContainer>
      <AuthNavigationStack />
    </NavigationContainer>
    </EmailProvider>
    </GlobalDateProvider>
  );
}
