import './app.scss'
import AllNotes from '../pages/notes/AllNotes.tsx'
import Sidebar from '../widgets/sidebar/Sidebar.tsx'

function App() {

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <Sidebar />
                    </div>
                    <div className="col-lg-10">
                        <AllNotes />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
