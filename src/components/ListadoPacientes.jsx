/* eslint-disable react/prop-types */
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-blue-600 font-bold ">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-white text-3xl text-center md:text-black">No hay pacientes</h2>
          <p className="text-xl text-white mt-5 mb-10 text-center md:text-black">
            Agrega tus {""}
            <span className="text-blue-600 font-bold ">
            Pacientes 
            </span>{' '}para verlos aquí
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
