import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Puppy from './Puppy'
import styles from "../styles/navbar.module.css";
// import { AppContext } from './Context'
const Home = () => {
  const navigate = useNavigate();

  // const { setNewdata ,newdata } = useContext(AppContext);

  const [data, setData] = useState([]);
  const getdata = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((res) => {
        setData(Object.keys(res.message));
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  //   let arr=Object.keys(res.message)

  // style={{cursor:"pointer"}}
  return (
    <div style={{ marginTop: "150px" }}>
      <div className={styles.name}>
        {data.map((el, i) => {
          return (
            <div key={i}>
              <h3
                className="p"
                onClick={() => {
                  localStorage.setItem("xyz", el);
                  navigate("/puppy");
                  // console.log(el);
                }}
              >
                {" "}
                {el}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
