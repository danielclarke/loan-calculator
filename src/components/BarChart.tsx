import * as React from 'react';
import {Component} from 'react';
import * as d3 from 'd3';

interface BarChartProps {
    height: number;
    width: number;
    data: Array<number>;
    container: string;
}

class BarChart extends Component<BarChartProps> {

    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const margin = {
            top: this.props.height * 1 / 25,
            bottom: this.props.height * 3 / 50,
            left: this.props.width * 1 / 20,
            right: this.props.width * 1 / 32, 
        };

        const xScale = d3.scaleLinear()
            .domain([0, this.props.data.length])
            .range([0, this.props.width - margin.left - margin.right]);
        
        const yScale = d3.scaleLinear()
            .domain([0, Math.max(...this.props.data)])
            .range([this.props.height - margin.top - margin.bottom, 0]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        const chart = d3.select(this.props.container)
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .append("g")
            .attr("transform", (d, i) => {return `translate(${margin.left}, ${margin.top})`});

        chart.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0, ${yScale(0)})`)
            .call(xAxis);
        
        chart.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        chart.selectAll(".bar")
            .data(this.props.data)
            .enter()
            .append("rect")
            .attr("transform", (d, i) => {return `translate(${xScale(i)}, ${0})`})
            .attr("y", (d, i) => {return yScale(d)})
            .attr("width", (d, i) => {return xScale(1) - 1})
            .attr("height", (d, i) => {return yScale(0) - yScale(d)});
    }

    render(): React.ReactNode {
        this.drawChart();
        return null;
    }
}

export default BarChart;