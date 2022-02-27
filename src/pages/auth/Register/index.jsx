import { AuthLayout, Input } from 'src/components';
import { Button } from '../../../components/Button';
import './index.scss';

const Register = () => {
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
                    <form>
                        <Input label="Enter Full Name" required />
                        <Input label="Enter Email" required />
                        <Input label="Enter Password" type="password" required />
                        <Button> Proceed </Button>
                    </form>

                </div>
            </div>
        </AuthLayout >
    )
}

export default Register;