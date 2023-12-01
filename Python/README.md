# # Analisador de rotina diária de um paciente com Alzheimer de acordo com testes de desempenho cognitivo

## Participantes:
* <h4> Lucas Masaki Nagahama - RM: 553084

## Instrucoes de uso:

1. Basta substituir o arquivo . csv e colocá-lo em formato de Dataframe com o pandas.
2. Deve rodar o código e irá imprimir os resultados com as atividades que melhoram e pioram o estado mental do paciente

## Detalhes de desenvolvimento do código:

* Inicialmente precisei criar um dado de rotina diária para um paciente com Alzheimer e das notas tiradas nos testes de desempenho cognitivo em formato .csv.

* Instalamos o pandas.

* Armazenei o arquivo .csv presente na pasta em uma variável.

* Criei uma função que retorna a média das notas tiradas pelo paciente nos testes diários e a contagem dos dias de teste aplicados

* Criei uma função que retorna uma lista com 3 listas, um com a listagem das atividades da rotina do paciente e as outras duas para ver a quantidade de vezes que cada atividade aparece em dias de nota acima e abaixo da média

* Criei uma função que tira termos rotineiros, aqueles que não tem como serem mudados na rotica, como a alimentação.

* Criei uma função que separa listas das atividades que melhoram e pioram.

* Criei uma função para utilizar segundo termo no .sort.

* Após criar todas as funções, chamei elas em uma ordem lógica:

    1. Adicionar "nada" em termos vazios na coluna "Data".

    2. Chamar função que calcula a média das notas dos testes diários e calcular quantidades de dias de aplicação.

    3. Adicionar as notas do dia nos espaços vazios na coluna "Nota"

    4. Chamar função que faz uma lista com atividades e notas que melhoraram e pioraram de acordo com a média calculada.

    5. Chamar função que tira termos rotineiros.
    
    6. Chamar função que faz duas listas com as atividades que mais aparecem nos dias que melhora a nota e piora

    7. Alinhar as listas em ordem decrescente de acordo com a quantidade de dias

    8. Printar top 3 atividades que mais melhoraram e pioraram 