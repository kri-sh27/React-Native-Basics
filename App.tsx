import {
  Text,
  View,
  Button,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import CompanyData from './components/CompanyData';
import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

// let age =30;
// const App = () => {
//   const users=[{
//     name:"one",id:1
//   },{
//     name:"two",id:2
//   },{
//     name:"three",id:3
//   },{
//     name:"four",id:4
//   },{
//     name:"five",id:5
//   },{
//     name:"six",id:6
//   },{
//     name:"seven",id:7
//   },{
//     name:"eight",id:8
//   },{
//     name:"nine",id:9
//   },]
//   return(
//     <View>
//       {/* <Text style={{fontSize:30}}>HelLo mr kirsh <Text style={{fontSize:30}}>HelLo mr kirsh</Text> </Text>

//       <Text style={{fontSize:30}}>HelLo mr kirsh</Text>

//       <Button title='press me' color={"red"}/> */}
//       {/* {
//       age<30?
//       <Text style={{fontSize:30,color:'red'}} >Yor are not eligible</Text>:<Text style={{fontSize:30,color:'green'}}> you are eligible</Text>
//       }
//       <UserData/>
//       <CompanyData/> */}

//       <Text style={{fontSize:30}}> Grid with dynamic data</Text>
//       <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
//         {
//           users.map((item)=><Text style={styles.item}>{item.name}</Text>)
//         }

//       </View>

//     </View>
//   )
// };

// // const UserData=()=>{
// //   return(
// //     <View>

// //       <Text style={{fontSize:30,color:'green'}}>Name : Anil</Text>
// //       <Text style={{fontSize:30,color:'green'}}>Age:30</Text>
// //       <Text style={{fontSize:30,color:'green'}}>Email : Anil@gmail.com</Text>

// //     </View>
// //   );
// // }

// const styles=StyleSheet.create({
//   item:{
//     fontSize:25,
//     backgroundColor:'blue',
//     color:"#fff",
//     margin:5,
//     padding:5,
//     height:120,
//     width:120,
//   textAlign:'center',
//     textAlignVertical:'center'
//   }
// })

// const App=()=>{
//   const [show,setShow]=useState(true);
//   return(
//       <View>
//         <Text style={{fontSize:30}}>Show/hide Component</Text>
//         <Button title='show user component' onPress={()=>setShow(true)}></Button>
//         <Button title='hide user Component' onPress={()=>setShow(false)}></Button>
//         <Button title='Togggle Component' onPress={()=>setShow(!show)}></Button>

//         {
//           show===true?<User/>:null
//         }
//       </View>
//   )
// }
// const User=()=>{
//   return(
//     <View>
//       <Text style={{fontSize:30,color:'red'}}>User Component</Text>
//     </View>
//   )
// }

// const App=()=>{
//   const [show,setShow]=useState(true)
//   return(
//     <View>
//       <Text style={{fontSize:30}}>Unmounting</Text>
//       <Button title='Toggle' onPress={()=>setShow(!show)}></Button>
//       {
//         show?<Student/>:null
//       }
//     </View>
//   )
// }
// const Student=()=>{

//    useEffect(()=>{
//     console.warn("mounted")
//     return ()=>{
//       console.warn("unmounted")
//     }
//   })
//   return(
//     <View>
//        <Text style={{color:'red',fontSize:30}}>Student</Text>
//        </View>
//   )
// }

// const App = () => {
//   const [show,setShow]=useState(false);
//   const displayLoader=()=>{
//     setShow(true)
//   }
//   return (
//     <View style={style.main}>
//       <ActivityIndicator size={100} animating={show}></ActivityIndicator>
//       <Button title="Activity INdicator" onPress={displayLoader}></Button>
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// const Tab = createBottomTabNavigator();
// const Tab=createMaterialTopTabNavigator();
// const App = () => {
//   return (

//     <NavigationContainer >
//       <Tab.Navigator>
//         <Tab.Screen name='Login' component={Login}></Tab.Screen>
//         <Tab.Screen name='SignUp' component={SignUp}></Tab.Screen>
//         <Tab.Screen name='OTHET' component={SignUp}></Tab.Screen>

//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const Login = () => {
//   return (
//     <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>

//       <Text style={{fontSize:30}}>LOGIN</Text>
//     </View>
//   );
// };

// const SignUp = () => {
//   return (
//     <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
//       <Text style={{fontSize:30}}>SignUp</Text>
//     </View>
//   );
// };

// const App = () => {
//   const [data, setData] = useState(undefined);

//   const getAPIdata = async () => {
//     const URL = 'https://jsonplaceholder.typicode.com/posts/1';
//     let result = await fetch(URL);
//     result = await result.json();
//     setData(result);
//     // console.warn(result);
//   };

//   useEffect(() => {
//     getAPIdata();
//   }, []);
//   return (
//     <View>
//       <Text style={{fontSize: 30}}>API CALL</Text>

//       {data ? (
//         <View>
//           <Text>{data.id}</Text>
//           <Text>{data.userId}</Text>
//           <Text>{data.title}</Text>

//         </View>
//       ) : null}
//     </View>
//   );
// };

const App = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  });
  return (
    <View>
      <Text style={{fontSize: 30}}>FlatList with Api</Text>
      {data.length ? 
        <FlatList
          data={data}
          renderItem={({item}) => 
            <View>
              <Text style={{fontSize: 30}}>{item.id}</Text>
              <Text style={{fontSize: 20}}>{item.title}</Text>
              <Text style={{fontSize: 20}}>{item.userId}</Text>

            </View>
          }
        />
       : null}
    </View>
  );
};

export default App;
