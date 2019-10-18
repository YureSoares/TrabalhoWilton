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
    }else if(qtde==''){
        alert("Selecione a quantidade de produtos para continuar!")
    }else if(localBase != null){
        produtos = localBase;
    }
    produtos.push({nome: nome,cod: codigo, qtd: qtde}) 
    localStorage.setItem("Produtos", JSON.stringify(produtos))
    window.location.href='visualizaProd.html'; 
}