var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]

const td = document.querySelector('td');
const input = document.querySelector('input')
const selectorId=document.getElementById('cuerpo-tabla')
const tr = document.querySelector('tr');

function mostrarform() {
    const formulario = document.getElementById('formulario');
    if (formulario.style.display === 'none' || formulario.style.display === '') {
        formulario.style.display = 'block';
    } else {
        formulario.style.display = 'none';
    }
}

function agregartarea() {
    const text = input.value;
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = text;

    tr.appendChild(td);
    tr.appendChild(finalizarBtn())
    selectorId.appendChild(tr)
    input.value="";
    document.getElementById('formulario').style.display="none";
}

function finalizarBtn(){
    
        const finalizarBtn = document.createElement("button");
        finalizarBtn.type="button"
        finalizarBtn.className="btn btn-danger";
        finalizarBtn.textContent="Finalizar";
        
    
        finalizarBtn.addEventListener('click', (e) =>{
            const item = e.target.parentElement;
            selectorId.removeChild(item);
    
        });
        return finalizarBtn;
    }

    // Limpiar el campo de entrada después de agregar la tarea
    document.getElementById('nuevaTarea').value = '';
