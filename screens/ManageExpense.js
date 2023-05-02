import { useLayoutEffect } from "react"
import { StyleSheet, Text } from "react-native"

function ManageExpense({route, navigation}) {
    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {  
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])
        
    return (
        <Text>ManageExpense page</Text>
    )
}

export default ManageExpense

const styles = StyleSheet.create({})