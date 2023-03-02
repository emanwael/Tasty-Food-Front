import React, { useEffect, useState } from "react";
import "../Adminmenu/AdminMenu.css";
import { Category } from "../../Components/catergories/Category";

import Filter from "../../Components/catergories/filter";
import { useDispatch, useSelector } from "react-redux";
import { getAllMeals, deletMeal } from "../../store/slices/mealSlice";
import { useNavigate, useParams } from "react-router-dom";
import Sidbar from "../../Dashboard/Sidebar/sidbar";

export default function AdminMenu() {
  const { id } = useParams();

  const { myMenu, isLoading } = useSelector((store) => store.mealSlice);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [fgroup, setFgroup] = useState("");
  const [filtered, setFiltered] = useState([]);

  /////
  useEffect(() => {
    dispatch(getAllMeals(id));
  }, []);

  useEffect(() => {
    setFiltered(myMenu);
  }, [myMenu]);
  /////////////////
  const navigate = useNavigate();
  const gotoAdd = () => {
    navigate(`/add/${id}`);
  };
  const gotoEdite = (mealId) => {
    navigate(`/edit/${mealId}`);
  };
  ////
  const menu =
    myMenu.length == 0 ? (
      <div
        className="alert text-center"
        style={{
          fontSize: 24,
          textTransform: "capitalize",
          backgroundColor: "#f4b985",
        }}
      >
        <p className="text-center">no meals to show</p>
      </div>
    ) : (
      filtered
        .filter((x) => {
          return search === "" ? x : x.meal_name.toLowerCase().includes(search);
        })
        .map((e, i) => {
          return (
            <Category
              meal={e}
              search={search}
              key={e._id}
              dispatch={dispatch}
              deletMeal={deletMeal}
              edit={() => {
                gotoEdite(e._id);
              }}
            />
          );
        })
    );

  // console.log(filtered);
  /////////////////

  return (
    <>
      <div className="menue">
        <div className="col-sm-6 col-md-2">
          <Sidbar />
        </div>
        <div className="col-sm-6 col-md-9">
          <div className="container mb-5">
            <div className="d-flex justify-content-start align-items-center mt-5">
              <p className="pt-3">
                <i className="fa-solid fa-magnifying-glass"></i> search
              </p>

              <input
                type="text"
                className="  input_form col-8 mx-2 rounded"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <Filter
                setFiltered={setFiltered}
                active={fgroup}
                setActive={setFgroup}
              />
            </div>
            <div className="page">
              <div className="d-flex justify-content-end">
                <button
                  className="btn"
                  onClick={gotoAdd}
                  style={{
                    backgroundColor: "#da6e10",
                    width: "180px",
                    marginTop: "50px",
                    right: 0,
                  }}
                >
                  Add <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <div className="container">
                {!isLoading && <div className="row g-3">{menu}</div>}
              </div>

              {isLoading && (
                <div>
                  {" "}
                  <p className="alert alert-dark">loading.....</p>{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
