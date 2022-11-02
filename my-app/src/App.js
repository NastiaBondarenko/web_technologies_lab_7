import React from "react"
 
import Header from "./components/Header"
import Content from "./components/Content"
import Magazin from "./components/Magazin"
 
function App() {
    return (
        <div id="main_div">
            <Header />
			<Content />
			<Magazin />
        </div>
    )
}
 
export default App