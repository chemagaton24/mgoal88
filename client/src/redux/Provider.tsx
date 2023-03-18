import { ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'

interface PropsType {
    children: ReactNode
}

const Provider = (props: PropsType) => {
    return (
        <ReduxProvider store={store}>
            {props.children}
        </ReduxProvider>
    )
}

export default Provider