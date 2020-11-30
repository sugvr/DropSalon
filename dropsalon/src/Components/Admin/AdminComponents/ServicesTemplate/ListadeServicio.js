import React, {Component} from 'react';
import axios from 'axios';
// import {StyleSheet, Text, View, TextInput, Button, FlatList} from 'react';
import './ListadeServicio.css'



export default class ListadeServicio extends React.Component {
  state = {
    service_name: []
    
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/services1`)
      .then(res => {
        const service_name = res.data;
        this.setState({ service_name });
      })
  }

  render() {
    return (
      <ul>
        { this.state.service_name.map(service => <li>{service.name}</li>)}
      </ul>
    )
  }
}

// const serverURL ='http://localhost:4000/services';
// const http = axios.create({
//    baseURL:serverURL,
// });
// export default class ListadeServicio extends Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         service_name:'',
//         service_description:'',
//         duration:'',
//         price: '',
//         rslt:[],
//       };
//     }
  
  
//     onCalculate(){
//       const{service_name, service_description,duration, price ,rslt} = this.state;
  
//       http.get('/services',{
//         service_name:service_name,
//         service_description:service_description,
//         duration:duration,
//         price: price
//       })
//       .then(function (response) {
//         rslt.push(response.data);
//         this.setState({rslt}); // or this.forceUpdate();
//         alert("Response :", response.data);
//         console.log(response.data);
//         console.log(rslt);
//     }.bind(this))
//     .catch(function (error) {
//         alert("Error", error);
//     }); 
  
//     }
  
  
//     render() {
//       return (
//         <View >
      
//           <Button title='Calculate' onPress={()=>this.onCalculate()}/>
  
//           <FlatList
//             data={this.state.rslt}
//             renderItem={({item}) => <Text>{item}</Text>}
//           />
//         </View>
//       );
//     }
//   }
// function ListadeServicio(props) {
//     return (
//         <div className="TableServices">
//             <div>
//                 <h2 className="Servicio">{props.servicio}</h2>
//             </div>
//             <div>
//                 <h2 className="Precio">{props.Precio}</h2>
//             </div>
//             <div>
//                 <h2 className="Duracion">{props.Duracion}</h2>
//             </div>
//         </div>
//     )
// }

// export default ListadeServicio