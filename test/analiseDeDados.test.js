const analiseDeDados = require("../src/analiseDeDados");

describe('Testes da classe AnaliseDeDados', () => {
    let dados;

    beforeEach(() => {
        dados = new analiseDeDados();
        dados.adicionarDados([2,4,6,8,10]);
    });

    test('Adicionar dados corretamente', () => {
        dados.adicionarDados([12,14,16,18,20])
        expect(dados.dados).toEqual([2,4,6,8,10,12,14,16,18,20])
    });

    test('Erro ao adicionar dados', () => {
        expect(() => dados.adicionarDados(11)).toThrow("Os dados devem ser um array.");
    })

    test('Limpar dados', () => {
        dados.limparDados();
        expect(dados.dados).toEqual([]);
    })

    test('Ordenar dados', () => {
        expect(dados.ordenarDados()).toEqual([2,4,6,8,10])
    })

    test('Calculo Média', () => {
        expect(dados.calcularMedia()).toBe(6);
    })

    test('Calculo Mediana', () => {
        expect(dados.calcularMediana()).toBe(6);
    })

    test('Menor valor', () => {
        expect(dados.encontrarMinimo()).toBe(2);
    })

    test('Maior valor', () => {
        expect(dados.encontrarMaximo()).toBe(10);
    })

    test('Calculo Soma', () => {
        expect(dados.calcularSoma()).toBe(30);
      });

    test('Calculo Produto', () => {
        expect(dados.calcularProduto()).toBe(3840)
    });
});
