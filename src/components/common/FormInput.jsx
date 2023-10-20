const FormInput = ({error, name, label, type, onChange, value}) => {
    return (  
        <div className="my-form-group">
        <label htmlFor={name} className="my-label my-label--primary my-label--block">{label}</label>
        <input type={type} className="my-input my-input--block" aria-label={label} onChange={onChange} value={value} id={name} name={name}/>
        {error && <div className="my-alert my-alert-danger" >{error}</div>}
    </div>
    );
}
 
export default FormInput;