import { useId } from "react";
import css from "./SearchBox.module.css"
import { useSelector, useDispatch } from "react-redux";
import { selectFilterName } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice"; 



export default function SearchForm() {
    const filter = useSelector(selectFilterName);

    const dispatch = useDispatch(); 

    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value));   
    };

    const fieldId = useId();
    return (
        <div className={css.searchContainer}>
            <label htmlFor={fieldId} className={css.searchForm}>
                Find contact by name
                <input type="text" onChange={handleChange} value={filter} id={fieldId}/>
            </label>
        </div>
    )
}