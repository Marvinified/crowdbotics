import { useCallback, useState } from 'react';
import { AuthLayout, Input, Button } from 'src/components';
import { loginUser } from '../../../services/auth';
import './index.scss';

const Register = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({
        non_field_errors: []
    });
    const [loading, setLoading] = useState(false);
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const submitForm = useCallback(async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);
        try {
            console.log("hello");
            // const auth = Buffer.from(`${form.username}:${form.password}`, 'base64');
            const auth = btoa(`${form.username}:${form.password}`);
            console.log(auth);
            if (auth) {
                localStorage.setItem("authorization", auth)
            }
            await loginUser(form);
        } catch (error) {
            console.log(error);
            const errors = error?.response?.data || {};
            setErrors(errors);
        }
        setLoading(false);
    }, [form])

    return (
        <AuthLayout>
            <div>
                <div className='login-form'>
                    <h2>
                        Welcome back,
                    </h2>
                    <p>
                        Login to your account to continue.
                    </p>
                    <form onSubmit={submitForm}>
                        <Input
                            label="Enter Email"
                            name="email"
                            onChange={onChange}
                            error={errors.email}
                            required
                        />
                        <Input
                            label="Enter Password"
                            type="password"
                            name="password"
                            onChange={onChange}
                            error={errors.password}
                            required
                        />
                        <Button> Proceed </Button>
                    </form>

                </div>
            </div>
        </AuthLayout >
    )
}

export default Register;