import TextField from "@mui/material/TextField";
import kbm from "../kbm.svg";
import loading from "../Loading_Animation.gif";
import { Typography, Button, Modal, Box } from "@mui/material";
import { useState } from "react";
import axios from "../api/axios";
import * as localForage from "localforage";
const LOGIN_URL = "/collection_mapping";

export default function Login() {
  const initialFormData = {
    agent_name: "",
    username: "",
    data: [],
  };

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, updateFormData] = useState(initialFormData);
  const [articles, setArticles] = useState();
  const [username, setUserName] = useState();
  const [agent_name, setAgentName] = useState();
  const [secret, setSecret] = useState();

  const handleUChange = (e) => {
    setUserName(e.target.value);
  };
  const handleANChange = (e) => {
    setAgentName(e.target.value);
  };
  const handleSChange = (e) => {
    setSecret(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(true);

    try {
      const response = await axios.post(
        LOGIN_URL,
        { agent_name: agent_name, username: username },
        {
          // headers: { "Content-Type": "application/json", mode: "cors" },
        }
      );
      console.log(response);
      if (response.status === 200) {
        console.log(response.articles);
        console.log(agent_name, username);
        localStorage.setItem("Auth", true);
        localStorage.setItem("username", username);
        localStorage.setItem("agentName", agent_name);
        window.location.reload();
        localForage.setItem("articles", response.data.articles).then(() => {
          console.log("Articles have been Saved");
        });
        localForage
          .setItem("collections", response.data.collections)
          .then(() => {
            console.log("Collections have been Saved");
          });
      }
    } catch (err) {
      alert("Error is");
      console.log(err);
    }
  };

  console.log(articles);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "60vw",
          maxWidth: "400px",
          border: "1px solid grey",
          borderRadius: "1%",
          borderBottomRightRadius: "15%",
          height: "80vh",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              marginBottom: "1em",
            }}
          >
            <img src={kbm} alt="Logo" />
          </div>
          <TextField
            style={{
              width: "70%",
              margin: "10px auto 10px auto",
              borderRadius: "20%",
            }}
            type="name"
            placeholder="Agent Name"
            required
            name="agent_name"
            variant="standard"
            onChange={handleANChange}
          />
          <TextField
            style={{
              width: "70%",
              margin: "10px auto 10px auto",
              borderRadius: "20%",
            }}
            type="name"
            placeholder="KBM Username"
            required
            name="username"
            variant="standard"
            onChange={handleUChange}
          />
          <TextField
            style={{
              width: "70%",
              margin: "10px auto 30px auto",
              borderRadius: "20%",
            }}
            type="password"
            placeholder="Secret Key"
            required
            name="secretKey"
            variant="standard"
            onChange={handleSChange}
          />
          <Button
            variant="outlined"
            style={{
              color: "black",
            }}
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </form>
        <Typography
          style={{
            position: "absolute",
            bottom: "8em",
            color: "lightgray",
            fontSize: "10px",
            pointerEvents: "none",
          }}
        >
          from Kola Group
        </Typography>
      </main>
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
              <img
                src={loading}
                alt="Logo"
                style={{
                  marginBottom: "30px",
                }}
              />
            </div>
          </Box>
        </Modal>
      </div>{" "}
    </div>
  );
}
