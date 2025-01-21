import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const register = useRegister();
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});

    try {
      await register.mutateAsync(formData);
    } catch (error: any) {
      // Handle validation errors from API
      if (error.response?.data?.errors) {
        setValidationErrors(error.response.data.errors);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-900">
            Create Account
          </h1>
          <p className="mt-2 text-center text-gray-600">
            Start managing your finances
          </p>
        </div>

        {register.error && !Object.keys(validationErrors).length && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
            {register.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${
                    validationErrors.firstName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {validationErrors.firstName && (
                  <p className="mt-1 text-sm text-red-500">
                    {validationErrors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${
                    validationErrors.lastName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {validationErrors.lastName && (
                  <p className="mt-1 text-sm text-red-500">
                    {validationErrors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${
                  validationErrors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {validationErrors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {validationErrors.email}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${
                  validationErrors.password
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {validationErrors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {validationErrors.password}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={register.isPending}
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {register.isPending ? "Creating account..." : "Create Account"}
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
