const FirstComponent = () => {
    
    const nome = "renan";
    const dados = {
        workON: "Dev Front-End",
        age: 28
    }
    return (

        
        <div>
            <h1 className="font-bold">Primeiro component de {nome} ele atua como {dados.workON}</h1>
        </div>
    )
}

export default FirstComponent;