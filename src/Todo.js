import React, {useState, useEffect} from "react";
import todoimg from "./image/todo.png";

// to get the data from localstorage
const getLocalItems =() =>{
    let list = localStorage.getItem("Lists")
    if(list){
        return JSON.parse(localStorage.getItem("Lists"));
    }else{
        return [];
    }
}


const Todo = () => {

    const [inputData, setInputData] = useState("");
    const [item, setItems] =useState(getLocalItems());


const addItem = () =>{
    if(!inputData){

    }else{
        setItems([...item, inputData]);
    setInputData('');
    }   
}


const deletItem =(id) =>{
    const updatedItems = item.filter((val, ind)=>{
        return ind !== id
    })
    setItems(updatedItems);
}

const removeAll = () =>{
    setItems([]);

}

// add data to localStorage

useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(item))
}, [item]);

    return(
        <>
        
        <div className="main_div">
            <div className="child_div">
                <figure>
                    <img src={todoimg} alt="Todo List"/>
                    <figcaption>Add Items to List</figcaption>
                </figure>
                <div className="add_items">
                    <input type="text" placeholder="... Add Items" value={inputData}
                    onChange={(e) => setInputData(e.target.value)}/>
                    <i className="fa fa-plus" title="Add Item"
                    onClick={addItem}></i>
                </div>
                <div className="show_items">
                    {
                        item.map((val, ind)=>{
                            return(
                                <div className="eachItem" key={ind}>
                                <h3>{val}</h3>
                                <i className="fa fa-solid fa-trash" title="Delete Item" onClick={()=>{deletItem(ind)}}></i>
                            </div>
                            )
                        })
                    }
                   
                </div>
                <div className="show_items">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo;