import 'react-native-gesture-handler';
import React from "react";
import {Image, Text, Button, StyleSheet} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


import Home from './screens/home';
import Tasks from './screens/tasks';

const Stack = createStackNavigator();

const App = () =>{

  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} 
              options={{ 
                headerTransparent:true,  
                headerLeft: () =>(                    
                     <Icon color="#ffffff" style={styles.icon} name="bars" size={40} />
                ), 
                title:'',
                headerRight:()=> (
                  //Icon made by Freepik https://www.flaticon.com/authors/freepik/a>
                  <Image source={require('./assets/kangaroo.png')} style={styles.profile}/>
                ),
                headerTintColor: '#fff',  headerStyle:{ backgroundColor:'#512DA8'}
              }}
          />        
          
          <Stack.Screen name="Tasks" component={Tasks}  options={{
            headerTransparent:true,
            headerLeft : () => (
              <Icon color="black" style={styles.icon} name="bars" size={40} />
            ),
            title : '',
            headerRight : () => (
              <Image source={require('./assets/kangaroo.png')} style={styles.profile}/>
            )
          }}>
            
          </Stack.Screen>
        </Stack.Navigator>
        
      </NavigationContainer>
 
  );

};


const styles = StyleSheet.create({
  container : {
    justifyContent:"center",
    alignItems:"center",
    color:"black"    
  },
  home:{
    backgroundColor: '#d1d9e3'
  },
  tasks:{
    backgroundColor: '#fff'
  },
  icon : {
    margin : 20,
    paddingTop: 30
  },
  button : {
    margin:10
  },
  profile:{
    marginHorizontal:35,
    marginTop:45
  }

})

export default App;