import React, { useState } from 'react';

export default function AuthCard() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert(`Logging in with: ${formData.email}`);
    } else {
      alert(`Account created for: ${formData.name} (${formData.email})`);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        {/* Navy Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>RV UNIVERSITY</h2>
          <p style={styles.subtitle}>Excellence in Education</p>
        </div>

        {/* Title */}
        <h3 style={styles.formTitle}>
          {isLogin ? 'Student Login' : 'Student Registration'}
        </h3>

        {/* Login / Register Tabs */}
        <div style={styles.tabContainer}>
          <button
            type="button"
            style={isLogin ? styles.activeTab : styles.inactiveTab}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            type="button"
            style={!isLogin ? styles.activeTab : styles.inactiveTab}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="RVU Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.submitBtn}>
            {isLogin ? 'Sign In to Portal' : 'Create Student Account'}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    width: '100%',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eef3f7',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  card: {
    width: '380px',
    maxWidth: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
    padding: '24px 20px',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  header: {
    backgroundColor: '#07182f',
    color: '#ffffff',
    padding: '20px 15px',
    borderRadius: '8px',
    marginBottom: '18px'
  },
  title: {
    color: '#d6b15a',
    margin: 0,
    fontSize: '1.25rem',
    fontWeight: '700',
    letterSpacing: '0.5px'
  },
  subtitle: {
    color: '#ffffff',
    margin: '4px 0 0 0',
    fontSize: '0.75rem',
    fontStyle: 'italic'
  },
  formTitle: {
    color: '#334155',
    fontSize: '1.05rem',
    fontWeight: '600',
    marginBottom: '14px'
  },
  tabContainer: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px'
  },
  activeTab: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#07182f',
    color: '#d6b15a',
    border: 'none',
    fontWeight: 'bold',
    borderRadius: '4px',
    fontSize: '0.9rem',
    cursor: 'pointer'
  },
  inactiveTab: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#d9e1e7',
    color: '#64748b',
    border: 'none',
    borderRadius: '4px',
    fontSize: '0.9rem',
    cursor: 'pointer'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #b8c2cc',
    borderRadius: '4px',
    fontSize: '0.85rem',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#ffffff'
  },
  submitBtn: {
    width: '100%',
    padding: '13px',
    backgroundColor: '#d6a11e',
    color: '#1f2937',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    cursor: 'pointer',
    marginTop: '4px',
    transition: 'background-color 0.2s ease'
  }
};