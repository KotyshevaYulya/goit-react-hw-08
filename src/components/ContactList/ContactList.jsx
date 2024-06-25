import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux"; 
import { deleteContact } from "../../redux/contacts/operations";
import { selectVisibleContacts } from "../../redux/filters/slice";



export default function ContactList() {
    const filteredContacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch(); 
    
        const hendelDelate = (idToDelete) => {
        dispatch(deleteContact(idToDelete));
        };
    
    return (
        <>
            <ul>
            {filteredContacts.map((contact) =>(
                <li key={contact.id}>
                    <Contact contact={contact} deleteContact={hendelDelate} />
                </li>
            ))}
        </ul>
        </>
)
}