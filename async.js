// Esta função simula uma busca de produto usando uma Promise.
export function buscarProduto() {
    return new Promise((resolve, reject) => {
        // Simula uma operação que demora 2 segundos.
        setTimeout(() => {
            const produto = "Produto encontrado!";
            // A promise é resolvida com o produto encontrado.
            resolve(produto);
        }, 2000);
    });
}
// Função assíncrona que utiliza async/await.
async function mostrarProduto() {
    try {
        // O await espera a Promise terminar.
        const resultado = await buscarProduto();
        // Exibe o resultado depois que a Promise é resolvida.
        console.log(resultado);
    }
    catch (erro) {
        // Trata possíveis erros que possam ocorrer durante a execução da Promise.
        console.error("Erro ao buscar o produto:", erro);
    }
}
// Inicia a função assíncrona.
mostrarProduto();
