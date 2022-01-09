// import React , {useEffect , useReducer}from 'react'
// import axios

// const initialState = {
//     loading:true,
//     error : '',
//     post : {}
// }

// const reducer = (state,action) =>{
//     switch(action.type){
//         case 'FETCH_SUCCESS':
//             return {
//                 loading:false,
//                 post:action.data,
//                 error:''
//             }
//         case 'FETCH_FAILURE':
//             return {
//                 loading:false,
//                 post:{},
//                 error:'Something went wrong!'
//             }
//     }
// }

// function DataFetchwithReducer() {
//     const [state,dispatch]=useReducer(reducer,initialState)

//     useEffect(()=>{
//         axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
//         .then(response =>{
//             dispatch({type:'FETCH_SUCCESS',data:response.data})
//         })
//         .catch(error => {
//             dispatch({type : 'FETCH_FAILURE'})
//         })

//     },[])
//     return (
//         <div>
//             {state.loading ? 'loading...' : post.title}
//             {state.error ? state.error : null}
//         </div>
//     )
// }

// export default DataFetchwithReducer
