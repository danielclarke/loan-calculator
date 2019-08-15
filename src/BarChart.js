import React, {Component} from 'react';
import * as d3 from 'd3';


class BarChart extends Component {

    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const data = this.props.data;
        d3.select(this.props.container)
            .selectAll("div")
            .data(data)
            .enter()
            .append("div")
            .attr("class", "bar")
            .style("height", (d) => { return d * 5 + "px" });
        
    }

    render() {
        this.drawChart();
        return null;
    }
}

export default BarChart;