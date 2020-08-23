import React from "react";

import {TouchableOpacity,Image,StyleSheet,View,Text} from "react-native";
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Card = ({move,screenchange,image,title,completed,subtitle}) => {

    return(
        <Animatable.View animation={move} duration={1500} style={styles.container}>

                <TouchableOpacity style={styles.touchContainer}  onPress={screenchange}>

                    <View style={styles.container}>
                        <View style={styles.box1}>
                            <Icon color="#B4D46E" style={styles.icon} name={image} size={30} />
                        </View>
                        <View style={styles.box2}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.subtitle}>{subtitle}</Text>
                        </View>
                        <View style={styles.box3}>
                            <View style={styles.percentage}>
                                <Text style={{fontSize:20,fontWeight:'bold',color:'#B4D46E'}}>{completed}</Text>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>

        </Animatable.View>
        
    )

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        borderColor:"white",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1
    },
    cardone : {
        flex : 1,
        marginBottom : 15,
    },
    cardtwo : {
        flex : 1,
    },
    box1 : {
        flex : 1,
        paddingHorizontal : 10
    },
    box2 : {
        flex : 2
    },
    box3 : {
        flex : 1
    },
    percentage:{
        borderWidth:1,
        borderColor:'#D9E9B6',
        padding:10,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        height:"70%",
        width:"100%"
        
    },
    touchContainer:{
        flex:1
    },
    title:{
        fontSize:20,
        color:'#2D2D2D',
        letterSpacing:-0.9
    },
    subtitle:{
        fontSize:15,
        color:'#BEC4C9',
        letterSpacing:-0.5,
        paddingVertical:5
    }
})

export default Card;