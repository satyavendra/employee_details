import React from 'react'

function Login() {
  return (
    <div>
      <section className='login-sec'>
        <div className='container'>
                <div className='login-card-center'>
                 <div className='login-card'>
                 <div className='page-ttl'>
                  <h2>Employee Mangement System</h2>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="878980"
                  />
                  <label htmlFor="floatingInput">Emp ID</label>
                </div>
                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div class="d-grid">
                     <button class="btn btn-primary" type="button">Submit</button>
                  </div>
                  </div>
                 </div>
              </div>
      </section>
    </div>
  )
}

export default Login;