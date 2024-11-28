import React from "react";
import { Link } from "react-router-dom"; // Link komponentini import qilish
import"./home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="logo">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="letter">N</div>
        </div>
      </div>
      <h1>Jadidchilar</h1>
      <div className="jadidchi-list">
        <div className="jadidchi-item">
          <Link to="/jadidchi/1" className="jadidchi-link">
            Abdulla Avloniy
          </Link>
        </div>
        <div className="jadidchi-item">
          <Link to="/jadidchi/2" className="jadidchi-link">
            Fitrat
          </Link>
        </div>
        <div className="jadidchi-item">
          <Link to="/jadidchi/3" className="jadidchi-link">
            Munavvar Qori
          </Link>
        </div>
        <div className="jadidchi-item">
          <Link to="/jadidchi/4" className="jadidchi-link">
            Cholpon
          </Link>
        </div>
        <div className="jadidchi-item">
          <Link to="/jadidchi/5" className="jadidchi-link">
            Mahmudxoja Behbudiy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
