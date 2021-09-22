import { useState } from "react"
import { goToListPage } from "../router/coordinator"
import { useHistory } from "react-router"

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const history = useHistory()

    const handleInputChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const changeThePage = () => {
        setForm(initialState)
        goToListPage(history)
    }

    return [form, handleInputChange, changeThePage]
}

export default useForm