import React from 'react';

import {View,Text, StyleSheet,ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import ScrollItem from '../components/scroll-Item';
import ResourceCard from '../components/resource-card';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tasks = () => {
    
    
    return(
        <View style={styles.container}> 
 
            <ScrollView>

                <View style={styles.header}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Weekly Health Tasks</Text>
                    </View>
                    <TouchableOpacity style={styles.iconBox}>
                        <Icon color="#000" name="plus" size={25} />
                    </TouchableOpacity>
                   
                </View>
                <View style={styles.horizontalView}>
                    <ScrollView 
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}>
                        <ScrollItem  
                            image={require('../assets/graphtwo.png')}
                            title="Excercise"
                            month = "Sep - Nov"
                            animation = "bounceInLeft"
                            completed="1"
                            total="10"
                            backgroundColor="#DE881E"
                            color="#fff"
                            animation = "bounceInLeft"
                            />
                        <ScrollItem 
                            image={require('../assets/graphtwo.png')}
                            title="Healthy Diet"
                            month = "Jan - Feb"
                            animation = "bounceInLeft"
                            completed="5"
                            total="10"
                            backgroundColor="#1BC77A"
                            color="#fff"
                            animation = "bounceInLeft"
                             />
                        <ScrollItem  
                                image={require('../assets/graphthree.png')}
                                title="Jogging"
                                completed="1"
                                total="10"
                                backgroundColor="#1BBEC7"
                                color="#fff"
                                animation = "bounceInLeft"    
                            />
                        <ScrollItem 
                                image={require('../assets/graphtwo.png')}
                                title="Sleep"
                                completed="10"
                                total="10"
                                month = "Aug - Sep"
                                backgroundColor="#D24F48"
                                color="#fff"
                                animation = "bounceInLeft"/>
                    </ScrollView>
                </View>
                <View style={styles.header}>
                    <Text style={styles.subtitle}>Resources</Text>
                </View>
                <ResourceCard animation="fadeInLeft"
                    image = "cutlery"
                    title = "Healthy Diet Plans"
                    subtitle = "explore diet plans"
                    color = "#1BC77A"
                    style={styles.resource}
                />

                <View style={styles.line}></View>

                 <ResourceCard animation="fadeInLeft"
                    image = "heartbeat"
                    title = "Workout Plans"
                    subtitle = "explore workout plans"
                    color = "#D24F48"
                    style={styles.resource}
                />

                <View style={styles.line}></View>


                <ResourceCard animation="fadeInLeft"
                    image = "gift"
                    title = "Rewards"
                    subtitle = "weekly rewards"
                    color = "#FFBE86"
                    style={styles.resource}
                />

                <View style={styles.line}></View>


                <ResourceCard animation="fadeInLeft"
                    image = "users"
                    title = "Community"
                    subtitle = "discuss with friends"
                    color = "#1BBEC7"
                    style={styles.resource}
                />

               
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        display:'flex',
        paddingTop:80,
        backgroundColor:"#ffffff",
        justifyContent:"center"
    },
    header:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    iconBox:{
        padding:10,
        flex:0.5
    },
    titleBox:{
        flex:2
    },
    title:{
        fontSize:25,
        color:"#000",
        fontWeight:"bold",
        padding:10,
        flex:1

    },
    line : {
        width : "80%",
        height : 4,
        backgroundColor : '#F4F0F0',
        borderRadius : 2,
        marginVertical : 1,
        left : "10%",
    },
    subtitle:{
        fontSize:25,
        color:"#000",
        fontWeight:"bold",
        padding:10
    },
    horizontalView :{

    },
    resource:{
        flex:1,
    }
});

export default Tasks;