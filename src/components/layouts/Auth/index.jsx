import './index.scss';

export const AuthLayout = ({ children }) => {
    return (
        <div className="auth-layout">
            <div>
                <img src={require('src/assets/cb-logo.png')} alt="logo" />
                <h2>
                    Build your apps, but <b>Faster.</b>
                </h2>
                <p>
                    Crowdbotics is the easiest way to build software applications, trusted by hundreds of teams. Sign up to start building your application.
                </p>
            </div>
            {children}
        </div>
    )
}

