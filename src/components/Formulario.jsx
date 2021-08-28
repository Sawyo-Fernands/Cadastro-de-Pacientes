import React, { useState,useEffect } from 'react'


export default function Formulario(props){

    const inicial={
        nomeCompleto:"",
        telefone:"",
        email:"",
        endereco:""
    }

    const [form,setForm]=useState(inicial)

    useEffect(()=>{
        if(props.usuario===''){
            setForm({...inicial})

        }else{
            setForm({...props.dados[props.usuario]})
        }
    },[props.usuario,props.dados])
    

    function Input(e){

        setForm({...form,[e.target.name]:e.target.value})
        console.log(form)

    }

    function Submit(e){
        e.preventDefault();
        props.AddEdit(form)
    }

    return (

            <form autoComplete="off" onSubmit={Submit}>
                <div className="form-group input-group">
                    <div className="input group-prepend">
                        <div className="input group-text">
                            <i className="fas fa-user" style={{'padding':'0.7rem','backgroundColor':'lightgray'}}></i>
                        </div>
                    </div>
                        <input className="form-control" 
                        placeholder="Nome Completo" 
                        name="nomeCompleto"
                        onChange={Input}
                        type="text"
                        value={form.nomeCompleto}
                        />

                </div>

                <br/>

                <div  style={{'display':'flex',"gap":"1rem"}}>
                <div className="form-group input-group ">
                    <div className="input group-prepend">
                        <div className="input group-text">
                            <i className="fas fa-mobile-alt" style={{'padding':'0.7rem','backgroundColor':'lightgray'}}></i>
                        </div>
                    </div>
                        <input className="form-control" 
                        placeholder="Telefone" 
                        name="telefone"
                        onChange={Input}
                        type="text"
                        value={form.telefone}

                        />

                </div>

                

                <div className="form-group input-group ">
                    <div className="input group-prepend">
                        <div className="input group-text">
                            <i className="fas fa-envelope" style={{'padding':'0.7rem','backgroundColor':'lightgray'}}></i>
                        </div>
                    </div>
                        <input className="form-control" 
                        placeholder="Email" 
                        name="email"
                        onChange={Input}
                        type="text"
                        value={form.email}

                        />

                </div>
                </div>
                <div className="form-group" style={{'marginTop':'1rem'}}>
                    <textarea name="endereco" 
                    placeholder="endereco" 
                    className="form-control"
                    onChange={Input}
                    value={form.endereco}
                    ></textarea>
                </div>
                <input type="submit"
                 value={props.usuario==='' ?'Save' : 'Edit'}
                className="btn btn-primary btn-block"
                style={{'marginTop':'1rem'}} />
            </form>
    )

}