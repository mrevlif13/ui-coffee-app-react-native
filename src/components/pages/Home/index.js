import React from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import LogoSatu from '../../../assets/logos/l1.svg';
import LogoDua from '../../../assets/logos/l2.svg';
import LogoTiga from '../../../assets/logos/l3.svg';
import CoffeeSatu from '../../../assets/icons/c1.svg';
import CoffeeDua from '../../../assets/icons/c2.svg';
import CoffeeTiga from '../../../assets/icons/c3.svg';
import CoffeeEmpat from '../../../assets/icons/c4.svg';
import CoffeeLima from '../../../assets/icons/c5.svg';
import CoffeeEnam from '../../../assets/icons/c6.svg';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {};
  }
  
  render() {
    return (

      <View style={styles.container}>
        <Swiper showsPagination={false}>
          <View>
            <View style={styles.backgroud1} />
            <View style={{
              alignItems: 'center',
              paddingTop: 30,}}>
              <LogoSatu/>
            </View>
            <View style={{ marginHorizontal: 24 }}>
              <Text style={styles.namaminuman}>CAFE LATTE</Text>
              <Text> {"\n"} </Text>     
              <View style={{alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CSatu')}>
                  <CoffeeSatu/> 
                </TouchableOpacity>
              </View>
            </View>
          </View>


          <View>
            <View style={styles.backgroud2} />
            <View style={{
              alignItems: 'center',
              paddingTop: 30,}}>
              <LogoDua/>
            </View>
            <View style={{ marginHorizontal: 24 }}>
              <Text style={styles.namaminuman}>AMERICANO</Text>
              <Text> {"\n"} </Text>      
              <View style={{alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CDua')}>
                  <CoffeeDua/> 
                </TouchableOpacity>
              </View>
            </View>
          </View>


          <View>
            <View style={styles.backgroud3} />
            <View style={{
              alignItems: 'center',
              paddingTop: 30,}}>
              <LogoSatu/>
            </View>
            <View style={{ marginHorizontal: 24 }}>
              <Text style={styles.namaminuman}>TORAJA</Text>
              <Text> {"\n"} </Text>      
              <View style={{alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CTiga')}>
                  <CoffeeTiga/> 
                </TouchableOpacity>
              </View>
            </View>
          </View>


          <View>
            <View style={styles.backgroud4} />
            <View style={{
              alignItems: 'center',
              paddingTop: 30,}}>
              <LogoSatu/>
            </View>
            <View style={{ marginHorizontal: 24 }}>
              <Text style={styles.namaminuman}>NESCAFE</Text>
              <Text> {"\n"} </Text>      
              <View style={{alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CEmpat')}>
                  <CoffeeEmpat/> 
                </TouchableOpacity>
              </View>
            </View>
          </View>


          <View>
            <View style={styles.backgroud5} />
            <View style={{
              alignItems: 'center',
              paddingTop: 60,}}>
              <LogoTiga/>
            </View>
            <View style={{ marginHorizontal: 24 }}>
              <Text style={styles.namaminuman}>CLASSIC</Text>
              <Text> {"\n"} </Text>     
              <View style={{alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CLima')}>
                  <CoffeeLima/> 
                </TouchableOpacity>
              </View>
            </View>
          </View>


          <View>
            <View style={styles.backgroud6} />
            <View style={{
              alignItems: 'center',
              paddingTop: 60,}}>
              <LogoTiga/>
            </View>
            <View style={{ marginHorizontal: 24 }}>
              <Text style={styles.namaminuman}>ENERGY DRINK</Text>
              <Text> {"\n"} </Text>     
              <View style={{alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CEnam')}>
                  <CoffeeEnam/> 
                </TouchableOpacity>
              </View>
            </View>
          </View>
          

        </Swiper>
        

      </View>
      
    )
  };

};
const styles = StyleSheet.create ({
  container: {
    flex:1,
  },

  backgroud1: {
    width: 500,
    height: 1000,
    backgroundColor: "#38220F",
    position: "absolute",
  },

  backgroud2: {
    width: 500,
    height: 1000,
    backgroundColor: "#9C6F44",
    position: "absolute",
  },

  backgroud3: {
    width: 500,
    height: 1000,
    backgroundColor: "#563517",
    position: "absolute",
  },

  backgroud4: {
    width: 500,
    height: 1000,
    backgroundColor: "#775435",
    position: "absolute",
  },

  backgroud5: {
    width: 500,
    height: 1000,
    backgroundColor: "#2363AB",
    position: "absolute",
  },

  backgroud6: {
    width: 500,
    height: 1000,
    backgroundColor: "#671919",
    position: "absolute",
  },

  namaminuman: {
    textAlign: 'center',
    color: '#FFFFFF'
  },

});