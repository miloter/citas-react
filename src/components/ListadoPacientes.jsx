import Paciente from "./Paciente.jsx";

export default function ListadoPacientes({ pacientes, setPaciente,
    eliminarPaciente }) {        
    return (
        <div className="overflow-y-auto" style={{ height: '73vh' }}>
            {pacientes.length ?
                <>
                    <h2 className="text-center">Listado Pacientes</h2>
                    <p className="fs-5 text-center">
                        Administra tus {' '}
                        <span className="text-primary fw-bold">
                            Pacientes y Citas
                        </span>
                    </p>
                    {pacientes.map(p => <Paciente
                        key={p.id}
                        paciente={p}                        
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente} />)}
                </>
                :
                <>
                    <h2 className="text-center">No Hay Pacientes</h2>
                    <p className="fs-5 text-center">
                        Agrega Pacientes {' '}
                        <span className="text-primary fw-bold">
                            aquí
                        </span>
                    </p>
                </>
            }
        </div>
    );
}