import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";
import Navbar from "./Navbar";
const News = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(Spinner);
  // const [page, setPage] = useState(1);

  const darkMode = {
    width: "18rem",
    color: "white",
    backgroundColor: "#30303c",
  };
  const lightMode = {
    width: "18rem",
    color: "black",
    backgroundColor: "#fff",
  };

  const fetchData = async () => {
    let pageNo = Math.ceil(users.length / props.pageSize) + 1;
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${pageNo}&pagesize=${props.pageSize}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const merge = [...users, ...data.articles];
        setLoading(false);
        setUsers(merge);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = () => {
    fetchData();
  };
  return (
    <>
      <h1
        className={`text-${props.mode === "light" ? "dark" : "light"} my-3 `}
        style={{ fontFamily: " Vesper Libre" }}
      >
        Top Headlines
      </h1>
      {loading}
      <div className="container  ">
        <InfiniteScroll
          dataLength={users.length}
          next={fetchMoreData}
          hasMore={true}
          className="d-flex flex-wrap justify-around"
        >
          {users &&
            users.map((article, index) => {
              // you can use users && and users?.map to avoid undefined
              return (
                <div
                  className="card m-3 "
                  style={props.mode === "dark" ? darkMode : lightMode}
                  key={index}
                >
                  <img
                    src={
                      !article.urlToImage
                        ? "https://images.moneycontrol.com/static-mcnews/2023/07/Feat-9-654x435.jpg"
                        : article.urlToImage
                    }
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    {/* <span className="font-bold">Author -</span> */}
                    {/* {article.author} */}
                    <h5 className="card-title font-semibold">
                      {" "}
                      {article.title}
                    </h5>
                    <p className="card-text">{article.description}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      className="btn btn-primary my-2"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              );
            })}
        </InfiniteScroll>
      </div>
      {/* </InfiniteScroll> */}
      {/* <div className="container d-flex justify-content-around ">
        <button
          disabled={page <= 1}
          href=""
          onClick={handlePreviousClick}
          className="btn btn-dark my-2"
        >
          &larr; Previous
        </button>
        <button
          href=""
          // disabled={page + 1 > Math.ceil( / props.pageSize)}
          onClick={handleNextClick}
          className="btn btn-dark my-2"
        >
          Next &rarr;
        </button>
      </div> */}
    </>
  );
};
export default News;
