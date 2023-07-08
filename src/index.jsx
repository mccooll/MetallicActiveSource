import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './App'
import { FancyParagraph } from './App'
import { name2 } from './utils' 

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Application name="Dave" />
    <Application name="Anthony" />
    <Application name={name2} />
    <FancyParagraph text="Lorem Ipsum" />
	</React.StrictMode>
)