import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Diceone from './assets/dice1.png';
import Dicetwo from './assets/dice2.png';
import Dicethree from './assets/dice3.png';
import Dicefour from './assets/dice4.png';
import Dicefive from './assets/dice5.png';
import Dicesix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(Diceone);
  const [color, setBg] = useState("rgb(32, 0, 126)");

  const RollIt = () => {
     let randomNumber = Math.floor(Math.random()*6 + 1) ;
     let randomcolor = "rgb(" +
       Math.floor(Math.random() * 256) +
       "," +
       Math.floor(Math.random() * 256) +
       "," +
       Math.floor(Math.random() * 256) +
       ")";
       
     switch (randomNumber) {
       case 1:
         setUri(Diceone);
        // setBg(randomcolor);
         break;
        case 2:
          setUri(Dicetwo);
          //setBg(randomcolor);
          break;
        case 3:
          setUri(Dicethree);
          //setBg(randomcolor);
            break;
        case 4:
          setUri(Dicefour);
          //setBg(randomcolor);
          break;
        case 5:
          setUri(Dicefive);
          //setBg(randomcolor);
          break;
        case 6:
          //setBg(randomcolor);
          setUri(Dicesix);
          break;
       default:
         //setBg(randomcolor);
         setUri(DiceSix);
         break;
     }
}
  return (
    <>
    <View style = {[styles.container, {backgroundColor: "#172E45"}]}>
      <Image source = {uri} style = {styles.image} />
      <TouchableOpacity onPress = {RollIt}>
        <Text style = {styles.buttonText}>
          Roll it!
        </Text>
      </TouchableOpacity>
    </View>
    </>
  )
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 150,
    width: 150,
  },
  buttonText: {
    fontSize: 30,
    borderWidth: 2,
    borderRadius: 2,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 15,
    borderColor: "#FFF",
    elevation: 2,
    color: "#FFF",
  },
});