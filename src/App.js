import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'
import { Provider, useSelector } from 'react-redux'
import { Loading } from './components'
import store from './redux/store';

const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  return (
    <>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
      {stateGlobal.loading && <Loading />}
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App
