import { ReactNode } from 'react'

interface PropsType {
    children: ReactNode
    name: string
}

const Page = (props: PropsType) => {
    return (
        <div className={`page-content page-content-${props.name}`}>
            {props.children}
        </div>
    )
}

export default Page