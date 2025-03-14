import { Stack, Slot } from "expo-router";
import { View, Text } from "react-native";

export default function Layout() {
  // Slot vai renderizar o conteúdo da atual rota. Podemos por exemplo criar um header e um footer fixos
  // e deixar o conteúdo da rota no Slot
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <Text style={{ fontSize: 24, textAlign: "center", margin: 20 }}>
          Meu app
        </Text>
        <Slot />
      </View>
    </>
  );
}

import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialPath="/">
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen name="historico" options={{ title: "Histórico" }} />
    </Stack>
  );
}

<CameraView
  style={styles.camera}
  facing={facing}  // controla qual câmera usar (frontal ou traseira)
  barcodeScannerSettings={{
    barcodeTypes: ["qr"],  // configura para detectar apenas códigos QR
  }}
  onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}  // função chamada quando um código é detectado
/>