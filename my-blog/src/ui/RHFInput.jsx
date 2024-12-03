function RHFInput({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  validationSchema = {},
  isRequired,
  ...rest
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={name} className="text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input className="textField__input"
        type={type}
        name={name}
        id={name}
        autoComplete="off"
        dir={dir}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors && errors[name] && <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>}
    </div>
  );
}

export default RHFInput;
