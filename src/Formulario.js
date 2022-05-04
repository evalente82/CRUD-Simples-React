//componente
function Formulario({
    btnCadastrar, 
    setNome, 
    setIdade, 
    setCidade, 
    cadastrar, 
    nome, 
    idade, 
    cidade,
    alterar,
    remover,
    cancelar
}){

    return(
        <form>
            <input type='text' placeholder="Nome" value={nome}  className='form-control' onChange={e =>setNome(e.target.value)}></input>
            {/* <label>Obrigatório</label> */}
            <input type='number'  placeholder="Idade" value={idade}  className='form-control' onChange={e =>setIdade(e.target.value)}></input>
            <input type='text' placeholder="Cidade" value={cidade}  className='form-control' onChange={e =>setCidade(e.target.value)}></input>
            
            {//se botão cadastrar for verdadeiro
    
                btnCadastrar ?
                <input type='button' value='Cadastrar' className='btn btn-primary' onClick={cadastrar}></input>
                :
                <div>
                    <input type='button' value='Alterar' className='btn btn-secondary' onClick={alterar}></input>
                    <input type='button' value='Exluir' className='btn btn-danger' onClick={remover}></input>
                    <input type='button' value='Cancelar' className='btn btn-success' onClick={cancelar}></input>
                </div>
            }

        </form>
    )
}


//exportar
export default Formulario