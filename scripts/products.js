// Importação da base de dados e das funçoes

import { database } from "./database.js";
import { getProdId, loadProducts} from "./functions.js";

// -------- Variaveis do projeto ------------------------
const sectionNovidades = document.querySelector("#brinquedos")
const sectionMaisVendidos = document.querySelector("#colecionaveis")
const sectionPromocoes = document.querySelector("#lego")
console.log(sectionNovidades)

//Fitros
//let filtroCategoriaNovidades = database.filter(produto => produto.classificacaoProduto === "novidades" && produto.exibirHome == true )
//let filtroMaisVendidos = database.filter(produto => produto.classificacaoProduto === "Mais_Vendidos" && produto.exibirHome == true )
//let filtroPromocoes = database.filter(produto => produto.classificacaoProduto === "promocoes" && produto.exibirHome == true )


//Funçoes com parametros
loadProducts(database,sectionNovidades);
loadProducts(database,sectionMaisVendidos);
loadProducts(database,sectionPromocoes);
getProdId()
