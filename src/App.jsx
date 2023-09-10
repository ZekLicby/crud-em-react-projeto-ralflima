import {useState} from 'react'

import './App.css';

import Form from './Form'
import Table from './Table'

function App() {

  const [indiceVetor, setIndiceVetor] = useState('')
  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [cidade, setCidade] = useState('')
  const [vetor, setVetor] = useState([])

  const cadastrar = () => {
    let obj = {
      'nome': nome,
      'idade': idade,
      'cidade': cidade
    }
    setVetor([...vetor, obj])

    setNome('')
    setIdade('')
    setCidade('')
  }

  const selecionar = (index) => {
    setIndiceVetor(index)

    setNome(vetor[index].nome)
    setIdade(vetor[index].idade)
    setCidade(vetor[index].cidade)

    setBtnCadastrar(false)
  }

  const cadastroPorTecla = (e) => {
    if(e.key === 'Enter'){
      cadastrar()
    }
  }

  const alterar = () => {
    let obj = {
      'nome': nome,
      'idade': idade,
      'cidade': cidade
    }

    let copiaVetor = [...vetor]
    copiaVetor[indiceVetor] = obj
    setVetor(copiaVetor)

    setNome('')
    setIdade('')
    setCidade('')
    setBtnCadastrar(true)
  }

  const remover = () => {
    let copiaVetor = [...vetor]
    copiaVetor.splice(indiceVetor, 1)
    setVetor(copiaVetor)

    setNome('')
    setIdade('')
    setCidade('')
    setBtnCadastrar(true)
  }

  const cancelar = () => {
    setNome('')
    setIdade('')
    setCidade('')
    setBtnCadastrar(true)
  }
  return (
    <>
      <Form btnCadastrar={btnCadastrar} setNome={setNome} setIdade={setIdade} setCidade={setCidade} cadastrar={cadastrar} nome={nome} idade={idade} cidade={cidade} cadastrarPorTecla={cadastroPorTecla} alterar={alterar} remover={remover} cancelar={cancelar}
      />
      <Table vetor={vetor} selecionar={selecionar} />
    </>
  );
}

export default App;
