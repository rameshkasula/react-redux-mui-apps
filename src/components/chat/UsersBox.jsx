/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";

const UsersBox = ({ setLoading }) => {
  const { users } = useSelector((state) => state.user);

  console.log(users);
  return (
    <Fragment>
      <Box>
        <List
          sx={{
            width: "100%",
            //maxWidth: 380,
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 650,
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
        >
          {users?.length > 0 &&
            users.map((item) => (
              <ListItem key={item?._id}>
                <ListItemAvatar>
                  <Avatar>K</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item?.userName}
                  secondary={new Date(item?.updatedAt).toDateString()}
                />
              </ListItem>
            ))}
        </List>
      </Box>
    </Fragment>
  );
};

export default UsersBox;
