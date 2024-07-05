import { Layout } from "components/Layout/Layout"
import { EndpointsProvider } from "contexts/endpoints"
import { Router } from "routes"

function App() {

  return (
    <>
      <EndpointsProvider>
        <Layout>
          <Router />
        </Layout>
      </EndpointsProvider>

    </>
  )
}

export default App
