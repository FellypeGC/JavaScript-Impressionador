import { InputField } from "../components/InputField";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const registerSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
    .required("Confirmação de senha é obrigatória"),
});

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);

    alert("Conta criada com sucesso!");

    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        action=""
        className="bg-white p-8 rounded-2xl shadow-md w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <InputField
          label="Nome"
          id="name"
          type="text"
          name="name"
          autoComplete="username"
          placeholder="Digite seu nome"
          register={register}
          error={errors.name}
        />

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
          autoComplete="new-password"
          placeholder="Digite sua senha"
          register={register}
          error={errors.password}
        />

        <InputField
          label="Confirmar Senha"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          placeholder="Digite sua senha"
          register={register}
          error={errors.confirmPassword}
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
};
