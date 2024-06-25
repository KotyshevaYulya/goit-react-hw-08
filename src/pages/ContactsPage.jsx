import css from "../components/App/App.module.css"
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/CotactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations"
import { loading, error } from "../redux/contacts/selectors";


export default function Phonebook() {
    const dispatch = useDispatch();
    const isLoading = useSelector(loading);
    const isError = useSelector(error);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    return ( 
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm/>
            <SearchBox />
            {isLoading && <p>Loading ...</p>}
            {isError && <p>Is Error!</p>}
            < ContactList/>
        </div>
)
};

