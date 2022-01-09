import React ,{useState} from 'react'

function Search() {
    const list=["Banana","Apple","Orange","Grapes","Mango","Watermelon","Pineapple"]
    const [filterList,setFilterList]= useState(list)
    const handleSearch = (e)=>{
        if(e.target.value===""){
            setFilterList(list)
            return ;
        }
        const filteredValues= list.filter((item)=>
            item.toLowerCase().indexOf(e.target.value.toLowerCase())!==-1
        );
        setFilterList(filteredValues);
    }
    return (
        <div>
         <h2>Array filter Search</h2>  
         <div>Search: 
             <input type="text" onChange={handleSearch}></input>
            </div> 
            {
                filterList.map((item) =>(
                    <div>{item}</div>
                ))
            }
        </div>
    )
}

export default Search
