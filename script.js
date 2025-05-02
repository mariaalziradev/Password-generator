function gerarSenha() {
  const length = document.getElementById("length").value;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let senha = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    senha += chars[randomIndex];
  }

  document.getElementById("senhaGerada").textContent = `Senha gerada: ${senha}`;
}
