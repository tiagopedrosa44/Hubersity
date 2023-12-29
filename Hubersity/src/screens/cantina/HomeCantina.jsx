import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Background from '../../assets/Home/backgorund.svg';
import BtnSvg from '../../assets/Home/btn.svg';
import BtnInvertedSvg from '../../assets/Home/btnInverted.svg';
import LottieView from 'lottie-react-native';

const HomeCantina = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View>
          <View style={styles.Background}>
            <Background />
          </View>
          <View style={styles.title}>
            <Text style={styles.txt}>Cantina</Text>
          </View>
        </View>
        

        <View style={styles.main}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Ementas')}
            style={styles.btn}>
            <Text style={[styles.btnTxt, styles.ementasTxt]}>Ementas</Text>
            <BtnSvg width={300} height={131} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Marcacoes')}
            style={styles.btn}>
            <Text style={[styles.btnTxt, styles.marcacoesTxt]}>
              Marcar{'\n'}refeições
            </Text>
            <BtnInvertedSvg width={300} height={131} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MarcacoesPendentes')}
            style={styles.btn}>
            <Text style={[styles.btnTxt, styles.pendentesTxt]}>
              Marcações{'\n'}por consumir
            </Text>
            <BtnSvg width={300} height={131} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MarcacoesPendentes')}
            style={styles.btn}>
            <Text style={[styles.btnTxt, styles.historicoTxt]}>Histórico</Text>
            <BtnSvg width={300} height={131} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: '15%',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  Background: {
    position: 'absolute',
    zIndex: -1,
  },
  title: {
    marginTop: '15%',
    alignItems: 'center',
  },
  txt: {
    fontSize: 27,
    color: '#F8F9FA',
  },
  main: {
    marginTop: '50%',
    alignItems: 'center',
  },
  btn: {
    width: '90%',
    height: 131,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  btnTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F8F9FA',
    position: 'absolute',
    zIndex: 1,
    textAlign: 'center',
  },
  ementasTxt: {
    paddingLeft: '20%',
  },
  marcacoesTxt: {
    paddingRight: '30%',
  },
  pendentesTxt: {
    paddingLeft: '25%',
  },
  historicoTxt: {
    paddingLeft: '25%',
  },
  ani: {
    height: "10%",
    borderWidth: 1,
    position: 'fixed',
  },
});

export default HomeCantina;
