import React, { useState } from 'react';
import {View, StyleSheet,Dimensions, ImageBackground,Text} from 'react-native';

import Day from '../components/day';
import Card from '../components/card';
import {BarChart} from '../components/chart/index';

const Home = ({navigation}) => {
    
    var [dataY,setDataY]=useState([10,2,1.2,4.5,3,10,7]);
    var [labels,setLabels]= useState(['','','','','',"",""]);

    const navTaskView = () => {
        return(
            navigation.navigate('Tasks')
        );
    }

    return (
            <View style={styles.container}>
                <View style={styles.containerone} >
                    <View style={styles.boxone}></View>
                    <View style={styles.boxtwo}>
                        <Text style={styles.title}>Hi Skippy!</Text>
                        <Text style={styles.subtitle}>Here is your progress</Text>
                    </View>
                    <View style={styles.boxthree}>
                        <BarChart 
                            labels={labels} 
                            dataY={dataY} 
                            color={'#D9E9B6'}
                            height={100}
                            containerStyles={styles.barChart}
                        />
                   </View>
                    <View style={styles.boxfour}>
                        <Day name='Sun' active={false}/>
                        <Day name='Mon' active={false}/>
                        <Day name='Tue' active={false}/>
                        <Day name='Wed' active={true}/>
                        <Day name='Thu' active={false}/>
                        <Day name='Fri' active={false}/>
                        <Day name='Sat' active={false}/>
                    </View>
                </View>   
                <View style={styles.containertwo}>
                    <View style={styles.line}></View>
                    <View style={styles.progress}>
                        <Text style={styles.textone}>My Progress</Text>
                    </View>
                    <View style={styles.cards}>
                        <Card 
                            move="bounceInLeft" 
                            image="list-ol" 
                            title="Health Tasks" 
                            subtitle="55% Completed"
                            completed="55%"
                            screenchange = {()=>{navTaskView()}}
                        />

                        <Card 
                            move="bounceInRight" 
                            image="check-square" 
                            title="Completed" 
                            subtitle="5 out of 10 tasks"
                            completed="75%"
                        />
                    </View>
                </View>
            </View>
    )
    
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        display:'flex',
        backgroundColor:"green",
    },
    containerone:{
        flex:1.5
    },
    containertwo:{
        flex:1,
        backgroundColor:"#fff",
        borderTopRightRadius:60,
        borderTopLeftRadius:60
    },
    boxone:{
        flex:1
    },
    boxtwo:{
        flex:1,
        marginHorizontal:35
    },
    boxthree : {
        flex : 2,
    },
    boxfour : {
        flex : 0.5,
        color : '#fff',
        flexDirection : 'row',
        justifyContent:"space-evenly",
        marginBottom:5,
        padding:10   

    },
    title:{
        color:'#fff',
        fontSize : 38,
        fontWeight : 'bold',
        letterSpacing : -0.5,   
    }, 
    subtitle:{
        fontSize:20,
        color:'#fff'
    },
    line : {
        width : "10%",
        height : 4,
        backgroundColor : '#F4F0F0',
        borderRadius : 2,
        marginVertical : 25,
        left : "45%",
    },
    progress : {
        left : 50
    },
     cards : {
        flex : 1,
        display : 'flex',
        marginTop : 10,
        marginHorizontal : 30
    },
    barChart: {
        backgroundColor:"transparent",
        height:150,
        width:Dimensions.get('window').width,
        marginTop:10,
    },
});

export default Home;