import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";

const App = () => {
  const [nome, setNome] = useState("");
  const [saudacao, setSaudacao] = useState("");

  const obterSaudacao = () => {
    const hora = new Date().getHours();
    if (hora < 12) return "Bom dia";
    if (hora < 18) return "Boa tarde";
    return "Boa noite";
  };

  const atualizarSaudacao = () => {
    if (nome.trim()) {
      setSaudacao(`${obterSaudacao()}, ${nome}! Bem-vindo(a) ao nosso App!`);
    }
  };

  const limparSaudacao = () => {
    setNome("");
    setSaudacao("");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://via.placeholder.com/150" }} style={styles.image} />
      <Text style={styles.title}>Olá, {nome || "Usuário"}!</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Atualizar Saudação" onPress={atualizarSaudacao} />
      <Button title="Limpar" onPress={limparSaudacao} color="red" />
      {saudacao ? <Text style={styles.saudacao}>{saudacao}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: "80%",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  saudacao: {
    fontSize: 18,
    marginTop: 20,
    color: "green",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default App;
