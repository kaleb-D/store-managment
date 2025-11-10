import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  EyeIcon,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  StoreIcon,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-1 mt-5">
      {/*leftSide*/}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-5">
          {/*LOGO*/}

          <div className="text-center mb-6">
            <div className="flex flex-col items-center gap-2 group">
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center  pointer-events-none">
                  <User className="size-5 text-base-content/40 z-10" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered  w-full  pl-10 focus:outline-0`}
                  placeholder="Abebe Kebede"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40 z-10" />
                </div>
                <input
                  type="email"
                  className="input input-border w-full pl-10 focus:outline-0"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative flex">
                <div className="absolute inset-y-0 left-0  pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40 z-10" />
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  className=" input input-bordered w-full pl-10 focus:outline-0"
                  placeholder="*********"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute pr-3 right-0 inset-y-0   items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <EyeIcon className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-dash w-full "
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading....
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
