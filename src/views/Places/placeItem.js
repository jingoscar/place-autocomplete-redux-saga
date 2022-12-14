import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Alert } from "react-native";
import { List, SwipeAction } from "@ant-design/react-native";
import { useDispatch } from "react-redux";
import { removeHistory, saveHistory } from "../../actions/place";
import styles from "../../styles/globalStyles";


const PlaceItem = ({item, type}) =>{
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const action = [
        {
            text: 'Delete',
            onPress: () => deleteHistory(item),
            backgroundColor: 'red',
            color: 'white',
        },
    ]

    const deleteHistory = (history) => {
        dispatch(removeHistory(history));
        Alert.alert(history.name + ' is deleted.')
    }

    const Item = List.Item ;
    return (
        <View>
            <SwipeAction
            buttonWidth ={80}
            right={action}
            >
            <Item style = {styles.placeItem}
            onPress={() => {
                if (type == 'Results') {
                    dispatch(saveHistory(item));
                }
                navigation.navigate('Map', { place: item });
            }}>
            <Text style={styles.placeName}>{item.name}</Text>
            </Item>
            </SwipeAction>
        </View>
    )
}

export default PlaceItem;