import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import LogoLima from '../../../assets/logos/l3.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class index extends React.Component {


    render() {
        return (
            <View style={styles.container}>
            <View style={{
              alignItems: 'center',
              paddingTop: 30,}}>
              <LogoLima/>
            </View>

            <Text style={styles.namaminuman}>
                CLASSIC
            </Text>
            <Text style={styles.deskripsi}>
                {"\n"}
                Cold Latte atau Caffè latte (Bahasa Italia yang artinya kopi susu)
                adalah espresso atau kopi yang dicampur dengan susu dan memiliki lapisan
                busa yang tipis di bagian atasnya.
            </Text>
            <Text style={styles.garis}>__________________________________________________{"\n"}</Text>
            <Text style={styles.spektebal}>
                Energi Total                                                          60kkal
            </Text>
            <Text style={styles.spektipis}>
                -Energi dari lemak                                               20kkal
            </Text>
            <Text style={styles.spektebal}>
                Lemak Total                                                                 2g
            </Text>
            <Text style={styles.spektebal}>
                Karbohidrat Total                                                     11g
            </Text>
            <Text style={styles.spektipis}>
                -Gula total                                                                     4g
            </Text>
            <Text style={styles.spektipis}>
                -Surkosa                                                                        0g
            </Text>
            <Text style={styles.spektebal}>
                Natrium                                                                   30mg
            </Text>

            <Text> {"\n"} {"\n"} </Text>
            
            <TouchableOpacity
                style={{alignItems:'center'}}
                onPress={() => this.props.navigation.navigate('BSatu')}>
                <Text style = {styles.textbutton}>
                Buy for 30K
                </Text>
            </TouchableOpacity>
            
        </View>
        );
    
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#2363AB',
    },

    namaminuman: {
        textAlign: 'center',
        color: '#FFFFFF',
    },

    deskripsi: {
        color: '#FFFFFF',
        fontSize: 12,
    },

    garis: {
        color: '#FFFFFF',
    },

    spektebal: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 3
    },

    spektipis: {
        color: '#FFFFFF',
        padding: 3
    },

    textbutton: {
        padding: 15,
      backgroundColor: '#FFFFFF',
      borderRadius: 100,
      color: '#2363AB',
      width: 120,
      textAlign: 'center',
      fontWeight: 'bold',
      

    }


});