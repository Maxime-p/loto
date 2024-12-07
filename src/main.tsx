import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"

import { persistor, store } from "@Stores"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</StrictMode>,
)
