export default function Paciente({ paciente,
    setPaciente, eliminarPaciente }) {    
    const { nombre, propietario, email, fecha, sintomas } = paciente;

    return (
        <div className="mt-3 bg-white shadow p-3 rounded">
            <p className="fw-bold">Nombre:{' '}
                <span className="fw-normal">{nombre}</span>
            </p>
            <p className="fw-bold">Propietario:{' '}
                <span className="fw-normal">{propietario}</span>
            </p>
            <p className="fw-bold">Email:{' '}
                <span className="fw-normal">{email}</span>
            </p>
            <p className="fw-bold">Fecha Alta:{' '}
                <span className="fw-normal">
                    {fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3/$2/$1')}
                </span>
            </p>
            <p className="fw-bold">Síntomas:{' '}
                <span className="fw-normal">{sintomas}</span>
            </p>
            <div className="d-flex justify-content-center gap-3">
                <button type="button" className="btn btn-warning"
                    onClick={() => setPaciente(paciente)}>
                    Editar
                </button>
                <button type="button" className="btn btn-danger"
                    onClick={() => eliminarPaciente(paciente.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
}