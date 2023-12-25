import { useState, useEffect } from 'react';
import ErrorApp from './ErrorApp.jsx';
import { getId } from '../helpers/UtilsApp.js';

export default function FormApp({ pacientes, setPacientes, paciente, setPaciente }) {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);
    
    useEffect(() => {
        if (!paciente.id) return;
        // Agregar los campos en modo edición
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setEmail(paciente.email);
        setFecha(paciente.fecha);
        setSintomas(paciente.sintomas);        
    }, [paciente]);    
    
    function handleSubmit(e) {
        e.preventDefault();

        // Validamos el formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
        } else {
            setError(false);
            const newPaciente = {
                nombre, propietario,
                    email, fecha, sintomas
            };
            let newPacientes;
            if (paciente.id) {
                newPaciente.id = paciente.id;                
                newPacientes = pacientes.map(
                    p => p.id !== paciente.id ? p : newPaciente);
                setPacientes(newPacientes);
                setPaciente({});
            } else {
                newPaciente.id = getId();
                newPacientes = [...pacientes, newPaciente];
                setPacientes(newPacientes);
            }
            // Reiniciar el formulario
            setNombre('');
            setPropietario('');
            setEmail('');
            setFecha('');
            setSintomas('');            
        }
    }

    return (
        <div>
            <h2 className="text-center">Seguimiento Pacientes</h2>
            <p className="fs-5 text-center">
                Añade Pacientes y {' '}
                <span className="text-primary fw-bold">Adminístralos</span>
            </p>
            <form className="p-3 bg-white shadow rounded"
                onSubmit={handleSubmit}>
                {error &&
                    <ErrorApp>                        
                        Todos los campos son requeridos
                    </ErrorApp>
                }
                <div className="mb-3">
                    <label htmlFor="mascota" className="form-label">Nombre Mascota</label>
                    <input type="text" id="mascota" className="form-control"
                        placeholder="Nombre de la mascota"
                        value={nombre} onChange={e => setNombre(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="propietario" className="form-label">Nombre Propietario</label>
                    <input type="text" id="propietario" className="form-control"
                        placeholder="Nombre del propietario"
                        value={propietario} onChange={e => setPropietario(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control"
                        placeholder="Email Contacto Propietario"
                        value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha" className="form-label">Alta</label>
                    <input type="date" id="fecha" className="form-control"
                        value={fecha} onChange={e => setFecha(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="sintomas" className="form-label">Síntomas</label>
                    <textarea id="sintomas" rows="3" className="form-control"
                        placeholder="Describe los síntomas"
                        value={sintomas} onChange={e => setSintomas(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary w-100 text-uppercase">
                    {paciente.id ? 'Modificar' : 'Agregar Paciente'}
                </button>
            </form>
        </div>
    );
}
