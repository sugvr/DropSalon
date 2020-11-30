import React, {useState,useEffect}  from 'react';
import axios from 'axios';
// import {StyleSheet, Text, View, TextInput, Button, FlatList} from 'react';
import './ListadeServicio.css'


const URL = 'http://localhost:4000/services'

const ListadeServicio = () => {
    const [services, setService] = useState([])

    useEffect(() => {
        getData()
    }, []) 

    const getData = async () => {

        const response = await axios.get(URL)
        setService(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = services.filter(services => id !== services.id)
            setService(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'Servicio', 'Descripcion', 'Duracion', 'price']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
   
    const renderBody = () => {
        return services && services.map (({ id, service_name, service_description, duration, price }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{service_name}</td>
                    <td>{service_description}</td>
                    <td>{duration}</td>
                    <td>{price}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className="TableServices">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
    )
}


 export default ListadeServicio

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