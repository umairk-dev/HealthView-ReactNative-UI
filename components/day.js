import React from "react";

import {StyleSheet,View,Text} from "react-native";

const Day = ({name,active}) => {

    return(
        <View styles={styles.container}>
            <View style={active?styles.selected:styles.normal}>
                <Text style={active?styles.selectedText:styles.normalText}>{name}</Text>    
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    selected :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#D9E9B6',
        borderRadius:10,
        color:"#ffffff",
        padding:10

    },
    normal :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        color:'#D9E9B6',
        padding:10
    },
    selectedText :{
        color:"#000",
    },
    normalText :{
        color:'#D9E9B6',
    },
   
    
});


export default Day;