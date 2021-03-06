import './index.scss';

export const Input = (props) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={props.name}>
                {props.label}
                {
                    props.required &&
                    <span>
                        (required)
                    </span>
                }
            </label>
            <input {...props} />
            {
                props.error &&
                <span className='error'>
                    {props.error}
                </span>
            }
        </div>
    )
}