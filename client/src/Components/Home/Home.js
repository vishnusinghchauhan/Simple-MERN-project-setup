import React, { Component } from 'react';
import axios from "axios";



class Home extends React.Component {

	 fetchData = (e) => {
        console.log("fetchData calling..")
        axios.get(`/api/getlist`).then((res)=>{
		      console.log("resresresres" , res)
		  }).catch(err => {
		      console.log("Error" , err)
		  });
    }

render() {
	 return (
	     	<div>
                <button className="btn btn-info" onClick={this.fetchData}>Fetch data</button>
         </div>
        )
	}
}

export default Home;