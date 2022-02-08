import { Link, Outlet, Route, Routes } from "react-router-dom";
import {
  TextField,
  InputAdornment,
  Button,
  Modal,
  Typography,
} from "@mui/material";
import { Search, AccountBox, Logout } from "@mui/icons-material";
import kbm from "./kbm.svg";
import "./App.css";
import Data from "./data/categoryData";
import CategoryDisplay from "./components/categoryDisplay/CategoryDisplay";
import NewCategoryDisplay from "./components/newCategoryDisplay/NewCategoryDisplay";
import MappingResult from "./components/mappingResult/MappingResult";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";
import React, { useState } from "react";
import { Box } from "@mui/system";
import * as localForage from "localforage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "70vh",
  width: "30vw",
  borderRadius: "1%",
  borderBottomRightRadius: "15%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "column",
};

function App(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [mappings, setMappings] = useState([]);

  const handleMapResult = (rootpath) => {
    const mapping = {
      articleIds: checkedItems,
      rootPath: rootpath,
    };

    setMappings((prev) => {
      const map = [...prev, mapping];

      if (map.length) {
        localForage.setItem("mappings", map).then(() => {
          alert("Mapping Completed");
        });
        localForage.setItem("articleIds", checkedItems).then(() => {
          console.log(checkedItems);
        });
        localForage.setItem("rootPath", rootpath).then(() => {
          console.log(rootpath);
        });
      }
      return map;
    });
  };
  console.log(mappings);

  return (
    <div className="App">
      <header className="header">
        <div
          style={{
            margin: "auto",
          }}
        >
          <img src={kbm} alt="Logo" />
        </div>
        <TextField
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          style={{
            width: "50vw",
          }}
        />
        <div
          style={{
            margin: "auto",
            height: "100%",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          <AccountBox
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </div>
      </header>
      <div className="body">
        <br />
        <div
          style={{
            marginRight: "3vw",
          }}
        >
          <CategoryDisplay
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />
        </div>
        <div>
          <NewCategoryDisplay handleMapResult={handleMapResult} />
        </div>
        <div
          style={{
            marginLeft: "7vw",
          }}
        >
          <MappingResult />
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              style={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "space-around",
                height: "80%",
                width: "50%",
                justifyContent: "center",
              }}
            >
              <img
                src={kbm}
                alt="Logo"
                style={{
                  marginBottom: "30px",
                }}
              />
              <Button
                variant="outlined"
                onClick={() => {
                  localStorage.setItem("Auth", false);
                  <Link to="/login" />;
                }}
              >
                Logout
              </Button>
            </div>
          </Box>
        </Modal>
      </div>{" "}
    </div>
  );
}

export default App;
