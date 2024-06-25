import { createSlice,  createSelector} from "@reduxjs/toolkit";
import { selectContact } from "../contacts/selectors";
import {selectFilterName} from "./selectors"

const slice = createSlice({
    name: 'filters',
    initialState: { name: "" },
    reducers: {changeFilter: (state, action) => {
             state.name = action.payload;
    }   
    }
    
})

export default slice.reducer; 

export const { changeFilter } = slice.actions; 

export const selectVisibleContacts = createSelector([selectFilterName, selectContact],
    (filters, contacts) => {
             return contacts.filter(obj =>
        obj.name.toLowerCase().includes(filters.toLowerCase()));
      })