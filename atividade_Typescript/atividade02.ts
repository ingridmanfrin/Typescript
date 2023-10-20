interface UsuarioModelo {
    nome: string
    idade: number
    email: string
    senha: string
    foto: string
}

const Usuario1: UsuarioModelo = { 
    nome: "Aline",
    idade: 28,
    email: "aline@email.com.br",
    senha: "12345",
    foto: 'https://media.istockphoto.com/id/1149761177/pt/foto/three-little-fluffy-yellow-gosling-on-nature-background.jpg?s=612x612&w=0&k=20&c=a2MVg3CjaUGOGaEKmPn7002bIQhxtM5BtJofEJMssXs='
}
console.log(Usuario1)

const Usuario2: UsuarioModelo = { 
    nome: "Marcus",
    idade: 25,
    email: "marcus@email.com.br",
    senha: "45678",
    foto: 'https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg'
}
console.log(Usuario2)