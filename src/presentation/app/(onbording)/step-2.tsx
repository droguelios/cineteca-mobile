import { View, Text, Pressable, StyleSheet } from "react-native";
import HeaderSteps from "../../components/HeaderSteps";
import React, { useState } from "react";
import { useRouter } from "expo-router";

export type Category = {
  id: string;
  name: string;
};

const CATEGORIES: Category[] = [
  { id: "drama", name: "Drama" },
  { id: "crimen", name: "Crimen" },
  { id: "sci-fi", name: "Ciencia ficción" },
  { id: "romance", name: "Romance" },
  { id: "documental", name: "Documental" },
  { id: "comedia", name: "Comedia" },
  { id: "animacion", name: "Animación" },
  { id: "terror", name: "Terror" },
  { id: "musical", name: "Musical" },
  { id: "aventura", name: "Aventura" },
];
interface CategorySelectorProps {
  onSelectionChange?: (selectedIds: string[]) => void;
}
export const Step2 = ({ onSelectionChange }: CategorySelectorProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const router = useRouter();

  const toggleCategory = (id: string) => {
    const updated = selectedCategories.includes(id)
      ? selectedCategories.filter((catId) => catId !== id)
      : [...selectedCategories, id];

    setSelectedCategories(updated);
    if (onSelectionChange) onSelectionChange(updated);
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f6f9fe" }}>
      <HeaderSteps step={2} totalSteps={3} />
      <View>
        <Text style={styles.title}>Que te gustaria ver?</Text>
        <Text style={styles.subtitle}>
          Elegí al menos tres géneros. Podés cambiarlos cuando quieras.
        </Text>
      </View>
      <View style={styles.container}>
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategories.includes(category.id);

          return (
            <Pressable
              key={category.id}
              onPress={() => toggleCategory(category.id)}
              style={[
                styles.chip,
                isSelected ? styles.chipSelected : styles.chipUnselected,
              ]}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: isSelected }}
              accessibilityLabel={`Categoría ${category.name}`}
            >
              <Text
                style={[
                  styles.chipText,
                  isSelected ? styles.textSelected : styles.textUnselected,
                ]}
              >
                {category.name}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={{ marginTop: "auto" }}>
        <Pressable
          onPress={() => router.push("/step-3")}
          disabled={selectedCategories.length < 3}
          style={[
            selectedCategories.length < 3
              ? {
                  backgroundColor: "#a0c4ff",
                  padding: 12,
                  borderRadius: 18,
                  marginTop: 20,
                }
              : {
                  backgroundColor: "#2f6df6",
                  padding: 12,
                  borderRadius: 18,
                  marginTop: 20,
                },
          ]}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
          {selectedCategories.length < 3  ? `Selecciona ${3 - selectedCategories.length} mas` : "Empezar"} 
         
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
    flexDirection: "row", // Cambiado a 'column' para apilar verticalmente
    flexWrap: "wrap", // Permite que los elementos se ajusten a la siguiente línea
    gap: 10, // Espaciado horizontal y vertical uniforme
    padding: 16,
  },
  chip: {
    padding: 12,
    borderRadius: 99, // Utiliza el token de radio 99px
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chipSelected: {
    backgroundColor: "#2f6df6", // Color primario (#2f6df6)
    borderColor: "#2f6df6",
  },
  chipUnselected: {
    backgroundColor: "#ffffff",
    borderColor: "#e1e9f8",
  },
  chipText: {
    fontSize: 14,
    fontWeight: "600",
  },
  textSelected: {
    color: "#ffffff",
  },
  textUnselected: {
    color: "#414f62",
  },
});
