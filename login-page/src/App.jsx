import imgAnimada from "../public/tech.svg"

export default function App(){
  return (
    <div className="w-full h-screen flex bg-[#201B2C]">
     <div className="esquerda w-[50%] h-full flex items-center justify-center flex-col bg-[#606066]" >
      <h1 className="text-[30px] font-bold text-[#00FF88]">Entre para o nosso time</h1>
      <img src={imgAnimada} alt="imagem-animada" width={550}/>
     </div>
     <div className="direita w-[50%] h-full flex items-center justify-center ">
        <div className="w-[50%] h-[350px] bg-[#5B3AC7FF] rounded-xl">
          <div className="w-full h-[15%] flex items-center justify-center ">
            <h1 className="text-[30px] text-[#db6c38] font-bold">LOGIN</h1>
          </div>
          <div className="w-full h-[70%] p-[20px]">
            <label htmlFor="user" className="text-white ">Usuário</label>
            <input type="text" id="user" className="w-full rounded-md p-[10px] bg-amber-400 text-white mb-4" />

            <label htmlFor="pass" className="text-white ">Senha</label>
            <input type="password" id="pass" className="w-full rounded-md p-[10px] bg-amber-400 text-white" />

          </div>
          <div className="w-full h-[15%] ">
            <button className="w-full p-[10px] text-[20px] bg-amber-700 " ></button>
          </div>
        </div>
     </div>
    </div>

    
  )
}