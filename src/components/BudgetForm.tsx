import { useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

const BudgetForm = () => {
  // Este componente es el formulario donde el usuario define su presupuesto
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Funcion para atrapar el valor del presupuesto
    setBudget(e.target.valueAsNumber);
  };

  const isValid = useMemo(() => {
    // Esta funcion valida que budget no sea Nan y que sea mayor que 0
    // usamos memo para un mejor rendimiento
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "add-Budget", payload: { budget } });
  };

  return (
    <form action="" className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-bold text-center"
        >
          Definir Presupuesto
        </label>
        <input
          type="number"
          className="w-full bg-white border border-gray-200 p-2 "
          placeholder="Define tu presupuesto"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        value={"Definir Presupuesto"}
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40" // Si el boton es disable se aplica un ioacity de 40
        disabled={isValid} // si es true se le aplica desable al boton
      />
    </form>
  );
};
export default BudgetForm;
