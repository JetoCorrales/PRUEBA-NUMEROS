// Datos de registro
const registros = [];

// Cargar números en la cuadrícula
document.addEventListener('DOMContentLoaded', () => {
    const numberGrid = document.getElementById('numberGrid');
    
    for (let i = 0; i < 100; i++) {
        const numberCell = document.createElement('div');
        numberCell.className = 'number';
        numberCell.textContent = i.toString().padStart(2, '0');
        numberCell.addEventListener('click', () => handleNumberClick(i, numberCell));
        numberGrid.appendChild(numberCell);
    }
});

// Manejar clic en un número
function handleNumberClick(number, cell) {
    // Verificar si el número ya está registrado
    if (cell.classList.contains('blocked')) {
        alert('Este número ya está registrado.');
        return;
    }

    // Solicitar nombre y teléfono
    const nombre = prompt('Ingrese el nombre:');
    const telefono = prompt('Ingrese el teléfono:');

    if (nombre && telefono) {
        // Guardar registro
        registros.push({ numero: number, nombre, telefono });

        // Bloquear el número visualmente
        cell.classList.add('blocked');

        // Guardar datos en el almacenamiento local (opcional)
        localStorage.setItem('registros', JSON.stringify(registros));
    }
}
