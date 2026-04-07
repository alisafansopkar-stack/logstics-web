const Stats = () => {
  const stats = [
    { value: '50K', label: 'Delivered Packages' },
    { value: '266', label: 'Countries Covered' },
    { value: '25+', label: 'Years Experience' },
    { value: '125', label: 'Team Members' },
  ]

  return (
    <section className="bg-[#6f8a28]">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/10 border border-white/15 px-5 py-6 text-center text-white shadow-sm"
            >
              <p className="text-2xl sm:text-3xl font-bold leading-none">
                {s.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-white/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

