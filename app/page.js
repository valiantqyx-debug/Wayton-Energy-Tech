export default function Home() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', color: '#1e3a8a' }}>Wayton Energy Tech Co.,Ltd</h1>
        <p style={{ fontSize: '18px', color: '#555', marginTop: '10px' }}>Innovative Energy Solutions for a Sustainable Future</p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>About Us</h2>
        <p style={{ color: '#333', lineHeight: '1.6' }}>
          Wayton Energy Tech Co.,Ltd is a professional provider of renewable energy solutions, energy-saving technologies, and smart energy systems worldwide.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Our Services</h2>
        <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.6' }}>
          <li>Renewable Energy System Design & Installation</li>
          <li>Energy Efficiency Consulting</li>
          <li>Smart Grid Solutions</li>
          <li>Customized Energy Management Systems</li>
        </ul>
      </section>

      <section style={{ background: '#f1f5f9', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#1e3a8a', marginBottom: '15px' }}>Contact Us</h2>
        <p style={{ color: '#333' }}><strong>Email:</strong> <a href="mailto:info@waytonenergy.com" style={{ color: '#3498db' }}>info@waytonenergy.com</a></p>
        <p style={{ color: '#333' }}><strong>Website:</strong> <a href="https://waytonenergy.com" style={{ color: '#3498db' }}>https://waytonenergy.com</a></p>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee', color: '#95a5a6', fontSize: '0.9em' }}>
        <p>&copy; 2025 Wayton Energy Tech Co.,Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
