import Layout from './components/layout';
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { Provider } from 'react-redux';
import store from './store';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </Provider>
  )
};

export default App;
