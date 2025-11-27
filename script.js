// ### CONFIGURANDO O BROKER PARA O NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";

// ### Configurando o ID do cliente MQTT
const clienteId = "web-casa-inteligente-jose";

// ### Criando o cliente MQRR do navegador, POREM ainda não estamos conectados ao BROKER
const cliente = mqtt.connect(MQTT_URL, {
    clienteId,
    clean: true,
    connectTimeout: 4000,
});

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







// ### chamando um evento do JS do tipo "DOMContentLoaded", que é
// o evento que acontece após toda a minha página de HTML ser carregada
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso ✅;.. Conectando ao Mosquitto!");
    // ### Estabelecendo a conexão com o broker do mqtt
    cliente.on("connect", () => {
        console.log("Conexão estabelecida com Sucesso ✅!");
        console.log("Cliente conectado: ", clienteId);

        // ### criando um topico para acessar mensagens do MQTT
        const topicoTeste = "teste/jose";

        // ### recebendo mensagens do topico criado
        cliente.subscribe(topicoTeste);
    });

    // ### Preparando mensagem de erro caso algo aconteça
    cliente.on("error", () => {
        console.error("Erro ao conecttar ao Broker MQTT 🚫!");
        console.error("erro");
    });

    // ### Recebendo as mensagens dos tópicos assinados no MQTT pelo cliente
    cliente.on("message", (topico, mensagem) => {
        console.log("Topico rebido: ", topico);
        console.log("Mensagem recebida: ", mensagem.toString());
    });

    lampSalaInput.addEventListener("change", () => {
        const TOPICO_LAMP_SALA = 'casa-jose/sala/lamp';

        // Verifica se o dispositivo esta como ligado
        const ligado = lampSalaInput.checked === true;

        if (ligado === true) {
            // console.log("Lampada ligada");
            cliente.publish(TOPICO_LAMP_SALA, 'Ligado');
            lampSalaTexto.innerHTML = "Ligado";
        } else {
            // console.log("Lampada desligada");
            cliente.publish(TOPICO_LAMP_SALA, 'Desligado');
            lampSalaTexto.innerHTML = "Desligado";
        }
    });

    cortSalaInput.addEventListener("change", () => {
        const TOPICO_CORT_SALA = 'casa-jose/sala/cort';

        const ligado = cortSalaInput.checked === true;

        if (ligado === true) {
            // console.log("Cortina aberta");
            cliente.publish(TOPICO_CORT_SALA, 'Aberta');
            cortSalaTexto.innerHTML = "Aberta";
        } else {
            // console.log("Cortina fechada");
            cliente.publish(TOPICO_CORT_SALA, 'Fechada');
            cortSalaTexto.innerHTML = "Fechada";
        }
    });

    portSalaInput.addEventListener("change", () => {
        const TOPICO_PORT_SALA = 'casa-jose/sala/port';
         
        const ligado = portSalaInput.checked === true;

        if (ligado === true) {
            // console.log("Porta Aberta");
            cliente.publish(TOPICO_PORT_SALA, 'Aberta');
            portSalaTexto.innerHTML = "Aberta";
        } else {
            // console.log("Porta Fechada");
            cliente.publish(TOPICO_PORT_SALA, 'Fechada');
            portSalaTexto.innerHTML = "Fechada";
        }
    });

    lampCoziInput.addEventListener("change", () => {
        const TOPICO_LAMP_COZI = 'casa-jose/cozi/lamp';

        const ligado = lampCoziInput.checked === true;

        if (ligado === true) {
            // console.log("Lampada ligada");
            cliente.publish(TOPICO_LAMP_COZI, 'Ligada');
            lampCoziTexto.innerHTML = "Ligada";
        } else {
            // console.log("Lampada desligada");
            cliente.publish(TOPICO_LAMP_COZI, 'Desligada');
            lampCoziTexto.innerHTML = "Desligada";
        }
    });

    exauCoziInput.addEventListener("change", () => {
        const TOPICO_EXAU_COZI = 'casa-jose/cozi/exau';

        const ligado = exauCoziInput.checked === true;

        if (ligado === true) {
            // console.log("Exaustor ligado");
            cliente.publish(TOPICO_EXAU_COZI, 'Ligado');
            exauCoziTexto.innerHTML = "Ligado";
        } else {
            // console.log("Exautor desligado");
            cliente.publish(TOPICO_EXAU_COZI, 'Desligado');
            exauCoziTexto.innerHTML = "Desligado";
        }
    });


    lampVarInput.addEventListener("change", () => {
        const TOPICO_LAMP_VAR = 'casa-jose/var/lamp';
        const ligado = lampVarInput.checked === true;

        if (ligado === true) {
            // console.log("Lampada ligada");
            cliente.publish(TOPICO_LAMP_VAR, 'Ligado');
            lampVarTexto.innerHTML = "Ligado";
        } else {
            // console.log("Lampada desligada");
            cliente.publish(TOPICO_LAMP_VAR, 'Desligado');
            lampVarTexto.innerHTML = "Desligado";
        }
    });

    VarVarInput.addEventListener("change", () => {
        const TOPICO_VAR_VAR = 'casa-jose/var/var';

        const ligado = VarVarInput.checked === true;

        if (ligado === true) {
            // console.log("Varal aberto");
            cliente.publish(TOPICO_VAR_VAR, 'Ligado');
            VarVarTexto.innerHTML = "Ligado";
        } else {
            // console.log("Varal fechado");
            cliente.publish(TOPICO_VAR_VAR, 'Desligado');
            VarVarTexto.innerHTML = "Desligado";
        }
    });

    PortVarInput.addEventListener("change", () => {
        const TOPICO_PORT_VAR = 'casa-jose/var/port';

        const ligado = PortVarInput.checked === true;

        if (ligado === true) {
            // console.log("Porta aberta");
            cliente.publish(TOPICO_PORT_VAR, 'Ligado');
            PortVarTexto.innerHTML = "Ligado";
        } else {
            // console.log("Porta desligado");
            cliente.publish(TOPICO_PORT_VAR, 'Desligado');
            PortVarTexto.innerHTML = "Desligado";
        }
    });

    IrVarInput.addEventListener("change", () => {
        const TOPICO_IR_VAR = 'casa-jose/var/ir';

        const ligado = IrVarInput.checked === true;

        if (ligado === true) {
            // console.log("Irrigador ligado");
            cliente.publish(TOPICO_IR_VAR, 'Ligado');
            IrVarTexto.innerHTML = "Ligado";
        } else {
            // console.log("Irrigador desligado");
            cliente.publish(TOPICO_IR_VAR, 'Desligado');
            IrVarTexto.innerHTML = "Desligado";
        }
    });


});