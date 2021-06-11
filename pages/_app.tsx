import Navbar from '@components/Navbar/Navbar';
import '@shared/styles/globals.scss';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link
					media='screen,print'
					href='https://fonts.googleapis.com/css?family=Prompt:200,300,400,500,700'
					rel='stylesheet'
				></link>
			</Head>
			<Provider store={store}>
				<Navbar />
				<main className='container-fluid px-md-5'>
					<Component {...pageProps} />
				</main>
			</Provider>
		</>
	);
};

export default MyApp;
