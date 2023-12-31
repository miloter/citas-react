import { useState, useEffect } from 'react'
import FormApp from "./components/FormApp.jsx";
import HeaderApp from "./components/HeaderApp.jsx";
import ListadoPacientes from "./components/ListadoPacientes.jsx";
import { lsKeyPacientes } from './helpers/UtilsApp.js';

// Para comprobar que solo se cargan una vez los pacientes, desde Local Storage
let lsPacientesLoaded = false;

export default function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // Carga desde el Local Storage la primera vez que se crea el componente
  useEffect(() => {
    if (lsPacientesLoaded) return;
    setPacientes(JSON.parse(localStorage.getItem(lsKeyPacientes)
      || '[]')
    );
    lsPacientesLoaded = true;
  }, []);

  // Actualiza Local Storage cada vez que cambia la lista de pacientes
  useEffect(() => localStorage.setItem(lsKeyPacientes,
    JSON.stringify(pacientes)), [pacientes]
  );

  function eliminarPaciente(id) {
    if (!confirm(`¿Eliminar Paciente con el ID ${id}?`)) return;
    const newPacientes = pacientes.filter(p => p.id !== id);
    setPacientes(newPacientes);
  }

  return (
    <div>
      <HeaderApp />
      <div className="row">
        <div className="col-12 col-md-6">
          <FormApp pacientes={pacientes} setPacientes={setPacientes}
            paciente={paciente} setPaciente={setPaciente} />
        </div>
        <div className="col-12 col-md-6">
          <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente} />
        </div>
      </div>
    </div>
  );
}
