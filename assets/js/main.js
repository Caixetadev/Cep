const pesquisarCep = async() => {
  const cep = document.getElementById('cep').value
  const url = `https://cep.awesomeapi.com.br/json/${cep}`

  const dados = await fetch(url)
  const endereco = await dados.json()
  console.log(endereco)

  document.querySelector('section').innerHTML = `
  
  <div class="container-cep">

  <h1>CEP ${endereco.cep}</h1>
  <h1>CEP ${endereco.cep} - ${endereco.address}</h1>
  
  <p><b>Endereço:</b> <span>${endereco.address}</span></p>
  <p><b>Bairro:</b> <span>${endereco.district}</span></p>
  <p><b>Cidade:</b> <span>${endereco.city}</span></p>
  <p><b>Estado:</b> <span>${endereco.state}</span></p>
  <p><b>Endereço Completo:</b><br> <span>${endereco.address}, ${endereco.district}, ${endereco.city}, ${endereco.state}- CEP ${endereco.cep}</span></p>
  <p><b>Longitude</b>: ${endereco.lng}</p>
  <p><b>latitude</b>: ${endereco.lat}</p>


  </div>`


}

document.getElementById('cep')
.addEventListener('focusout', pesquisarCep)






