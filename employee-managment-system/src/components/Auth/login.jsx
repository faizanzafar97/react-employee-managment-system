import React from 'react'

const Login = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

  const submithandler = (e) => {
    e.preventDefault()

    // Handle login logic here
    console.log("Form submitted")

    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen w-full bg-slate-950 px-4 py-8 sm:px-6 flex items-center justify-center">

      {/* Login Card */}
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">

        {/* Header */}
        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
            <span className="text-xl font-bold text-white">
              L
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Login to your account to continue
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={submithandler}
          className="space-y-5"
        >

          {/* Email */}
          <div>

            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-200"
            >
              Email Address
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3.5 text-sm text-white shadow-sm outline-none transition-all duration-200 placeholder:text-slate-500 hover:border-slate-600 focus:border-blue-500 focus:bg-slate-800 focus:ring-4 focus:ring-blue-500/10"
            />

          </div>

          {/* Password */}
          <div>

            <div className="mb-2 flex items-center justify-between gap-4">

              <label
                htmlFor="password"
                className="text-sm font-semibold text-slate-200"
              >
                Password
              </label>

              <a
                href="#"
                className="rounded-md text-sm font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Forgot password?
              </a>

            </div>

            <input

              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3.5 text-sm text-white shadow-sm outline-none transition-all duration-200 placeholder:text-slate-500 hover:border-slate-600 focus:border-blue-500 focus:bg-slate-800 focus:ring-4 focus:ring-blue-500/10"
            />

          </div>

          {/* Remember Me */}
          <div className="flex items-center">

            <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-400">

              <input
                type="checkbox"
                className="h-4 w-4 cursor-pointer rounded border-slate-600 bg-slate-800 text-blue-600 accent-blue-600 focus:ring-2 focus:ring-blue-500/40"
              />

              <span>
                Remember me
              </span>

            </label>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/20 active:translate-y-0 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-500/30"
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="my-7 flex items-center gap-4">

          <div className="h-px flex-1 bg-slate-800"></div>

          <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Or
          </span>

          <div className="h-px flex-1 bg-slate-800"></div>

        </div>

        {/* Register */}
        <p className="text-center text-sm text-slate-400">

          Don't have an account?{' '}

          <a
            href="#"
            className="rounded-md font-semibold text-blue-400 transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Create account
          </a>

        </p>

      </div>
    </div>
  )
}

export default Login