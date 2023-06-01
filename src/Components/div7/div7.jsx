import React, { useState } from "react";
import Heading from './../div1/Heading/Heading';
import './div7.css';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set,onValue,get,child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyADSoWtzzC912wq_EfWNXuiZjssANDTudw",
  authDomain: "acm1-2e449.firebaseapp.com",
  projectId: "acm1-2e449",
  storageBucket: "acm1-2e449.appspot.com",
  messagingSenderId: "174881272049",
  appId: "1:174881272049:web:7316ce65768213bd4c7950",
  measurementId: "G-6TB8FMRPKF"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database);


function Div7(){

    const [form,setForm] = useState({
        'name':'',
        'number':'',
        'email':'',
        'message':''
    });

    function writeFormsData(event) {
        event.preventDefault();
        
        let data = [];
        let {name,number,email,message} = form;

        get(child(dbRef, `forms`)).then((snapshot) => {
            if (snapshot.exists()) {
                data = snapshot.val();
                console.log(data);
                data = [...data,{
                    'name': name, 
                    'contactNo':number,
                    'email': email,
                    'message' : message}];
                set(ref(database,'forms'), data);

            } else {
                data =[
                    {'name': name, 
                    'contactNo':number,
                    'email': email,
                    'message' : message}
                ]
                set(ref(database, 'forms'), data);

            }
          }).catch((error) => {
            console.error(error);
          });

        setForm({
            'name':'',
            'number':'',
            'email':'',
            'message':''
        })
    }


    let variable , value;
    function getFormData(event){
        variable = event.target.name;
        value = event.target.value;
        setForm({...form,[variable]:value})
    }

    return (
        <div id='contactUs' className="div7">
            <Heading style={{color:'#05192D',textAlign:'center',marginBottom:'5%'}} content='Contact Us'/>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="mb-3 flex-container">
                            
                            <div className="mx-3">
                                <input name="name" onChange={(event)=>{getFormData(event)}} value={form.name} type="text" className="form-control" id="exampleInputEmail1" placeholder="Your Name"/>
                            </div>
                            <div className="mx-3">
                                <input name="number" onChange={(event)=>{getFormData(event)}} value={form.number} type="number" maxLength='11' className="form-control" id="exampleInputEmail2" placeholder="Your Contact No."/>
                            </div>
                            <div className="mx-3">
                                <input name="email" onChange={(event)=>{getFormData(event)}} value={form.email} type="email" className="form-control" id="exampleInputEmail3" placeholder="Your email"/>
                            </div>
                        
                        
                        </div>
                        <div className="mb-3">
                            <div className="mx-3">
                                <textarea name="message" onChange={(event)=>{getFormData(event)}} value={form.message}  className="form-control" placeholder="Your message..." rows = '4' aria-label="With textarea"/>
                            </div>
                        </div>
                        <div className="mx-3">
                            <button onClick={(event)=>{
                                writeFormsData(event)
                            }} className="btn btn-color">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Div7;