import React from 'react';
import './Header.css'
const Header=function(props){
    //const headerStyle={textAlign:"center",padding:20,background:"#000",color:"#fff",textTransform:"uppercase"}--use this above for inline style--
    return(
        <div className="header"/*style={headerStyle}*/>
          {props.heading}
        </div>
    )
}
// class Header extends Component {
//     render() {
//         return (

//             <div className="header" >
//                 {this.pops.heading}
//             </div>

//         );
//     }
// }/*in this case we do not any state since  this header is do not going to be changed it means it is static not dynamic so we only need functional component ,not this class component mentioned in the curely braces 

export default Header;