import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { store } from './assets/store/store.js'
import { Provider } from 'react-redux'
import { HomeProvider } from './context/HomeContext.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HomeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HomeProvider>
  </Provider>
)
