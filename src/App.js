import './App.scss';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import './style/common.scss'

function App() {
	return (
		<BrowserRouter >
			<Header />
			<main className='main'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/detail/:id' element={<Main />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
