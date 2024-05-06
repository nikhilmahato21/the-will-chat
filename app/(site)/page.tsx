import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mx-auto w-auto text-4xl font-semibold text-slate-700 text-center font-concert  ">
          the will.
        </h2>
      </div>
      {/* AuthForm */}
      <AuthForm />
    </div>
  );
}
