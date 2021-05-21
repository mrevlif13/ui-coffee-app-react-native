import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import CipuyCoffee from '../../../assets/logos/splash.svg'
const Splash = ({ navigation }) => {
    
    
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 2000);
    });
    return(
            <View style={{
                flex:1,
                backgroundColor: '#000000',
                }}>

                <View style={{
                alignItems: 'center',
                paddingTop: 100,
                }}>
                    <CipuyCoffee />
                </View>

                <View style={{ alignItems: 'center', }}>
                    <Text style={{ paddingTop: 250, fontStyle: 'normal', fontSize: 12, color: '#C68A65'}}>
                        by Cipuy</Text>
                </View>
                
            </View>
            
    );
};

export default Splash;