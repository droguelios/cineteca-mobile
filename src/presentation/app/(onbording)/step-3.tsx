import { Pressable, Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import HeaderSteps from "../../components/HeaderSteps";

export type Eras = {
  id: string;
  name: string;
};

type minimunNote = {
  id: string;
  name: string;
};

const ERAS: Eras[] = [
  { id: "50s", name: "50s" },
  { id: "60s", name: "60s" },
  { id: "70s", name: "70s" },
  { id: "90s", name: "90s" },
  { id: "2010s", name: "2010s" },
  { id: "2020s", name: "2020s" },
];

const MINIMUM_NOTES: minimunNote[] = [
  { id: "Todas", name: "Todas" },
  { id: "6+", name: "6+" },
  { id: "7+", name: "7+" },
  { id: "8+", name: "8+" },
];
interface ErasSelectorProps {
  onSelectionChange?: (selectedIds: string[]) => void;
}
export const Step3 = ({ onSelectionChange }: ErasSelectorProps) => {
  const [selectedEras, setSelectedEras] = useState<string[]>([]);
  const [selectedMinimumNotes, setSelectedMinimumNotes] = useState<
    string | null
  >("Todas");
  const router = useRouter();

  const toggleEra = (id: string) => {
    const updated = selectedEras.includes(id)
      ? selectedEras.filter((eraId) => eraId !== id)
      : [...selectedEras, id];
    setSelectedEras(updated);
    if (onSelectionChange) {
      onSelectionChange(updated);
    }
  };
  const handleMinimumNote = (id: string) => {
    setSelectedMinimumNotes((prevId) => (prevId === id ? null : id));
  };
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f6f9fe" }}>
      <HeaderSteps step={3} totalSteps={3} />
      <View style={styles.container}>
        <Text style={styles.title}>Épocas</Text>

        <View style={styles.container1}>
          {ERAS.map((era) => {
            const isSelected = selectedEras.includes(era.id);
            return (
              <Pressable
                key={era.id}
                onPress={() => toggleEra(era.id)}
                style={[
                  styles.chip,
                  isSelected ? styles.chipSelected : styles.chipUnselected,
                ]}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: isSelected }}
                accessibilityLabel={`Categoría ${era.name}`}
              >
                <Text
                  style={[
                    styles.chipText,
                    isSelected ? styles.textSelected : styles.textUnselected,
                  ]}
                >
                  {era.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <Text style={styles.title}>Nota mínima</Text>
        <View style={styles.container2}>
          {MINIMUM_NOTES.map((note) => {
            const isSelected = selectedMinimumNotes?.includes(note.id);
            return (
              <Pressable
                key={note.id}
                onPress={() => handleMinimumNote(note.id)}
                disabled={selectedMinimumNotes?.length === 1 && !isSelected}
                style={[
                  styles.chip1,
                  isSelected ? styles.chipSelected1 : styles.chipUnselected1,
                ]}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: isSelected }}
                accessibilityLabel={`Categoría ${note.name}`}
              >
                <Text
                  style={[
                    styles.chipText,
                    isSelected ? styles.textSelected1 : styles.textUnselected,
                  ]}
                >
                  {note.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <Text
          style={{
            fontSize: 12,
            color: "#858688",
            marginTop: 8,
            textAlign: "left",
          }}
        >
          Sólo contamos películas con más de 200 votos, así una rareza con tres
          votantes no se cuela.
        </Text>
      </View>
      <View style={{ marginTop: "auto" }}>
        <Pressable onPress={() => router.push("./deck")} style={styles.button}>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Ver películas
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.back()}
          style={{ padding: 12, marginTop: 4 }}
        >
          <Text style={{ color: "#adaeb1", fontSize: 16, textAlign: "center" }}>
            Atras
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#858688",
    marginBottom: 16,
  },
  container: {
    gap: 10,
    paddingTop: 16,
  },
  container1: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  container2: {
    flexDirection: "row",
    width: "100%",
    padding: 4,
    backgroundColor: "#d4e2fb",
    borderRadius: 20,
  },
  chip: {
    padding: 14,
    width: 100,
    paddingVertical: 18,
    borderRadius: 20, // Utiliza el token de radio 20px
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chip1: {
    flex: 1,
    minHeight: 52,
    borderRadius: 20, // Utiliza el token de radio 20px
    alignItems: "center",
    justifyContent: "center",
  },
  chipSelected: {
    backgroundColor: "#2f6df6", // Color primario (#2f6df6)
    borderColor: "#2f6df6",
  },
  chipSelected1: {
    backgroundColor: "#f8faff",
    borderColor: "#2f6df6",
  },
  chipUnselected: {
    backgroundColor: "#ffffff",
    borderColor: "#e1e9f8",
  },
  chipUnselected1: {
    backgroundColor: "#d4e2fb",
    borderColor: "#d4e2fb",
  },
  chipText: {
    fontSize: 14,
    fontWeight: "600",
  },
  textSelected: {
    color: "#ffffff",
  },
  textSelected1: {
    color: "#2f6df6",
  },
  textUnselected: {
    color: "#414f62",
  },
  button: {
    backgroundColor: "#2f6df6",
    padding: 12,
    borderRadius: 18,
    marginTop: 20,
  },
});
