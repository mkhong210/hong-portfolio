import './App.scss';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import './style/common.scss'
import DetailProject from './pages/DetailProject';
import DetailStudy from './pages/DetailStudy';
import Context from './Context';

function App() {
	return (
		<Context>
			<BrowserRouter >
				<Header />
				<main className='main'>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/detail/project/:id' element={<DetailProject />} />
						<Route path='/detail/study/:id' element={<DetailStudy />} />
					</Routes>
				</main>
			</BrowserRouter>
		</Context>
	);
}

export default App;
