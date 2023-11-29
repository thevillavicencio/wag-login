export const Input = ({ id, type, label, disabled, onChange, value }) => (
  <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled} onChange={onChange} value={value} />
);