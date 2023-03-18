import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client"
import { ReactNode } from "react"

interface PropsType {
    children: ReactNode
}

const link = createHttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include'
})

const Provider = (props: PropsType) => {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link
    })

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}

export default Provider