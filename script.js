// ### CONFIGURANDO O BROKER PARA O NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";

// ### Configurando o ID do cliente MQTT
const clienteId = "web-casa-inteligente-jose";

// ### Criando o cliente MQRR do navegador, POREM ainda não estamos conectados ao BROKER
// const cliente = mqtt.connect(MQTT_URL, {
//     clienteId,
//     clean: true,
//     connectTimeout: 4000,
// });

// ####### Variaveis dos dispositivos
const lampSalaInput = document.getElementById("lamp-sala");
const lampSalaTexto = document.getElementById("lamp-sala-texto");

const cortSalaInput = document.getElementById("cort-sala");
const cortSalaTexto = document.getElementById("cort-sala-texto");

const portSalaInput = document.getElementById("port-sala");
const portSalaTexto = document.getElementById("port-sala-texto");

const lampCoziInput = document.getElementById("lamp-cozinha");
const lampCoziTexto = document.getElementById("lamp-cozi-texto");

const exauCoziInput = document.getElementById("exaus-cozinha");
const exauCoziTexto = document.getElementById("exau-cozi-texto");

const lampVarInput = document.getElementById("lamp-varanda");
const lampVarTexto = document.getElementById("lamp-varanda-texto");

const VarVarInput = document.getElementById("var-varanda");
const VarVarTexto = document.getElementById("var-varanda-texto");

const PortVarInput = document.getElementById("port-varanda");
const PortVarTexto = document.getElementById("port-varanda-texto");

const IrVarInput = document.getElementById("ir-varanda");
const IrVarTexto = document.getElementById("ir-varanda-texto");


// ####### Alterando estado dos dispositivos

// pegando o evento de mudança do botão (ligado/desligado)
lampSalaInput.addEventListener("change", () => {
    // Verifica se o esta como ligado
    const ligado = lampSalaInput.checked === true;

    if(ligado === true){
        console.log("Lampada ligada");
        lampSalaTexto.innerHTML = "Ligado";
    }   else{
        console.log("Lampada desligada");
        lampSalaTexto.innerHTML = "Desligado";
    }
});

cortSalaInput.addEventListener("change", () =>{
    const ligado = cortSalaInput.checked === true;

    if(ligado === true){
        console.log("Cortina aberta");
        cortSalaTexto.innerHTML = "Aberta";
    } else {
        console.log("Cortina fechada");
        cortSalaTexto.innerHTML = "Fechada";
    }
});

portSalaInput.addEventListener("change", () => {
    const ligado = portSalaInput.checked === true;

    if(ligado === true){
        console.log("Porta Aberta");
        portSalaTexto.innerHTML = "Aberta";
    } else {
        console.log("Porta Fechada");
        portSalaTexto.innerHTML = "Fechada";
    }
});

lampCoziInput.addEventListener("change", () => {
    const ligado = lampCoziInput.checked === true;

    if(ligado === true){
        console.log("Lampada ligada");
        lampCoziTexto.innerHTML = "Ligada";
    } else {
        console.log("Lampada desligada");
        lampCoziTexto.innerHTML = "Desligada";
    }
});

exauCoziInput.addEventListener("change", () => {
    const ligado = exauCoziInput.checked === true;

    if(ligado === true){
        console.log("Exaustor ligado");
        exauCoziTexto.innerHTML = "Ligado";
    } else {
        console.log("Exautor desligado");
        exauCoziTexto.innerHTML = "Desligado";
    }
});


lampVarInput.addEventListener("change", () => {
    const ligado = lampVarInput.checked === true;

    if(ligado === true){
        console.log("Lampada ligada");
        lampVarTexto.innerHTML = "Ligado";
    } else {
        console.log("Lampada desligada");
        lampVarTexto.innerHTML = "Desligado";
    }
});

VarVarInput.addEventListener("change", () => {
    const ligado = VarVarInput.checked === true;

    if(ligado === true){
        console.log("Varal aberto");
        VarVarTexto.innerHTML = "Ligado";
    } else {
        console.log("Varal fechado");
        VarVarTexto.innerHTML = "Desligado";
    }
});

PortVarInput.addEventListener("change", () => {
    const ligado = PortVarInput.checked === true;

    if(ligado === true){
        console.log("Porta aberta");
        PortVarTexto.innerHTML = "Ligado";
    } else {
        console.log("Porta desligado");
        PortVarTexto.innerHTML = "Desligado";
    }
});

IrVarInput.addEventListener("change", () => {
    const ligado = IrVarInput.checked === true;

    if(ligado === true){
        console.log("Irrigador ligado");
        IrVarTexto.innerHTML = "Ligado";
    } else {
        console.log("Irrigador desligado");
        IrVarTexto.innerHTML = "Desligado";
    }
});




// ### chamando um evento do JS do tipo "DOMContentLoaded", que é
// o evento que acontece após toda a minha página de HTML ser carregada
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Página carregada com sucesso ✅;.. Conectando ao Mosquitto!");
//     // ### Estabelecendo a conexão com o broker do mqtt
//     cliente.on("connect", () => {
//         console.log("Conexão estabelecida com Sucesso ✅!");
//         console.log("Cliente conectado: ", clienteId);
        
//         // ### criando um topico para acessar mensagens do MQTT
//         const topicoTeste = "teste/jose";

//         // ### recebendo mensagens do topico criado
//         cliente.subscribe(topicoTeste);
//     });

//     // ### Preparando mensagem de erro caso algo aconteça
//     cliente.on("error", () => {
//         console.error("Erro ao conecttar ao Broker MQTT 🚫!");
//         console.error("erro");
//     });

//     // ### Recebendo as mensagens dos tópicos assinados no MQTT pelo cliente
//     cliente.on("message", (topico, mensagem) => {
//         console.log("Topico rebido: ", topico);
//         console.log("Mensagem recebida: ", mensagem);
//     });
// });


