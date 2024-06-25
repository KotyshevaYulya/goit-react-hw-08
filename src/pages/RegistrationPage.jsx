import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';

export default function RegistrationPage() {
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        email: "",
        password: "",
    }; 
    
    const handleSubmit = (values, actions) => { 
        dispatch(register(values));
		actions.resetForm();
    };
    
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}>
            <Form>
                <label>
                    Name
                    <Field type="text" name="name"/>
                </label>
                <label>
                    Email
                    <Field type="email" name="email"/>
                </label>
                <label>
                    Password
                    <Field type="password" name="password"/>
                </label>
				<button type="submit">Submit</button>
			</Form>
        </Formik>
    )
}
