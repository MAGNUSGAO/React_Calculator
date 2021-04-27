
import React, { useState } from "react";
import boostrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Main(){
    // Hook, take note
    const [inputvalue, setinputvalue] = useState();
    function display(value){
        if(inputvalue !== undefined){
            setinputvalue(inputvalue + value)
        } else {
            setinputvalue(value)
        }
        
    }

    function clear(){
        setinputvalue('');
    }

    function calculate(){
        // eval evaluates the expression
        try{
            var answer = eval(inputvalue)
        } catch{
            answer = "Cannot Compute"
        }
        
        setinputvalue(answer);
    }
    
    return (
        <div className='row justify-content-center'>
            <div className='col-md-4 shadow-lg p-3 mb-4 bg-white rounded'>
                <h1>Calculator</h1>
                <table>
                    {/* // TR means one row  TD means table data colSpan determines how wide the space is*/}
                    <tr>
                        <td colSpan='4'><input type="text" value={inputvalue}/></td>
                        <td><button onClick={()=>{clear()}}>C</button></td>
                    </tr>
                    <tr>
                    {/* // When even we pass in parameters we have to use arrow function */}
                        <td><button  onClick={()=>{display('1')}}>1</button></td>
                        <td><button  onClick={()=>{display('2')}}>2</button></td>
                        <td><button onClick={()=>{display('3')}}>3</button></td>
                        <td><button onClick={()=>{display('/')}}>/</button></td>
                        <td><button onClick={()=>{display('(')}}>(</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={()=>{display('4')}}>4</button></td>
                        <td><button onClick={()=>{display('5')}}>5</button></td>
                        <td><button onClick={()=>{display('6')}}>6</button></td>
                        <td><button onClick={()=>{display('-')}}>-</button></td>
                        <td><button onClick={()=>{display(')')}}>)</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={()=>{display('7')}}>7</button></td>
                        <td><button onClick={()=>{display('8')}}>8</button></td>
                        <td><button onClick={()=>{display('9')}}>9</button></td>
                        <td><button onClick={()=>{display('+')}}>+</button></td>
                        <td><button onClick={()=>{display('.')}}>.</button></td>
                    </tr>
                    <tr>
                   
                    <td><button onClick={()=>{display('0')}}>0</button></td>
                    <td><button onClick={()=>{display('%')}}>%</button></td>
                    <td><button onClick={()=>{display('*')}}>*</button></td>
                    <td colSpan='2'><button onClick={()=>{calculate()}}>=</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Main;