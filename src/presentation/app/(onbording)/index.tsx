import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useRouter } from "expo-router";
import  HeaderSteps  from '../../components/HeaderSteps';



export default function Onboarding () {
    
    const router = useRouter();

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: '#f6f9fe' }}>
            <HeaderSteps step={1} totalSteps={3} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 16 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, backgroundColor: '#5087e4', padding: 8, borderRadius: 18 }}>
                <Text style={{ fontSize: 30, fontWeight: '700', marginBottom: 8 }}>🎞️</Text>
                </View>
                 <Text style={styles.title}>
                    Una pelicula a la vez
                </Text>
                <Text style={styles.subtitle}>
                    Deslizá a la derecha lo que querés ver, a la izquierda lo que no. Sin cuentas ni contraseñas: tu lista vive en este teléfono
                </Text>
                <Text style={styles.disclaimer}>
                    Datos de TMDB. Este producto usa la API de TMDB pero no está avalado ni certificado por TMDB.
                </Text>
            </View>

            <View>
                <Pressable 
                onPress={() => router.push('/step-2')}
                 style={{ backgroundColor: '#2f6df6', padding: 12, borderRadius: 18, marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' , textAlign: 'center'}}>Empezar</Text>
                    
                </Pressable>
                <Pressable style={{ padding: 12, marginTop: 4 }}>
                    <Text style={{ color: '#2f6df6', fontSize: 16, fontWeight: '700' , textAlign: 'center'}}>Saltar y ver peliculas</Text>
                    
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  
 
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 32,
    fontWeight: '600',
    marginTop: -4,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#191a1b',
    alignItems: 'flex-start',
  },
  subtitle: {
    fontSize: 16,
    color: '#838282',
    textAlign: 'left',
    marginTop: 8,
  },
  disclaimer: {
    fontSize: 12,
    color: '#a7a5a5',
    textAlign: 'left',
    marginTop: 8,
  },
  
 
});