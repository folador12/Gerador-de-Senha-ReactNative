import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
  } from "react-native";
  import { useState} from "react";
  import Slider from "@react-native-community/slider";
  import { ModalPassword } from "../../components/Modal";
  
  export function Home() {
    const [size, setSize] = useState(10);
    const [password, setPassword] = useState("");
    const [modalvisible, setModalVisible] = useState(false);
    let charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    const generatePassword = () => {
      let password = "";
      for (let i = 0, n = charset.length; i < size; i++) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
  
      setPassword(password);
      setModalVisible(true);
    };
  
    //useEffect(() => {}, [size]);
    return (
      <View style={styles.container}>
        <Image source={require("../..//assets/logo.png")} style={styles.logo} />
        <Text style={styles.titulo}>{size} Caracteres</Text>
  
        <View style={styles.area}>
          <Slider
            style={{ height: 50 }}
            minimumValue={6}
            maximumValue={20}
            maximumTrackTintColor="#FF0000"
            minimumTrackTintColor="#000"
            thumbTintColor="#392de9"
            value={size}
            onValueChange={(valor) => setSize(parseInt(valor))}
          ></Slider>
        </View>
  
        <TouchableOpacity style={styles.botao} onPress={generatePassword}>
          <Text style={styles.botaoTexto}>Gerar senha</Text>
        </TouchableOpacity>
  
        <Modal visible={modalvisible} animationType="fade">
          <ModalPassword
            password={password}
            handleClose={() => setModalVisible(false)}
          />
        </Modal>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F3F3FF",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      marginBottom: 60,
    },
    area: {
      marginTop: 14,
      marginBottom: 14,
      width: "80%",
      backgroundColor: "#FFF",
      borderRadius: 8,
      padding: 8,
    },
    botao: {
      backgroundColor: "#392de9",
      width: "80%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      marginBottom: 18,
    },
    botaoTexto: {
      fontSize: 20,
      color: "#FFF",
    },
    titulo: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });
  