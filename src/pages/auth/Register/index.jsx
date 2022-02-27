import { useCallback, useState } from 'react';
import { AuthLayout, Input, Button } from 'src/components';
import { registerUser } from 'src/services';
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
            await registerUser(form);
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
                <div className='register-form'>
                    <h2>
                        Let's get you <b>setup</b>,
                    </h2>
                    <p>
                        Build app at a speed you've never experienced before.
                    </p>
                    <p className='error'>{errors.non_field_errors?.join(', ')}</p>
                    <form onSubmit={submitForm}>
                        <Input
                            label="Enter Full Name"
                            name="name"
                            onChange={onChange}
                            error={errors.name}
                            required
                        />
                        <Input
                            label="Enter Email"
                            name="email"
                            onChange={onChange}
                            error={errors.email}
                            required />
                        <Input
                            label="Enter Password"
                            name="password"
                            onChange={onChange}
                            error={errors.pasword}
                            type="password" required />
                        <Button disabled={loading}> {loading ? "Loading..." : "Proceed"} </Button>
                    </form>

                </div>
            </div>
        </AuthLayout >
    )
}

export default Register;