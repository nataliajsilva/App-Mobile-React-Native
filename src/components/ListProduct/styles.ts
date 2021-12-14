import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        padding: 24
      },
      row: {
        padding: 4,
        borderBottomColor: "blue",
        borderBottomWidth: StyleSheet.hairlineWidth
      },

    container_fabricante: {
        padding: 7,
        marginTop: 3,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray'
    },

    text: {
        fontSize: 18,
        textAlign: "justify"
    },

    title: {
        fontSize: 20,
        fontWeight: "bold"
    }

}
);
