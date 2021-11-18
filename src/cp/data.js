
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import API from "./api"
export default class Data extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
    }
componentDidMount(){
    const filter = API.map(item=>item)
    this.setState({data:filter})
}
handle=(e)=>{
    const fil=API.filter(res=>{return (res.Title).toUpperCase().includes(e.target.value.toUpperCase())});
 
    this.setState({data:fil})
}

    render() {

        return (

            <section>
                <div> <input type="search" placeholder="Search here" onChange={this.handle}/></div>
                <div id="clothes">
                    {this.state.data.map(item =>
                        <div key={Math.random()} className="card">
                            <img src={item.Poster} alt="" />
                            <div className="detail">
                                <h5>
                                    <Link to={`/movies/${item.imdbID}`}>{item.Title}</Link>
                                </h5>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        )
    }
}
