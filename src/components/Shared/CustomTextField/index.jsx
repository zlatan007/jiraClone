import { TextField } from "@mui/material"

const CustomTextField = ({
    name,
    value,
    touched,
    error,
    helperText,
    type,
    placeholder,
    handleChange,
    handleBlur,
    required,
    disabled,
    inputClassName,
    rootClassName,
}) => {
    return (
        <TextField
         fullWidth
         size="small"
         required={required}
         type={type}
         placeholder={placeholder}
         disabled={disabled}
         label=""
         error={error}
         name={name}
         value={value}
         touched={touched}
         onChange={handleChange}
         onBlur={handleBlur}
         helperText={helperText}
         variant="outlined"
         slotProps={{
            input: {
              className: inputClassName || "",
            },
            root: {
                className: rootClassName || "",
            },
          }}
        />
    )
}

export default CustomTextField