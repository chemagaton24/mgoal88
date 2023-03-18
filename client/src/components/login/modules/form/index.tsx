import LogoMgoal88 from '../../../../assets/images/logos/mgoal88-white.svg'
import Container from '../../../containers'
import { gql, useMutation } from '@apollo/client'
import { Field, Formik } from 'formik'
import { loginSchema } from '../../validation'
import { Button } from '../../../button'
import { useModal } from '../../../modal'
import { useAppDispatch } from '../../../../redux/hooks'
import { useCloseAllModal } from '../../../modal/hooks'
import { setAccessToken } from '../../../../redux/slice/users/accessTokenSlice'
import { useState } from 'react'
import './style.css'

const LOGIN_USER = gql`
mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        accessToken
    }
}
`

const Form = () => {
    const [loginUser] = useMutation(LOGIN_USER)
    const modalRegister = useModal('register')
    const closeAll = useCloseAllModal()
    const dispatch = useAppDispatch()
    const [validationMessageAll, setValidationMessageAll] = useState<string>()

    return (
        <Container.Module name="form-login">
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validateOnChange={false}
                validateOnBlur
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    setValidationMessageAll('')
                    try {
                        const result = await loginUser({ variables: values })
                        dispatch(setAccessToken(result.data.login.accessToken))
                        closeAll(true)
                    } catch {
                        setValidationMessageAll('Login failed. Invalid username or password. Please try again')
                    }
                }}
            >
                {({ touched, errors, handleSubmit }) => (<>
                    <form onSubmit={handleSubmit}>
                        <div className="row m-b-56 ta-center">
                            <img src={LogoMgoal88} className="logo-img" alt="mgoal88 logo" />
                        </div>
                        <div className="row m-b-32">
                            <label htmlFor="username" className="m-b-16">Username</label>
                            <div className="input-field text-field">
                                <Field type="text" name="username" placeholder="Input your registered username" />
                                {(touched.username && errors.username) &&
                                    <div className="validation-message validation-error flex flex-ai-c">
                                        {errors.username}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="row m-b-32">
                            <label htmlFor="password" className="m-b-16">Password</label>
                            <div className="input-field text-field">
                                <Field type="password" name="password" placeholder="8-18 characters long" />
                                {(touched.password && errors.password) &&
                                    <div className="validation-message validation-error flex flex-ai-c">
                                        {errors.password}
                                    </div>
                                }
                            </div>
                        </div>
                        {validationMessageAll &&
                            <div className="row m-b-32">
                                <div className="validation-message validation-message-all">
                                    {validationMessageAll}
                                </div>
                            </div>
                        }
                        <div className="row ta-center m-b-16">
                            <Button type="submit" text="LOGIN" />
                        </div>
                        <div className="row ta-center m-b-38">
                            <a href="/#" role="button"><strong>Forgot your login details?</strong></a>
                        </div>
                        <div className="row ta-center">
                            <span>Not a member yet? <a href="/#" role="button" onClick={() => modalRegister(true)}><strong>Create a new account!</strong></a></span>
                        </div>
                    </form>
                </>)}
            </Formik>
        </Container.Module>
    )
}

export default Form