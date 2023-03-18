import Container from '../../../containers'
import { Fragment } from 'react'
import { gql, useMutation } from '@apollo/client'
import { Field, Formik } from 'formik'
import { registerSchema } from '../../validation'
import { useMediaQuery } from '../../../../utils/useMediaQuery'
import { useModal } from '../../../modal'
import { Button } from '../../../button'
import { setAccessToken } from '../../../../redux/slice/users/accessTokenSlice'
import { useAppDispatch } from '../../../../redux/hooks'
import './style.css'
import { useCloseAllModal } from '../../../modal/hooks'

const REGISTER_USER = gql`
mutation Register($username: String!, $password: String!, $email: String!, $name: String!) {
    register(username: $username, password: $password, email: $email, name: $name) {
        accessToken
    }
}
`

const CHECK_USERNAME_EXIST = gql`
mutation CheckUsernameExist($username: String!) {
    checkUsernameExist(username: $username)
}
`

const CHECK_EMAIL_EXIST = gql`
mutation CheckEmailExist($email: String!) {
    checkEmailExist(email: $email)
}
`

const Form = () => {
    const mq = useMediaQuery([
        {
            match: '(min-width: 768px)',
            returnTrue: 'desktop-tablet'
        }
    ])

    const [registerUser] = useMutation(REGISTER_USER)
    const [checkUsernameExist] = useMutation(CHECK_USERNAME_EXIST)
    const [checkEmailExist] = useMutation(CHECK_EMAIL_EXIST)
    const modalLogin = useModal('login')
    const closeAll = useCloseAllModal()
    const dispatch = useAppDispatch()

    const checkUsernameExistFn = async (value: string) => {
        const result = await checkUsernameExist({ variables: { username: value } })
        let error
        if (result.data.checkUsernameExist) {
            error = 'Username already in use'
        }
        return error
    }

    const checkEmailExistFn = async (value: string) => {
        const result = await checkEmailExist({ variables: { email: value } })
        let error
        if (result.data.checkUsernameExist) {
            error = 'Email already in use'
        }
        return error
    }

    const fields = [
        {
            label: 'Name',
            name: 'name',
            type: 'text',
            placeholder: 'How do we address you?',
        }, {
            label: 'Username',
            name: 'username',
            type: 'text',
            placeholder: '4-18 alphanumeric characters long',
            validate: checkUsernameExistFn
        }, {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: '8-18 characters long',
        }, {
            label: 'Confirm Password',
            name: 'confirmpassword',
            type: 'password',
            placeholder: '8-18 characters long',
        }, {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'example@gmail.com',
            validate: checkEmailExistFn
        }
    ]

    return (
        <Container.Module name="form-register" kind="form">
            <Formik
                initialValues={{
                    name: '',
                    username: '',
                    password: '',
                    confirmpassword: '',
                    email: '',
                }}
                validateOnChange={false}
                validateOnBlur
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    const result = await registerUser({ variables: values })
                    dispatch(setAccessToken(result.data.register.accessToken))
                    closeAll(true)
                }}
            >
                {({ touched, errors, handleSubmit, values }) => (<>
                    <form onSubmit={handleSubmit}>
                        <div className="row m-b-24 top-notes">
                            <p className="text">Please note that we do not permit members to own more then one (1) account. Already have an account? <a href="/#" role="button" onClick={() => modalLogin(true)}><strong>Login here!</strong></a></p>
                        </div>
                        {fields.map((item, key) => {
                            const { label, name, type, placeholder, validate } = item
                            const nameIndx = name as keyof typeof values

                            return (<Fragment key={key}>
                                <div className="row m-b-24 mq-767-m-b-16">
                                    <div className="row row-field flex flex-col-expand g-col-16 mq-767-flex-ai-s mq-767-flex-direction-col mq-767-g-row-8">
                                        <div className="col col-1">
                                            <label htmlFor={name}>{label}</label>
                                        </div>
                                        <div className="col col-2">
                                            <div className="input-field text-field">
                                                <Field type={type} id={name} name={name} placeholder={placeholder} validate={validate} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-error flex flex-col-expand g-col-16 mq-767-flex-ai-s mq-767-flex-direction-col">
                                        <div className="col col-1"></div>
                                        <div className="col col-2">
                                            {(touched[nameIndx] && errors[nameIndx]) &&
                                                <div className="validation-message validation-error flex flex-ai-c">
                                                    {errors[nameIndx]}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Fragment>)
                        })}
                        <div className="row m-b-32">
                            <div className="blue-note">
                                <div className="row">
                                    <p className="text text-1 m-b-2 mq-767-m-b-unset"><i className="icon icon-dollar-flow color-yellow s-16 m-r-4"></i><span>DAILY REBATE UP TO 1%, NO LIMIT & NO ROLLOVER</span></p>
                                    {mq.includes('desktop-tablet') &&
                                        <p className="text text-2">Complete your first deposit and visit the rewards section to claim it!</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row m-b-24">
                            <p className="text text-terms-policy">By registering, you agree to MGoal88’s terms of use and privacy policy.</p>
                        </div>
                        <div className="row ta-center">
                            <Button type="submit" text="REGISTER" />
                        </div>
                    </form>
                </>)}
            </Formik>
        </Container.Module>
    )
}

export default Form