import { CartaoDeCredito } from "./CartaoDeCredito.js";
import { Pix } from "./Pix.js"
import { Boleto } from "./BoletoBancario.js";

const cartaoDeCredito = new CartaoDeCredito(150, "1234 5678 9012", "João Silva");
const pix = new Pix(200, "123.456.789-00");
const boletoBancario = new Boleto(100, "12345678 890123 23456 0 24456");

cartaoDeCredito.realizarPagamento();
pix.realizarPagamento();
boletoBancario.realizarPagamento();
