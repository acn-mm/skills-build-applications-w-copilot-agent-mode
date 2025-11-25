


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
const logo = '/octofitapp-small.png';

function App() {
  const chibiImg = '/chibi-fitness.png';
  return (
    <Router>
      <div className="container mt-4 position-relative" style={{ minHeight: '90vh' }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src={logo} alt="Octofit Logo" className="App-logo" />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </nav>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h1 className="card-title text-center mb-4">Octofit Tracker</h1>
            <Routes>
              <Route path="/activities" element={<Activities />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/users" element={<Users />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/" element={<div className="text-center"><h2>Welcome to Octofit Tracker!</h2><p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p></div>} />
            </Routes>
          </div>
        </div>
        <img src={chibiImg} alt="Chibi Fitness" style={{ position: 'fixed', left: 0, bottom: 0, width: '120px', zIndex: 1000 }} />
      </div>
    </Router>
  );
}

export default App;
