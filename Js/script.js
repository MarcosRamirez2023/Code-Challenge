function enviarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  
    const data = {
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento
    };
  
    // Realizar la solicitud HTTP POST usando fetch
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
      alert('Registro exitoso. Verifica la consola para ver la respuesta del servidor.');
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
      alert('Error en la solicitud. Verifica la consola para más detalles.');
    });
  }
  