import axios from 'axios'

export function storeExpense(expenseData) {
    axios.post('https://react-native-course-32316-default-rtdb.firebaseio.com/expenses.json', expenseData)
}