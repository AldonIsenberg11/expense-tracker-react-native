import { Text, View } from "react-native"
import { StyleSheet } from "react-native"
import Input from "./Input"

function ExpenseForm() {
    function amountChangedHandler() {}
    return (
        <View>
            <Input 
                label='Amount'
                textInputConfig={{
                    KeyboardEvent: 'decimal-pad',
                    onChangeText: amountChangedHandler,
                }}
            />
            <Input 
                label='Date'
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: () => {},
                }}
            />
            <Input 
                label='Description'
                textInputConfig={{}}
            />
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({})