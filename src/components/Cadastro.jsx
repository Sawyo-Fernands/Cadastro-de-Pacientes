import React,{useState,useEffect} from 'react'
import Formulario from './Formulario'
import fireDb from '../database/firebase'

export default function Cadastro(){


    //Constante para pegar os dados
    const [dados,setDados]=useState({}) 


    //Constante para manipular os dados
    const [usuario,setUsuario]=useState('')

    function AddEdit(objeto){
        
        if(usuario ===''){
  
        fireDb.child('pacientes').push(
            objeto,
            error=>{
                if(error){
                    console.log('Error Save:(')
                }
            }
            )

        }else{
            fireDb.child(`pacientes/${usuario}`).set(
                objeto,
                error=>{
                    if(error){
                        console.log('Error Updade')
                    }
                }
            )
        }

    }

    useEffect( ()=>{

       fireDb.child('pacientes').on('value',dbPhoto =>{
           if(dbPhoto != null){

            setDados({
                ...dbPhoto.val()
            })
           }
        })

    },[])

    function Deletar(key){

        if(window.confirm("Deseja deletar este paciente do sistema?")){
            fireDb.child(`pacientes/${key}`).remove(
                error=>{
                    if(error){
                        console.log('Error Remove')
                    }
                }
            )
        }

    }


    return (
        <>
        
        <header >

        <div className="jumbotron jumbotron-fluid" style={{"backgroundColor":'lightgray',"padding":"4rem"}}>
            <div className="container" >
                <h1 className="display-4">Cadastro de Pacientes</h1>
                <p className="lead">Plataforma de cadastro de pacientes .</p>
            </div>
        </div>

        </header>
        

        <div className="row" style={{'marginTop':"2rem",'padding':'1rem'}}>

            <div className="col-md-5">

                <Formulario {...({AddEdit,usuario,dados})}/>

            </div>

            <div className="col-md-7">

                <table className="table table-borderless table-stripped">
                    <thead style={{'backgroundColor':'lightgrey'}}>
                        
                        <tr>
                            <td>Nome </td>
                            <td>Email</td>
                            <td>Telefone</td>
                            <td>Ações</td>
                            
                        </tr>
                       
                    </thead>
                    
                    <tbody>
                        {
                            Object.keys(dados).map( (valores)=>{
                                return(
                                    <tr key={valores}>
                                        <td style={{'borderBottom':'1px solid grey'}}>{dados[valores].nomeCompleto}</td>
                                        <td style={{'borderBottom':'1px solid grey'}}>{dados[valores].email}</td>
                                        <td style={{'borderBottom':'1px solid grey'}}>{dados[valores].telefone}</td>

                                        <td style={{'display':'flex','gap':'0.1rem'}}>
                                            <a href="#" 
                                            className="btn btn-primary" 
                                            onClick={()=>{
                                                setUsuario(valores)
                                                console.log(usuario)
                                            }}
                                            >
                                                <span className="fas fa-pencil-alt" ></span>
                                            </a>
                                            <a href="#" 
                                            className="btn btn-danger"
                                            onClick={()=>{
                                                Deletar(valores)
                                            }}>
                                            <span className="fas fa-trash-alt" ></span>                 
                                            </a>
                                        </td>                                     
                                    </tr>
                                )
                            } )
                        }
                    </tbody>
                </table>

            </div>

        </div>

        </>
        
    )

}