// Header.jsx

import React from 'react'

const Header = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/95 shadow-lg backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo / Welcome */}
        <div>
          <p className="text-sm font-medium text-slate-400">
            Welcome back
          </p>

          <h1 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
            Hello,{' '}
            <span className="text-blue-400">
              Faizan
            </span>
          </h1>
        </div>

        {/* Logout Button */}
        <button
          type="button"
          className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-200 shadow-sm transition-all duration-200 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/40"
        >
          Logout
        </button>

      </div>
    </header>
  )
}

export default Header