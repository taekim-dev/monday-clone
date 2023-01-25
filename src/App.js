import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import TicketPage from "./pages/TicketPage"
import Nav from './componenets/Nav'

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path='/' element={<Dashboard/>}></Route>
                    <Route path='/ticket' element={<TicketPage/>}></Route>
                    <Route path='/ticket/:id' element={<TicketPage editMode={true}/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
