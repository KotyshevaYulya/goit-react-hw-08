import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';

export default function LoginPage() {
    const dispatch = useDispatch();
    
    const initialValues = {
        email: "",
        password: "",
    };
    
    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
		actions.resetForm();
	};
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}>
            <Form>
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