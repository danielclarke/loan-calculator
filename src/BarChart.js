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
        const data = [...Array(25)].map(() => {return Math.random() * 20});
        const svg = d3.select(this.props.container)
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.width);

        svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", (d, i) => {return i * 10})
            .attr("cy", (d, i) => {return d * 10})
            .attr("r", () => {return Math.random() * 10})
            .attr("fill", () => {return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`});
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