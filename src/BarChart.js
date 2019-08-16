import React, {Component} from 'react';
import * as d3 from 'd3';


class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {tick: 0};
    }

    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const svg = d3.select(this.props.container)
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height);

        svg.selectAll("rect")
            .data(this.props.data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => {return i * (this.props.width / this.props.data.length)})
            .attr("y", (d, i) => {return this.props.height - d})
            .attr("width", (d, i) => {return this.props.width / this.props.data.length - 1})
            .attr("height", (d, i) => {return d});
    }

    refresh() {
        setInterval(() => {this.setState({tick: this.state.tick + 1000})}, 1000);
    }

    render() {
        this.drawChart();
        //this.refresh()
        return null;
    }
}

export default BarChart;