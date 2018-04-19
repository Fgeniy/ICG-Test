import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(){
        super();
        this.state = {clients: []};
        this.filter = this.filter.bind(this);
    }

filter() {

}

componentWillMount() {
    fetch('/clients.json')
    .then(response => response.json()
    .then(({results:clients}) => this.setState({clients})
)
}

render(){
    return(
        <div>
         <input className="search" onChange={this.filter} type="text"/>
            <div className="clients_list">
                <img src="{this.client.avatar}" alt=""/>
            </div>
        </div>
    )
}


}

ReactDOM.render(<App/>, document.getElementById('root'))