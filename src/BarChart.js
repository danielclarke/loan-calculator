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
        const margin = {
            top: this.props.height * 1 / 25,
            bottom: this.props.height * 3 / 50,
            left: this.props.width * 1 / 24,
            right: this.props.width * 1 / 32, 
        };

        const xScale = d3.scaleLinear()
            .domain([0, this.props.data.length])
            .range([0, this.props.width - margin.left]);
        
        const yScale = d3.scaleLinear()
            .domain([0, this.props.height])
            .range([this.props.height - margin.top, 0]);

        const chart = d3.select(this.props.container)
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .append("g")
            .attr("transform", (d, i) => {return `translate(${margin.left}, ${margin.top})`});

        const bar = chart.selectAll("g")
            .data(this.props.data)
            .enter()
            .append("g")
            .attr("transform", (d, i) => {return `translate(${xScale(i)}, ${0})`});
        
        bar.append("rect")
            .attr("y", (d, i) => {return yScale(d)})
            .attr("width", (d, i) => {return xScale(1) - 1})
            .attr("height", (d, i) => {return yScale(0)});

        // bar.append("text")
        //     .attr("x", (d, i) => {return 0})
        //     .attr("y", (d, i) => {return this.props.height - d + 3})
        //     .attr("dy", ".75em")
        //     .attr("fill", "white")
        //     .text((d) => {return d});
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