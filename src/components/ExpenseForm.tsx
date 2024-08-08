import { categories } from "../data/categories";

export default function ExpenseForm() {
  return (
    <form className="space-y-5">
      <legend className="uppercase text-center text-2xl font-black border-b-4 py2 border-blue-500">
        Nuevo Gasto
      </legend>
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Nombre Gasto:{" "}
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Nombre del gasto"
          className="bg-slate-100 p-2"
          name="expenseName"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Cantidad:{" "}
        </label>
        <input
          type="number"
          id="amounth "
          placeholder="Cantidad del gasto: ej. 300"
          className="bg-slate-100 p-2"
          name="amount"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Categoria:{" "}
        </label>
        <select id="category " className="bg-slate-100 p-2" name="amount">
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={"Registrar Gasto"}
      />
    </form>
  );
}
