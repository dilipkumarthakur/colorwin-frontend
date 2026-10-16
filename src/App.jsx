
import { useState } from 'react'

const colors = [
  { name: 'RED', value: 'red', style: 'bg-red-600', number: '2X' },
  { name: 'GREEN', value: 'green', style: 'bg-emerald-500', number: '2X' },
  { name: 'VIOLET', value: 'violet', style: 'bg-purple-600', number: '4.5X' },
]

const amounts = [10, 50, 100, 500, 1000]

function App() {
  const [selectedColor, setSelectedColor] = useState('')
  const [amount, setAmount] = useState(50)
  const [page, setPage] = useState('Home')

  return (
    <div className="min-h-screen bg-[#03030c] text-white">
      <div className="mx-auto min-h-screen max-w-md border-x border-purple-950 pb-24">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-purple-900 bg-[#080817] px-4 py-3">
          <button aria-label="Menu" className="text-2xl">☰</button>
          <h1 className="text-xl font-black">
            👑 Color<span className="text-fuchsia-400">Win</span>
          </h1>
          <div className="rounded-full border border-yellow-500/50 bg-slate-900 px-3 py-2 text-sm text-yellow-300">
            🪙 1,000
          </div>
        </header>

        <main className="space-y-4 p-3">
          <section className="overflow-hidden rounded-2xl border border-purple-700 bg-gradient-to-r from-purple-950 via-fuchsia-950 to-[#080817] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-300">
              ColorWin presents
            </p>
            <h2 className="mt-2 text-2xl font-black">
              PREDICT COLORS
            </h2>
            <p className="font-bold text-fuchsia-300">WIN BIG REWARDS</p>
            <p className="mt-2 text-xs text-slate-300">
              Free-to-play · Virtual points only
            </p>
          </section>

          <section className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl border border-purple-900 bg-[#101020] p-2">
              <p className="text-xs text-slate-400">Period Number</p>
              <p className="mt-2 break-all text-xs font-bold">CW-000001</p>
            </div>
            <div className="rounded-xl border border-fuchsia-700 bg-[#151027] p-2">
              <p className="text-xs text-slate-400">Time Left</p>
              <p className="mt-2 text-2xl font-black text-fuchsia-300">00:24</p>
            </div>
            <div className="rounded-xl border border-purple-900 bg-[#101020] p-2">
              <p className="text-xs text-slate-400">Next Period</p>
              <p className="mt-2 text-xs font-bold">Coming soon</p>
            </div>
          </section>

          <section>
            <h3 className="mb-3 font-bold">Select Your Color</h3>
            <div className="grid grid-cols-3 gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`${color.style} rounded-xl p-3 text-center font-black shadow-lg transition ${
                    selectedColor === color.value
                      ? 'ring-2 ring-white ring-offset-2 ring-offset-[#03030c]'
                      : 'opacity-90'
                  }`}
                >
                  <span className="block text-2xl">
                    {color.value === 'red' ? '🔴' : color.value === 'green' ? '🟢' : '🟣'}
                  </span>
                  <span className="mt-1 block">{color.name}</span>
                  <span className="text-xs">Virtual play</span>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-purple-900 bg-[#0d0d1c] p-3">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-bold">Bet Amount</h3>
              <span className="text-sm text-yellow-300">{amount} points</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {amounts.map((value) => (
                <button
                  key={value}
                  onClick={() => setAmount(value)}
                  className={`rounded-lg border px-2 py-3 font-bold ${
                    amount === value
                      ? 'border-fuchsia-400 bg-fuchsia-600'
                      : 'border-slate-700 bg-slate-900'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
            <label className="mt-3 block text-sm text-slate-300">
              Custom amount
              <input
                type="number"
                min="1"
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
                className="mt-2 w-full rounded-lg border border-purple-900 bg-[#050510] p-3 text-white outline-none focus:border-fuchsia-500"
              />
            </label>
          </section>

          <button
            onClick={() => alert('Demo UI only. Backend betting is not connected yet.')}
            className="w-full rounded-xl bg-gradient-to-r from-yellow-500 to-amber-300 py-4 font-black text-black shadow-lg shadow-yellow-900/20"
          >
            PLACE BET
          </button>

          <section className="rounded-xl border border-purple-900 bg-[#0d0d1c] p-4">
            <h3 className="font-bold">Recent Results</h3>
            <p className="mt-2 text-sm text-slate-400">
              No completed rounds available yet.
            </p>
          </section>
        </main>

        <nav className="fixed bottom-0 left-1/2 z-20 grid w-full max-w-md -translate-x-1/2 grid-cols-4 border-t border-purple-900 bg-[#080817]">
          {[
            ['Home', '⌂'],
            ['Results', '▤'],
            ['Rewards', '♔'],
            ['Profile', '♙'],
          ].map(([name, icon]) => (
            <button
              key={name}
              onClick={() => setPage(name)}
              className={`flex flex-col items-center gap-1 py-3 text-xs ${
                page === name ? 'text-fuchsia-400' : 'text-slate-400'
              }`}
            >
              <span className="text-xl">{icon}</span>
              {name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default App
