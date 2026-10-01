import {buscarProduto} from './async.js';

buscarProduto().then((resultado) => {
        if (resultado === "Produto encontrado!") {
            console.log("Teste passou!");
        } else {
            console.error("Teste falhou!");
        }
});