const yup = require('yup')

const registerSchema = yup.object().shape({
    username: yup.string()
        .required('Username is required')
        .min(4, 'Min of 4 characters')
        .max(18, 'Max of 18 characters'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Min of 8 characters')
        .max(18, 'Max of 18 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    email: yup.string()
        .required('Email is required')
        .email('Invalid email')
        .max(32, 'Max of 32 characters'),
    name: yup.string()
        .min(4, 'Min of 4 characters')
        .max(18, 'Max of 18 characters')
        .required('Name is required'),
})

const loginSchema = yup.object().shape({
    username: yup.string()
        .required('Username is required')
        .min(4, 'Min of 4 characters')
        .max(18, 'Max of 18 characters'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Min of 8 characters')
        .max(18, 'Max of 18 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
})

module.exports = {
    registerSchema, loginSchema
}