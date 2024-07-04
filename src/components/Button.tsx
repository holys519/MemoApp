import { View, Text, StyleSheet } from "react-native";

interface Props {
    label: string
}

const Button = (props: Props) => {
    const { label } = props
    return (
    <View style={styles.Button}>
        <Text style={styles.ButtonLabel}>{label}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    ButtonLabel: {
        fontSize: 16,
        lineHeight: 32,
        color: '#ffffff',
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
})

export default Button
