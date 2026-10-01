import { usuarios } from "../dados/listagem-usuarios.js";

export function login(usuario, senha) {
  return new Promise((resolve, reject) => {
    const usuarioValido = usuarios.find(
      (user) => user.email === usuario && user.senha === senha,
    );
    if (usuarioValido) {
      resolve(usuarioValido);
    } else {
      reject("Dados incorretos. Favor verificar e tentar novamente");
    }
  });
}
