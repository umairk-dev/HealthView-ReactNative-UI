import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';


const ScrollItem = ({title, completed, total,image,animation,...style}) => {
    return(
        <Animatable.View  animation={animation} duration={1200} >
            <View style={styles.container} {...style}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.imageContainer}>
                    <Image source={image} style={{marginHorizontal:20,marginTop:40}}/>
                </View>
                <View style={styles.progressContainer}>
                    <Text style={styles.status}>Completed {completed} / {total} </Text>
                    <View style={styles.percentage}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:"#000"}}>{ (completed/total)*100}%</Text>
                    </View>
                </View>
            </View>
        </Animatable.View>
       
    );
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"green",
        borderColor:"#000",
        margin:5,
        borderRadius:20,
        elevation: 5,
    },
    title:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:20,
        padding:10
    },
    imageContainer:{
        flex:1
    },
    progressContainer:{
        flex:2,
        flexDirection:"row",
        padding:10,
        alignItems:"center"
    },
    status:{
        flex:1,
        color:"#fff",
        fontWeight:"bold",
        fontSize:15
    },
    percentage:{
        flex:0.5,
        borderWidth:1,
        padding:10,
        borderRadius:100,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        height:"100%",
        width:"30%",
        backgroundColor:"#fff",
        borderColor:"black"

    },

})



export default ScrollItem;