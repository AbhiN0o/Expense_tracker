import React,{createContext,useReducer, useState} from "react";

const initialState={
    transactions:[
        {id:1,text:'Flower',amount:-20},
        {id:2,text:'Salary',amount:300},
        {id:3,text:'Book',amount:-10},
        {id:4,text:'Camera',amount:150}
    ]
}

const [hi,setHi]=useState(0)


export const GlobalContext=hi;