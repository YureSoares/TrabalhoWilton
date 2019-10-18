function fazerCadastro(){
    let produtos = [];
    let nome = document.getElementById('nome_produto').value;
    let codigo = document.getElementById('codigo_produto').value;
    let qtde = document.getElementById('qtde_produto').value;
    let localBase = JSON.parse(localStorage.getItem('Produtos'));
    if(nome==''){
        alert("Digite o nome do produto para continuar!")
    }else if(codigo==''){
        alert("Digite o codigo do produto para continuar!")
    }else{ 
        if(localBase != null){
            produtos = localBase;
        }
        produtos.push({nome: nome,cod: codigo, qtd: qtde}) 
        localStorage.setItem("Produtos", JSON.stringify(produtos))
        alert("Produto cadastrado com sucesso!")
        document.getElementById('nome_produto').value = '';
        document.getElementById('codigo_produto').value = '';
        document.getElementById('qtde_produto').value = '1';
        contagemCarrinho();
    }   
}

function contagemCarrinho() {
    let localBase = JSON.parse(localStorage.getItem('Produtos'));
    let quantidade = 0;
    if(localBase != null){
        quantidade = localBase.length;
    }
    document.getElementById('itens_estoque').innerHTML = quantidade;
}

contagemCarrinho()