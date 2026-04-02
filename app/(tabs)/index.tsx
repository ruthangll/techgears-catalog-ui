import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.headerText}>Angel Store</Text>

      <View style={styles.row}>
        <Pressable style={styles.card} onPress={() => goToDetail(products[0])}>
          {products[0].discount && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>OFF</Text>
            </View>
          )}
          <Image source={{ uri: products[0].image }} style={styles.image} />
          <Text style={styles.cardTitle}>{products[0].title}</Text>
          <Text style={styles.cardPrice}>{products[0].price}</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => goToDetail(products[1])}>
          <Image source={{ uri: products[1].image }} style={styles.image} />
          <Text style={styles.cardTitle}>{products[1].title}</Text>
          <Text style={styles.cardPrice}>{products[1].price}</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.card} onPress={() => goToDetail(products[2])}>
          <Image source={{ uri: products[2].image }} style={styles.image} />
          <Text style={styles.cardTitle}>{products[2].title}</Text>
          <Text style={styles.cardPrice}>{products[2].price}</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => goToDetail(products[3])}>
          <Image source={{ uri: products[3].image }} style={styles.image} />
          <Text style={styles.cardTitle}>{products[3].title}</Text>
          <Text style={styles.cardPrice}>{products[3].price}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: '48%',
    backgroundColor: '#2f2f2f',
    borderRadius: 14,
    padding: 10,
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 90,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  cardPrice: {
    color: '#ddd',
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