import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import axios from "axios";
import ActionTypes from "./app/actions";
import MainLayout from "./components/layout";

function App() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  console.log("gggggggggg", userData);

  useEffect(() => {
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
      });
  }, [dispatch]);
  return (
    <Fragment>
      <MainLayout>"hello there"</MainLayout>
    </Fragment>
  );
}

export default App;
