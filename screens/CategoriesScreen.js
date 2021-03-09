import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryMealScreen from './CategoryMealScreen';

const CategoriesScreen = props => {

    /**
     * Returns touchable category menu that is linked to corresponding detail menu.
     */
    const renderData = itemData => {
        return (
            <TouchableOpacity
                style={styles.category}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryID: itemData.item.id
                        }
                    })
                }}
            >
                <View>
                    <Text>
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                numColumns={2}
                data={CATEGORIES}
                renderItem={renderData}
            />
        </View>
    );
};

// Top header style 
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
}

// Ovearall Style
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    category: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;