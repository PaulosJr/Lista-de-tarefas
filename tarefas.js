let contador = 0;
let input  = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
  // PEGAR O VALOR DIGITADO NO INPUT
  let valorInput = input .value.trim();

  // SE NÃO FOR VAZIO
  if (valorInput) {
    ++contador;

    let novoItem = document.createElement("div");
    novoItem.id = contador;
    novoItem.className = "item";

    let itemIcone = document.createElement("div");
    itemIcone.className = "item-icone";
    itemIcone.onclick = function () {
      marcarTarefa(contador);
    };

    let icone = document.createElement("i");
    icone.id = `icone_${contador}`;
    icone.className = "mdi mdi-circle-outline";
    itemIcone.appendChild(icone);

    let itemNome = document.createElement("div");
    itemNome.className = "item-nome";
    itemNome.textContent = valorInput;

    let itemBotao = document.createElement("div");
    itemBotao.className = "item-botao";
    let deleteButton = document.createElement("button");
    deleteButton.onclick = function () {
      deletar(contador);
    };
    deleteButton.className = "delete";
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "mdi mdi-delete";
    deleteButton.appendChild(deleteIcon);
    deleteButton.textContent = "Deletar";
    itemBotao.appendChild(deleteButton);

    novoItem.appendChild(itemIcone);
    novoItem.appendChild(itemNome);
    novoItem.appendChild(itemBotao);

    main.appendChild(novoItem);

    // ZERAR O CAMPO DE ENTRADA
    input.value = "";
    input.focus();
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  console.log(classe);

  if (item.classList.contains("item")) {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
}

  input.addEventListener("keyup", function (event) {
    // SE TECLOU ENTER (13)
    if (event.keyCode === 13){ 
      event.preventDefault();
      btnAdd.click();
    }
  }); 

 


