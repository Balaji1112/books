import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { DataGrid } from "@mui/x-data-grid";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { edit } from "../../redux/booksSlice";
import Pagination from "@mui/material/Pagination";

function Books() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("DESC");
  const [page, setpage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleEdit(params) {
    // console.log(params.row,'hdhdhdh');
    dispatch(edit(params.row));
    navigate("/editbooks/" + params.row.id);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "author",
      headerName: "Author",
      width: 150,
      flex: 1,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      flex: 1,
    },
    {
      field: "language",
      headerName: "Language",
      width: 150,
      flex: 1,
    },
    {
      field: "link",
      headerName: "Link",
      width: 150,
      flex: 1,
    },
    {
      field: "pages",
      headerName: "Pages",
      width: 150,
      flex: 1,
    },
    {
      field: "year",
      headerName: "Year",
      width: 110,
      flex: 1,
    },
    {
      field: "Edit",
      headerName: "Edit",
      flex: 1,
      width: 150,
      renderCell: (params) => (
        <button
          className="editbtn"
          type="button"
          onClick={() => handleEdit(params)}
        >
          Edit
        </button>
      ),
    },
  ];

  async function fetchData() {
    try {
      const response = await axios.get(
        `http://68.178.162.203:8080/application-test-v1.1/books?title=${search}&DIR=${sort}&page=${page}`
      );
      setCount(response.data.pagination?.totalPages);
      setData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [search, sort, page]);

  return (
    <Box sx={{ width: "100%", position: "relative" }} className="box">
      <Container>
        <div className="datadiv">
          <div className="headdiv">
            <h1>Books List</h1>
            <button className="addbtn" onClick={() => navigate("/addbooks")}>
              Add to Books List
            </button>
          </div>
          <div className="searchdiv">
            <input
              type="text"
              placeholder="Search By Title"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="filterdiv">
              <label htmlFor="filter">Sort :</label>
              <select
                name="filter"
                id="filter"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="DESC">DESC</option>
                <option value="ASC">ASC</option>
              </select>
            </div>
          </div>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 25,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </div>
        <div className="pagination">
          <Pagination
            page={page}
            onChange={(event, value) => setpage(value)}
            color="primary"
            count={count}
          />
        </div>
        <div className="pagination mobile">
          <Pagination
            size="small"
            page={page}
            onChange={(event, value) => setpage(value)}
            color="primary"
            count={count}
          />
        </div>
      </Container>
    </Box>
  );
}
export default Books;
