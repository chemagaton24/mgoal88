import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Graphql from './graphql'
import Redux from './redux'
import Modal from './components/modal'
import Container from './components/containers'
import Pages from './pages'
import './assets/css/style.css'
import Auth from './components/auth'

const App = () => {
	return (
		<Router>
			<Graphql.Provider>
				<Redux.Provider>
					<Modal.Provider>
						<Container.Master>
							<Routes>
								<Route path="/" element={<Pages.Home />} />
								<Route path="/news" element={<Pages.News />} />
								<Route path="/sportsbook" element={<Pages.Sportsbook />} />
								<Route element={<Auth.PersistentLogin promptLogin />}>
									<Route path="/livecasino" element={<Pages.Livecasino />} />
								</Route>
							</Routes>
						</Container.Master>
					</Modal.Provider>
				</Redux.Provider>
			</Graphql.Provider>
		</Router>
	)
}

export default App