let prodJson =JSON.parse(localStorage.getItem('Produtos'))
document.write('<h1>Estoque:</h1>');
for(let i = 0; i < prodJson.length;i++){
    document.write('<ul>');
    document.write('<li>Nome do produto: '+prodJson[i].nome+'</li>');
    document.write('<li>Código do produto: '+prodJson[i].cod+'</li>');
    document.write('<li>Quantidade no estoque: '+prodJson[i].qtd+'</li>');
    document.write('</ul><hr/>');
}