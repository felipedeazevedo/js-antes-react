// Nullish Coalescing Operator
//const idade = null;

//document.body.innerText = 'Sua idade é: ' + idade ?? 'Não informado';

// Objetos
/*const user = {
  name: 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  }
};*/

//document.body.innerText = JSON.stringify(Object.values(user));

//const address = user.address

//const { address, idade: age, nickname = 'Fernandes' } = user
// Caso o objeto não possua a propriedade nickname, o valor 'Fernandes' será o padrão

//document.body.innerText = JSON.stringify({address, age, nickname});

function mostraIdade({ idade }) {
  return idade
}

//document.body.innerText = mostraIdade(user);

// Rest operator

//const { name, idade, ...rest} = user;

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, , third, ...restArray] = array

//document.body.innerText = JSON.stringify({first, third, restArray});

// Short Syntax
const name = 'Diego';
const age = 27;

/* const user = {
  name,
  age
}; */

//document.body.innerText = JSON.stringify(user);

// Optional Chaining
const user = {
  name: 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
    zip: {
      code: '12345',
      city: 'Brasília'
    },
    showFullAddress() {
      return 'Ok';
    }
  }
};

const key = 'state';

//document.body.innerText = user.address?.zip?.code ?? 'Não informado';
//document.body.innerText = user.address.showFullAddress?.() || 'Não informado';
//document.body.innerText = user.address?.[key];

// Métodos de Arrays

// Template Literals
const nome = null;
const message = `Bem-vindo, ${nome ?? 'visitante'}`;

//document.body.innerText = message;

// Promises

const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

somaDoisNumeros(1, 3)
  .then(soma =>{
    document.body.innerText = soma
  })





