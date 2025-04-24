
import { useState } from "react"
import imgAnimada from "../public/tech.svg"
import { ToastContainer, toast } from 'react-toastify';

export default function App(){
  //hooks 
  const [user, setUser]= useState("")
  const [pass, setPass]= useState("")
 

 // função para usar no click do botao 
 function clickLogin(){
   
    if(!user || !pass){
      return toast.error("Preencha todos os campos")

    }

    if (user.length <8 || pass.length <8){
      return toast.error("Senha Inválida")
    }

    

    //requisiçao para o backend
    console.log(user)
    console.log(pass)
    
    
    toast.success('Sucesso!')
 }

  return (
    <div className="w-full h-screen flex bg-[#201B2C]">
      <ToastContainer
      position="top-right"
      autoClose={5000}
      theme="colored" 
      />
     <div className="esquerda w-[50%] h-full flex items-center justify-center flex-col bg-[#201B2C]" >
      <h1 className="text-[30px] font-bold text-[#e0ac39]">Entre para o nosso time</h1>
      <img src={imgAnimada} alt="imagem-animada" width={500}/>
     </div>
     <div className="direita w-[50%] h-full flex items-center justify-center ">
        <div className="w-[50%] h-[350px] bg-[#ae47b8] rounded-xl">
          <div className="w-full h-[15%] flex items-center justify-center ">
            <h1 className="text-[30px] text-[#f0f32a] font-bold">LOGIN</h1>
          </div>
          <div className="w-full h-[60%] p-[20px]">
            <label htmlFor="user" className="text-white ">Usuário</label>
            <input 
            onChange={
              (event)=> {setUser(event.target.value)}

            }
            type="text" 
            id="user" 
            className="w-full rounded-md p-[10px] bg-amber-400 text-white mb-4" 
            />

            <label htmlFor="pass" className="text-white ">Senha</label>
            <input
              onChange={
              (event) => {setPass(event.target.value)}

            }
            type="password"
            id="pass" 
            className="w-full rounded-md p-[10px] bg-amber-400 text-white" 
              />
            <div className="w-full flex items-center justify-center text-white pt-1"> <a href="">Esqueceu sua Senha?</a>
            </div>
          </div>
          <div className="w-full h-[25%] p-[20px] flex items-center justify-center ">
            <button 
            onClick={clickLogin}
            className="w-full h-[50px]  text-[20px] bg-[#ebbc21] rounded-lg text-[#eeebeb] font-bold" >Login</button>
          </div>
        </div>
     </div>
    </div>

    
  )
}