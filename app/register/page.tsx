"use client";
import { useState, useActionState } from "react";
import Link from "next/link";
import { signup } from "@/app/actions/auth";

export default function RegisterPage() {
  const [verified, setVerified] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, action, pending] = useActionState(signup, undefined);

  const canSubmit =
    name.trim() !== "" &&
    email.trim() !== "" &&
    password !== "" &&
    confirmPassword !== "" &&
    verified;

  return (
    <div
      className="min-h-screen flex items-start justify-center bg-[#f0f0f0]"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <div className="w-90% flex justify-center mt-17.5 px-4">
        <div
          className="bg-white w-full mb-10"
          style={{
            maxWidth: "31.625rem",
            borderRadius: "10px",
            boxShadow: "0px 0px 17.55px 9.45px rgba(0,0,0,0.05)",
            border: 0,
            paddingTop: "40px",
          }}
        >
          {/* Card heading */}
          <div className="text-center pb-4">
            <h4
              className="text-[#151515] font-bold"
              style={{ fontSize: "1.25rem" }}
            >
              Create An Account
            </h4>
          </div>

          {/* Card body */}
          <div className="pb-6">
            <form
              action={action}
              className="mx-auto"
              style={{ width: "85%" }}
            >
              {/* General error */}
              {state?.message && (
                <div className="mb-4 rounded px-3 py-2 bg-red-50 border border-red-200">
                  <p className="text-sm text-red-600">{state.message}</p>
                </div>
              )}

              {/* Name */}
              <div className="mb-4">
                <div
                  className={`flex border rounded ${
                    state?.errors?.name ? "border-red-400" : "border-gray-300"
                  }`}
                >
                  <div
                    className="flex items-center px-3 bg-white border-r border-gray-300"
                    style={{ minWidth: "46px", justifyContent: "center" }}
                  >
                    <i className="fas fa-user-tie text-gray-600 text-sm" />
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 px-3 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
                    style={{ height: "50px" }}
                    autoComplete="off"
                  />
                </div>
                {state?.errors?.name && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.name[0]}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <div
                  className={`flex border rounded ${
                    state?.errors?.email ? "border-red-400" : "border-gray-300"
                  }`}
                >
                  <div
                    className="flex items-center px-3 bg-white border-r border-gray-300"
                    style={{ minWidth: "46px", justifyContent: "center" }}
                  >
                    <i className="fas fa-user-tie text-gray-600 text-sm" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email@domain.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
                    style={{ height: "50px" }}
                    autoComplete="off"
                  />
                </div>
                {state?.errors?.email && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.email[0]}</p>
                )}
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  className="block text-sm mb-1"
                  style={{ color: "#3d3d3d" }}
                >
                  Password
                </label>
                <div
                  className={`flex border rounded ${
                    state?.errors?.password ? "border-red-400" : "border-gray-300"
                  }`}
                >
                  <div
                    className="flex items-center px-3 bg-white border-r border-gray-300"
                    style={{ minWidth: "46px", justifyContent: "center" }}
                  >
                    <i className="fas fa-unlock-alt text-gray-600 text-sm" />
                  </div>
                  <input
                    type="password"
                    placeholder="***************"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 px-3 text-sm outline-none bg-transparent text-gray-700"
                    style={{ height: "50px" }}
                  />
                </div>
                {state?.errors?.password && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.password[0]}</p>
                )}
              </div>

              {/* Repeat Password */}
              <div className="mb-4">
                <label
                  className="block text-sm mb-1"
                  style={{ color: "#3d3d3d" }}
                >
                  Repeat Password
                </label>
                <div
                  className={`flex border rounded ${
                    state?.errors?.confirm_password ? "border-red-400" : "border-gray-300"
                  }`}
                >
                  <div
                    className="flex items-center px-3 bg-white border-r border-gray-300"
                    style={{ minWidth: "46px", justifyContent: "center" }}
                  >
                    <i className="fas fa-unlock-alt text-gray-600 text-sm" />
                  </div>
                  <input
                    type="password"
                    placeholder="***************"
                    name="confirm_password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="flex-1 px-3 text-sm outline-none bg-transparent text-gray-700"
                    style={{ height: "50px" }}
                  />
                </div>
                {state?.errors?.confirm_password && (
                  <p className="mt-1 text-xs text-red-500">
                    {state.errors.confirm_password[0]}
                  </p>
                )}
              </div>

              {/* Cloudflare Turnstile (visual placeholder) */}
              <div className="mb-4">
                <div className="flex items-center justify-between border border-gray-300 rounded px-3 py-2 bg-white">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setVerified((v) => !v)}
                      className="w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center bg-white shrink-0 hover:border-blue-400 transition-colors"
                      style={
                        verified
                          ? {
                              borderColor: "#0081ff",
                              backgroundColor: "#0081ff",
                            }
                          : {}
                      }
                    >
                      {verified && (
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                    <span className="text-sm text-gray-700">
                      Verify you are human
                    </span>
                  </div>

                  {/* Cloudflare badge */}
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="flex items-center gap-1">
                      <svg
                        height="20"
                        viewBox="0 0 109 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M73.3 24.4l-34 .1c-.4 0-.6-.3-.5-.7l1.8-6.2c.1-.3.4-.6.8-.6l35.6-.1c.4 0 .6.3.5.7l-1.8 6.1c-.1.4-.4.7-.8.7l-.6.7z"
                          fill="#F6821F"
                        />
                        <path
                          d="M76.7 12.5c-.7-2.5-2.9-4.3-5.5-4.3-1 0-2 .3-2.8.8-.9-3.5-4.1-6-7.9-6-3.3 0-6.2 1.9-7.6 4.7-.5-.2-1.1-.3-1.7-.3-2.8 0-5 2.2-5 5 0 .4.1.8.2 1.2-2.3.5-4 2.6-4 5 0 2.9 2.3 5.2 5.2 5.2h27.5c2.6 0 4.7-2.1 4.7-4.7 0-2.3-1.6-4.2-3.8-4.6h-.3z"
                          fill="#F6821F"
                        />
                      </svg>
                      <span
                        className="text-[10px] font-bold tracking-widest"
                        style={{
                          color: "#404040",
                          letterSpacing: "0.1em",
                          fontSize: "9px",
                        }}
                      >
                        CLOUDFLARE
                      </span>
                    </div>
                    <div
                      className="flex gap-1 text-[9px]"
                      style={{ color: "#0081ff" }}
                    >
                      <a href="#" className="hover:underline">
                        Privacy
                      </a>
                      <span className="text-gray-400">·</span>
                      <a href="#" className="hover:underline">
                        Help
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Register button */}
              <div className="mb-4">
                <button
                  type="submit"
                  disabled={pending || !canSubmit}
                  className="w-full font-bold text-white rounded transition-colors hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "#0081ff",
                    height: "50px",
                  }}
                >
                  {pending ? "Registering…" : "Register"}
                </button>

                <p className="mt-4 text-sm" style={{ color: "#555555" }}>
                  Already have an account?{" "}
                  <Link href="/log-in" style={{ color: "#0081ff" }}>
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
