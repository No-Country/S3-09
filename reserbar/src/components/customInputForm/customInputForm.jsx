// Custom input usign for loginForm
const CustomInputForm = ({
    key,
    type,
    name,
    onChange,
    label,
    value,
    placeholder,
    textError,
    leftIcon,
    rightIcon,
}) => {
    return (
        <div className="inputContent" key={key}>
            <label htmlFor={name} className="inputContent__label">
                {label}
            </label>
            <div className="inputContent__boxInput">
                <div className="inputContent__boxInput__icons">
                    {leftIcon}
                    {rightIcon}
                </div>
                <input
                    className={"inputContent__boxInput__box"}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    name={name}
                    id={name}
                    type={type}
                />
            </div>
            <p className="inputContent__errorMessage">{textError}</p>
        </div>
    );
};

export default CustomInputForm;
