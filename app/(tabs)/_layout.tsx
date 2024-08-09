import { View, Text } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name='home' options={{title: 'Home', headerShown:false, tabBarIcon: ({color, focused}) => {

        }}}/>
        <Tabs.Screen name='about' options={{title: 'About'}}/>
        <Tabs.Screen name='contact' options={{title: 'Contact'}}/>
        <Redirect to='home'/>
      </Tabs>
    </>
  )
}

export default TabsLayout