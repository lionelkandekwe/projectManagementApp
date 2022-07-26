import Header from "./components/Header"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import Clients from "./components/Clients"

//Create client/
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  )
}

export default App
