import { View, Text, Pressable } from "react-native";

export const Deck = () =>{

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingHorizontal: 16, marginBottom: 16 }}>
                <View>
                <Text style={{color: '#1069c2', fontSize: 16, fontWeight: '700'}}>Cineteca</Text>
                <Text>3 de 10 peliculas</Text>
                </View>

               <View>
                <Pressable>
                    <Text>Mi lista</Text>
                </Pressable>
                </View> 
            </View>
        </View>
    )
}