# Atividade - Async/Await, Promises e Testes Unitários

## Objetivo

Implementar exemplos práticos utilizando programação assíncrona em TypeScript.

## Conteúdos

- Promise
- Async/Await
- Simulação de operação assíncrona
- Tratamento de erros com try/catch
- Teste automatizado

## Funcionamento

A função `buscarProduto()` simula uma busca de produto que demora 2 segundos para ser concluída.

A função `mostrarProduto()` utiliza `async/await` para aguardar o resultado da Promise.

O arquivo `async.test.ts` realiza um teste para verificar se o resultado obtido é o esperado.

## Execução

Para compilar:
npx tsc async.ts

Para executar:
node async.js

Para compilar o teste:
npx tsc async.test.ts

Para executar o teste:
node async.test.js