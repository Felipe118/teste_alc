const Calculo = require("../Model/Calculo")

module.exports = class CalculoController {
    
    // metodo responsavel por fazer o calculo e salvar as informações no banco de dados
   static  salveImc(req,res){

    const weight = Number(req.body.weight)
    const height  = Number(req.body.height)

    console.log( weight)
    console.log( height)
    let classification;

    //validações os dois valores não podem ser 0
    if(height == 0){
        res.status(422).json({message: "A altura não pode ser 0"})
        return
    }
    if(weight == 0){
        res.status(422).json({message: "O peso não pode ser 0"})
        return
    }
    
    //construindo o calculo do imc a formula é peso dividado por altura ao quadrado
    const result =  weight / Math.pow(height,2)

   const resultado = result.toFixed(2)
   console.log(resultado)
    

   // Pegando a variavel resultado e comparando a cada classificação do imc 
    if(resultado <= 17){
        classification = 'Muito abaixo do peso'
    }else if(resultado > 17 && resultado <= 18.5){
        classification = 'Abaixo do peso'
    }else if(resultado > 18.5 && resultado <= 24.9){
        classification = 'Peso normal'
    }else if(resultado >= 25 && resultado <= 29.9){
        classification = 'Acima do Peso'
    }else if(resultado >=30 && resultado <=34.9){
        classification = 'Obesidade I'
    }else if(resultado >=35 && resultado <=39.9){
        classification = 'Obesidade II'
    }else if(resultado >= 40){
        classification = 'Obesidade III'
    }

    //criando objeto com as informaçoes do front end 
    const imc = {
        name: req.body.name,
        weight: weight,
        height: height,
        result: resultado,
        classification:  classification
    }
    
   
    //salvando os dados do imc no banco de dados
    Calculo.create(imc)
      .then(() => {

        res.status(200).json({
            message: "O resultado do IMC foi salvo com sucesso",
        })
      })
       .catch((err) => console.log(err))
   
}

    //metodo responsavel por trazer todos registros imc do banco de dados
    // enviando a resposta para o front
    static async listCalculos(req,res){

        console.log(req.query)
        Calculo.findAll({})
        .then((data) => {
    
            const imcs = data.map((resultados) => resultados.get({ plain: true }))

            res.status(200).json({
                imc: imcs
            })

          })
          .catch((err) => console.log(err))
    }
}