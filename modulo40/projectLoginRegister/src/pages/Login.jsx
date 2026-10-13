import { useEffect, useState } from "react";
import { InputField } from "../components/InputField";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export const Login = () => {
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
    }
  }, [location]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValuess: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (user) {
      setMessage("");
      alert("Login realizado com sucesso!");
      navigate("/");
      return;
    }

    navigate("/register", {
      state: { message: "Crie uma conta para continuar" },
    });

    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        action=""
        className="bg-white p-8 rounded-2xl shadow-md w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {message && <p className="text-red-500">{message}</p>}

        <InputField
          label="E-mail"
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Digite seu e-mail"
          register={register}
          error={errors.email}
        />

        <InputField
          label="Senha"
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Digite sua senha"
          register={register}
          error={errors.password}
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
