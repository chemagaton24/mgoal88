import * as yup from 'yup'

export const loginSchema = yup.object().shape({
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
        )
})