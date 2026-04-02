import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function DetailScreen() {
  const { title, price, image, spec, description, usage } =
    useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Detail Produk',
          headerBackTitle: 'Kembali',
        }}
      />

      <ScrollView style={styles.container}>
        <Image source={{ uri: String(image) }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Deskripsi Produk</Text>
            <Text style={styles.text}>{description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Spesifikasi</Text>
            <Text style={styles.text}>{spec}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Kegunaan</Text>
            <Text style={styles.text}>{usage}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    color: '#ffcc00',
    fontSize: 18,
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
    backgroundColor: '#1f1f1f',
    padding: 12,
    borderRadius: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  text: {
    color: '#ddd',
    fontSize: 14,
    lineHeight: 22,
  },
});