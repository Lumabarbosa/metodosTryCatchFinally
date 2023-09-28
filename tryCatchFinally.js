/*function desconto (valor){ //desconto de 15% de no máximo R$ 10,00

    return desc;
}
*/
function precoFinal (valor){
    return valor - (0.15 * valor);
}

const prompt = require('prompt-sync')()
console.log('------------ Simule o valor do desconto ------------')
const preco = parseFloat(prompt('Informe o preço do produto: '))

// métodos try, catch e finally
try{
    function desconto (valor) {
        let desc = 0.15 * valor;
        if (desc > 10){
            throw new Error('O valor calculado ultrapassa o valor do desconto máximo de R$ 10,00.')
        }
        desc = 10;
        console.log(`Você está economizando ${desc}`);
    }
    desconto(preco);
} catch (error) {
    console.log("Erro:" , error.message);
} finally {
    console.log('Bloco "finally" sempre será executado.')
}
