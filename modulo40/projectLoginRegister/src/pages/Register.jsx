import { InputField } from "../components/InputField";
import { Link } from "react-router";

export const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form action="" className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <InputField
          label="Nome"
          id="name"
          type="text"
          name="name"
          autoComplete="username"
          placeholder="Digite seu nome"
          register={() => {}}
        />

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
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="Digite sua senha"
          register={() => {}}
        />

        <InputField
          label="Confirmar Senha"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          placeholder="Digite sua senha"
          register={() => {}}
        />

        <button
          type="submit"
          className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
        >
          Criar conta
        </button>

        <p className="mt-4 text-center text-sm">
          Já tem conta?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Faça login
          </Link>
        </p>
      </form>
    </div>
  );
}
