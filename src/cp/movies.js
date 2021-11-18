import API from './api'
import React, { Component } from 'react'
export default class movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {


        const filter = API.filter(res => { return (res.imdbID).includes(this.props.match.params.id) });

        this.setState({ data: filter[0] })
    }
    render() {

        return (
            <section style={{ display: " flex", justifyContent: "center" }}>
                <div style={{ margin: "30px", boxShadow: "0px 0px 27px grey" }}>
                    <img src={this.state.data.Poster} alt="cdcd"/>
                    <div style={{
                        display: "flex",
                        justifyContent: " space-between"
                    }}>
                        <span>{this.state.data.Title}</span><span>{this.state.data.Type}</span>
                    </div>
                    <h3 style={{
                        textAlign: "center", margin: "9px"
                    }}>{this.state.data.Year}</h3>
                </div>

            </section>



        )
    }
}
