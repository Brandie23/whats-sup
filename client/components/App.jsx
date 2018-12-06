import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import Map from './Map'
import Admin from './Admin'
import Nav from './Nav'

const App = () => (

    <Router>
    <div>
    
        <div className="app_header">
            <h1>Is this React header in App working?</h1>
        </div>

        <div className="app_body">
            <p> Map will go here, and will underlay the entire page.
                Nav will sit on top in the left hand side.
                The Admin page will be accessible after the user has logged in, but for the demonstration and for usability,
                it can be accessed at /admin.
            </p>
        </div>

        <Route exact path="/" component={Nav}/>
        <Route exact path="/admin" component={Admin}/>
    
    </div>
    </Router>
)


// class App extends React.Component {
//     constructor(props) {
//         super(props)

//     }
//     render() {
//         return (
//             <React.Fragment>

//                 <p>Is React working?</p>

//             </React.Fragment>
//         )
//     }
// }

export default App