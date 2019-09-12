import * as React from 'react';
import {Component} from 'react';

class ApiReaderProps {
}

class ApiReader extends Component<ApiReaderProps> {

    readApi() {
        const url = 'https://api.spacexdata.com/v3';
        const r = new XMLHttpRequest();
        r.addEventListener("load", () => {console.log(r.responseText)});
        r.open('GET', `${url}/launches/latest?pretty=true`);
        r.send();
    }

    componentDidMount() {
        this.readApi();
    }

    render(): React.ReactNode {
        // this.readApi();
        return null;
    }
}

export default ApiReader;
// refresh() {
//     setInterval(() => {this.setState({tick: this.state.tick + 1000})}, 1000);
// }