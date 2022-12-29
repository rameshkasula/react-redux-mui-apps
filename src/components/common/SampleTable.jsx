import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import ActionTypes from "./app/actions";
import MainLayout from "./components/layout";
import MDataTable from "./lib/MDataTable";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Page from "./components/common/Page";

function App() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  console.log("gggggggggg", userData);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(async (res) => {
        if (res.status === 200) {
          await dispatch({
            type: ActionTypes.SET_USER_DATA,
            userData: res.data,
          });
        }
      })
      .catch((error) => {
        console.log("gggg", error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(!true);
      });
  }, [dispatch]);

  const columns = [
    { field: "name", headerName: "Title", width: 200 },
    { field: "website", headerName: "Category", width: 200 },
    {
      field: "email",
      headerName: "Date",
      width: 220,
      type: Date,
      //   valueGetter: (params) =>
      //     `${new Date(params.row.createdAt).toLocaleString() || ""} `,
    },
    {
      field: "actions",
      headerName: "Actions",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <span style={{ align: "right", float: "right" }}>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </span>
      ),
    },
  ];
  return (
    <Fragment>
      <MainLayout>
        <Page
          title={"Projects"}
          action={
            <Button
              variant="contained"
              //   component={Link}
              //   to={"/projects/create"}
            >
              {"Create"}
            </Button>
          }
        >
          <MDataTable rows={userData} columns={columns} loading={loading} />
        </Page>
      </MainLayout>
    </Fragment>
  );
}

export default App;
