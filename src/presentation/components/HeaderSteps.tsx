import { View, Text, StyleSheet  } from "react-native";

interface HeaderProps {
    step: number;
    totalSteps: number;
}
export default function Onboarding ({step, totalSteps}: HeaderProps) {
    const progress = step / totalSteps;

    return(
        <View style={styles.container}>
              {/* Fila superior: Botón Atrás, Título centrado y Contador */}
              <View style={styles.topRow}>
                
                  <Text style={{color: '#1069c2', fontSize: 16, fontWeight: '700'}}>Cineteca</Text>
                  <Text style={styles.stepText}>
                    Paso {step} de {totalSteps}
                  </Text>
               
              </View>
        
              {/* Fila inferior: Barras de progreso segmentadas (#2f6df6 y radio 99px) */}
              <View style={styles.progressContainer}>
                {Array.from({ length: totalSteps }).map((_, index) => {
                  const isActive = index < step;
                  return (
                    <View
                      key={index}
                      style={[
                        styles.segment,
                        isActive ? styles.activeSegment : styles.inactiveSegment,
                      ]}
                    />
                  );
                })}
              </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
    topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  leftColumn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerColumn: {
    flex: 2,
    alignItems: 'center',
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  stepText: {
    color: '#8da0ce',
    fontSize: 14,
    fontWeight: '500',
  },
   progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  segment: {
    flex: 1,
    height: 4,
    borderRadius: 99,
  },
  activeSegment: {
    backgroundColor: '#2f6df6',
  },
  inactiveSegment: {
    backgroundColor: '#e1e9f8',
  },
})