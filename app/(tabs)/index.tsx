import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';

const products = [
  {
    id: 1,
    title: 'Headset Gaming RGB',
    price: 'Rp 250.000',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    spec: 'Driver 40mm, RGB Light, Microphone, Noise Reduction',
    description:
      'Headset gaming dengan suara jernih dan desain modern. Cocok digunakan untuk bermain game, meeting, dan mendengarkan musik.',
    usage:
      'Cocok untuk gaming, belajar online, meeting, dan hiburan sehari-hari.',
    discount: true,
  },
  {
    id: 2,
    title: 'Mechanical Keyboard',
    price: 'Rp 300.000',
    image:
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500',
    spec: 'Switch Blue, RGB Lighting, Anti Ghosting',
    description:
      'Keyboard mekanik dengan tombol responsif, lampu RGB, dan desain yang nyaman untuk penggunaan jangka panjang.',
    usage:
      'Cocok untuk mengetik, gaming, tugas kuliah, dan penggunaan kantor.',
    discount: false,
  },
  {
    id: 3,
    title: 'Wireless Mouse',
    price: 'Rp 150.000',
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    spec: '2.4GHz Wireless, 1600 DPI, Ergonomic Design',
    description:
      'Mouse wireless yang ringan, nyaman digenggam, dan memiliki akurasi tinggi untuk berbagai kebutuhan.',
    usage:
      'Cocok untuk browsing, desain ringan, pekerjaan kantor, dan belajar.',
    discount: false,
  },
  {
    id: 4,
    title: 'LED Monitor 24 Inch',
    price: 'Rp 1.500.000',
    image:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
    spec: 'Full HD, IPS Panel, 75Hz Refresh Rate',
    description:
      'Monitor dengan tampilan tajam dan warna jernih. Nyaman digunakan untuk kerja, belajar, maupun hiburan.',
    usage:
      'Cocok untuk desain, belajar, menonton, dan kebutuhan kerja harian.',
    discount: false,
  },
];

export default function HomeScreen() {
  const goToDetail = (item: (typeof products)[number]) => {
    router.push({
      pathname: '/detail',
      params: {
        title: item.title,
        price: item.price,
        image: item.image,
        spec: item.spec,
        description: item.description,
        usage: item.usage,
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>TechGears Store</Text>
        <Text style={styles.subText}>Katalog produk elektronik modern</Text>
      </View>

      <View style={styles.grid}>
        {products.map((item) => (
          <Pressable
            key={item.id}
            style={styles.card}
            onPress={() => goToDetail(item)}
          >
            {item.discount && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>OFF</Text>
              </View>
            )}

            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#0a0a96',
    minHeight: '100%',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 10,
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 90,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  cardPrice: {
    color: '#000000',
    fontSize: 14,
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 1,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});