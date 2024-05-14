import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo.tsx';
import SelectPlan from './pages/SelectPlan.tsx';
import AddOns from './pages/AddOns.tsx';
import Summary from './pages/Summary.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <PersonalInfo />,
			},
			{
				path: '/plan',
				element: <SelectPlan />,
			},
			{
				path: '/add-ons',
				element: <AddOns />,
			},
			{
				path: '/summary',
				element: <Summary />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</QueryClientProvider>
	</React.StrictMode>
);
