export default function Home() {
  return (
      <div style={{ fontFamily: 'sans-serif' }}>

        <header style={{ padding: '20px', background: '#333', color: 'white' }}>
          <h1>Next.js Project</h1>
        </header>

        <main style={{ padding: '40px' }}>
          <section>
            <h2>Welcome</h2>
            <p>This is a simple landing page built with Next.js.</p>
          </section>

          <section style={{ marginTop: '20px' }}>
            <h2>User Profiles</h2>
            <p>Click below to fetch dynamic data:</p>
            <a href="/profile/1" style={{ color: 'blue' }}>View User 1</a>
          </section>
        </main>

        <footer style={{ padding: '20px', borderTop: '1px solid #ddd' }}>
          <p>This is a footer</p>
        </footer>

      </div>
  );
}