const FormInput = ({error, name, label, type, onChange, value}) => {
    return (  
        <div className="form-group">
        <label htmlFor={name} className="label label--primary label--block">{label}</label>
        <input type={type} className="input input--block" aria-label={label} onChange={onChange} value={value} id={name} name={name}/>
        {error && <div className="alert alert-danger" >{error}</div>}
    </div>
    );
}
 
export default FormInput;