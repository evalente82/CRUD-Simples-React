import React, {useState} from 'react'
import Formulario from './Formulario'
import Tabela from './Tabela'
import './App.css';




function App() {

  const [indiceVetor, setIndiceVetor] = useState('')
  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState ('')
  const [cidade, setCidade] = useState('')
  const [vetor, setVetor] = useState([])


  //função para Cadastrar
  const cadastrar = () =>{
    validarFormulario()
    if(flag === 1) return
      let obj = {'nome': nome, 'idade': idade, 'cidade': cidade}
      setVetor([...vetor, obj]) //os tres pontinhos lista todos os obj que contem no vetor
                                //depoi adiciona um novo obj      
      limparCampos()
      
  } 
  //fim do cadastrar

  //funcao para selecionar o cliente
const selecionar = (indice) =>{
  setIndiceVetor(indice)

  setNome(vetor[indice].nome)
  setIdade(vetor[indice].idade)
  setCidade(vetor[indice].cidade)  
  setBtnCadastrar(false)
}
//fim da função

//função para alterar dados
const alterar = () =>{
  validarFormulario()
  if(flag === 1) return
  let obj = {'nome': nome, 'idade': idade, 'cidade': cidade}
  let copiaVetor = [...vetor]
  copiaVetor[indiceVetor] = obj
  setVetor(copiaVetor)
  limparCampos()  
  setBtnCadastrar(true)
}
//fim alterar

//função para remover
const remover = () =>{
  let copiaVetor = [...vetor]
  copiaVetor.splice(indiceVetor, 1)
  setVetor(copiaVetor)
  limparCampos()
  setBtnCadastrar(true)
}
//fim remover

//função Cancelar
const cancelar = () =>{
  limparCampos()
  setBtnCadastrar(true)
}

//fim cancelar

//função de limpar os campos
const limparCampos = () =>{
  setNome('')
  setIdade('')
  setCidade('')
}
//fim limpar campos

//validar formulário
let flag = 0
function validarFormulario(){
  if(!nome || !idade || !cidade){
    alert('Campo Obrigatório !') 
    flag = 1
  }else{
    flag = 0
  }
}

//fim validar formulário

  return (
    <React.StrictMode>
    <div>
      <Formulario
        btnCadastrar = {btnCadastrar}
        setNome={setNome}
        setIdade={setIdade}
        setCidade={setCidade}
        cadastrar={cadastrar}
        nome={nome}
        idade={idade}
        cidade={cidade}
        alterar={alterar}
        remover={remover}
        cancelar={cancelar}/>
      <Tabela vetor={vetor} selecionar={selecionar}/>
    </div>
    </React.StrictMode>
  );
}

export default App;
