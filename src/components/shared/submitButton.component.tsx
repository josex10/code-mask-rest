import { useFormStatus } from "react-dom";

export default function ButtonSubmitComponent() {
    const status = useFormStatus();
    return (
      <section className="flex flex-col w-full items-center">
        <button
          disabled={status.pending}
          className={`
              bg-black py-[15px] rounded-2xl w-1/3  text-white hover:font-bold shadow-lg 
              disabled:opacity-50 ${status.pending && 'hidden'}
            `}
        >
          Registrarse
        </button>
        <div className="m-4">{status.pending && <span>Cargando...</span>}</div>
      </section>
    );
  }