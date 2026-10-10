import { InputField } from "../components/InputField";
import { Link } from "react-router";

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form action="" className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <InputField
          label="E-mail"
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Digite seu e-mail"
          register={() => {}}
        />

        <InputField
          label="Senha"
          id="password"
          name="password"
          autoComplete="password"
          placeholder="Digite sua senha"
          register={() => {}}
        />

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
        >
          Entrar
        </button>

        <p className="mt-4 text-center text-sm">
          Não tem conta?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Registre-se
          </Link>
        </p>
      </form>
    </div>
  );
};
