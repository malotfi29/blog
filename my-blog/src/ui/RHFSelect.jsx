function RHFSelect({ label, name, register, options, isRequired }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {isRequired && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField__input">
        {options.map((option) => (
          <option className="" key={option._id} value={option._id}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
export default RHFSelect;
