import "./Input.css";

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  ...props
}) {
  return (
    <div className="input-group">
      <label className="input-label">
        {label}
        {required && <span className="required">*</span>}
      </label>

      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        />
    </div>
  );
}

export default Input;