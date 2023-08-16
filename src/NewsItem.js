// const handleNextClick = async () => {
//   console.log("Next Click");
//   await fetch(
//     `https://newsapi.org/v2/top-headlines?country=in&category=${
//       props.category
//     }&apiKey=4bce82914e9145319b6db129fa80188c&page=${page + 1}&pagesize=${
//       props.pageSize
//     }`
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setLoading(false);
//       setUsers(data.articles);
//       console.log(data.articles);
//     });
//   setPage(page + 1);
// };

// const handlePreviousClick = async () => {
//   await fetch(
//     `https://newsapi.org/v2/top-headlines?country=in&category=${
//       props.category
//     }&apiKey=4bce82914e9145319b6db129fa80188c&page=${page - 1}&pagesize=${
//       props.pageSize
//     }`
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setLoading(false);
//       setUsers(data.articles);
//       console.log(data.articles);
//       console.log(data.articles);
//     });
//   setPage(page - 1);
// };
