import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox, Button } from "react-native";
import Form from "./src/components/Form";
import Footer from "./src/components/Footer";
import colors from "./src/utils/colors";

YellowBox.ignoreWarnings(['Picker has been extracted', 'YellowBox has been replaced'])

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);

  const calculate = () => {
    console.log("capital -->", capital);
    console.log("interest -->", interest);
    console.log("months -->", months);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}/>
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form 
          setCapital={setCapital} 
          setInterest={setInterest} 
          setMonths={setMonths}           
        />
      </SafeAreaView>
      <View>
        <Text>Resultado</Text>
      </View>
      <Footer calculate={calculate} />
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center",
  },
  titleApp:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
  background:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
    position:"absolute",
  }
})