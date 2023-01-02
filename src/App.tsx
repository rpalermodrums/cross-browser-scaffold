import React from 'react';
import { Button, Text, View } from 'react-native';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';

import NewEvent from './components/create/NewEvent';

function Home () {
  const navigate = useNavigate();

  return (
    <View>
      <Text>
        Home
      </Text>
      <Button
        onPress={() => navigate('/new-event')}
        title='New Event'
        accessibilityLabel='New Event'
        testID='new-event-button'
      />
    </View>
  )
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Home />} />
      <Route path='new-event' element={<NewEvent />} />
    </Route>,
  ),
);

function App () {
  return (
    <View>
      <RouterProvider router={router} />
    </View>
  );
}

export default App;
