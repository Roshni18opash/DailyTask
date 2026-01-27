const Home = () => {
  return (
    <>
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Users</h3>
          <p>1,250</p>
        </div>
        <div className="card">
          <h3>Projects</h3>
          <p>75</p>
        </div>
        <div className="card">
          <h3>Revenue</h3>
          <p>$18,400</p>
        </div>
        <div className="card">
          <h3>Tasks</h3>
          <p>42</p>
        </div>
      </div>
    </>
  );
};

export default Home;
