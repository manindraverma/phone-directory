import React, { Component } from 'react';
import Header from "./Header";
import "./ShowSubscriber.css";

class ShowSubscriber extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     subscriberListToShow:[]
  //   }
  //   console.log("constructor called");
  // }
  // componentDidMount(){
  //   let newSubscriber={
  //   id:1,
  //   name: "shivesh",
  //   phone: "2349843466"
  //   }
  //   let subscriberList =this.state.subscriberListToShow;
  //   subscriberList.push(newSubscriber);
  //   this.setState({subscriberListToShow:subscriberList})
  //   console.log("component did mount ");

  //   console.log("state",this.state);

  // }
  clickHandler(message){
     alert(message);
  // //deleteHandler(){
  // //  alert("delete");
  }
  render() {
    
    console.log("Render called");
    // let subscribers = [
    //   { id:1,
    //     name: "shivesh",
    //     phone: "2349843466"

    //   },
    //   { id:2,
    //     name: "pankaj",
    //     phone: "4984564644"
    //   }
    // ]
    return (
      <div className="component-container">
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading"> Name </span>
            <span className="grid-item phone-heading"> Phone </span>
            

            {/* <br/>
          <span className="grid-item ">Shivesh</span>
          <span className="grid-item ">9544664314</span>
          <br/>
          <span className="grid-item"> Vishnu </span>
          <span className="grid-item ">5465494927 </span> */}
          </div>
          {
            this.props/*state*/.subscriberList/*subscriberListToShow/*subscribers*/.map(sub => {
              return <div key={sub.id}className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <button className="custom-btn del-btn" onClick={this.clickHandler.bind(this,"Delete Clicked")}>Delete</button>
                { /*for class component-this.clickHandler.bind(this,"Delete Clicked");*/}
                </div>
          })
          
        }
        
        

              {/* <label htmlFor="name">  Name    </label>
      //   <input id="name" type="text" placeholder="Type here" defaultValue="manindra"/> */}
              {/* <div id="module">
           <p>ReactJs</p>
        </div> */}

              {/* //  React.createElement("div",{id:"module"},
        //   React.createElement("p",null,"ReactJs")
         ) */}

      
      </div> 
      </div>

    );
  }
}

export default ShowSubscriber;
