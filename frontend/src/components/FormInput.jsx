import { forwardRef } from 'react';

const FormInput = forwardRef(({ label, id, type = 'text', value, onChange, error, name, autoComplete, trailingIcon, onIconClick }, ref) => (
  <div className="form-field">
    <div className="input-wrapper">
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder=" "
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <label htmlFor={id}>{label}</label>
      {trailingIcon && (
        <button type="button" className="icon-button" onClick={onIconClick} aria-label="Toggle password visibility">
          {trailingIcon}
        </button>
      )}
    </div>
    {error && (
      <p className="field-error" id={`${id}-error`}>
        {error}
      </p>
    )}
  </div>
));

export default FormInput;
