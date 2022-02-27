import { AuthLayout, Input } from 'src/components';
import { Button } from '../../../components/Button';
import './index.scss';

const Login = () => {
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
                    <form>
                        <Input label="Enter Email" required />
                        <Input label="Enter Password" type="password" required />
                        <Button> Proceed </Button>
                    </form>

                </div>
            </div>
        </AuthLayout >
    )
}

export default Login;