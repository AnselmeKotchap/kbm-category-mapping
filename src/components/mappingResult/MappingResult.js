import { Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as localForage from "localforage";
import axiosSend from "../../api/axiosSend";
import axios from "axios";
import { Box, height } from "@mui/system";
import kbm from "../../kbm.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "#fff",
  border: "2px solid grey",
  boxShadow: 24,
  p: 4,
  height: "70vh",
  width: "30vw",
  borderRadius: "1%",
  borderBottomRightRadius: "15%",
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
  direction: "rtl",
};

function MappingResult(props) {
  const [mapToSend, setMapToSend] = useState([]);
  const [username, setUsername] = useState("");
  const [agentName, setAgentName] = useState("");
  const [finalData, setFinalData] = useState({});
  const [allArticles, setAllArticles] = useState([]);
  const [articleID, setArticleID] = useState([]);
  const [mappedArticles, setMappedArticles] = useState([]);
  const [rootPath, setRootPath] = useState([]);
  const [mapIndex, setMapIndex] = useState(null);

  const [open, setOpen] = useState(false);

  const handleOpen = (item, index) => {
    const aIDs = item.articleIds;
    setArticleID(aIDs);
    console.log(articleID);

    allArticles?.map((i) => {
      if (aIDs.includes(i.id)) {
        setMappedArticles((prev) => [...prev, i.name]);
      }
    });
    setRootPath(JSON.stringify(item.rootPath));
    setOpen(true);
    setMapIndex(index);
    return mappedArticles, rootPath, mapIndex;
  };
  const handleClose = () => {
    setOpen(false);
    setMappedArticles([]);
  };

  const handleDeleteMapping = () => {
    setMapToSend((prev) => prev.splice(mapIndex, 1));

    localForage.setItem("mappings", mapToSend).then(() => {
      alert("Articles has been removed");
    });
    handleClose();

    return mapToSend;
  };

  setInterval(function () {
    localForage.getItem("mappings", function (err, value) {
      if (!err) {
        setMapToSend(value);
      }
      console.log("Gotten", err);
    });
  }, 10000);

  useEffect(() => {
    localForage.getItem("articles", function (err, value) {
      setAllArticles(value);
      console.log(err);
    });
    localForage.getItem("mappings", function (err, value) {
      if (!err) {
        const un = localStorage.getItem("username");
        const an = localStorage.getItem("agentName");
        setMapToSend(value);
        setUsername(un);
        setAgentName(an);
        setFinalData({
          agent_name: an,
          username: un,
          mappings: value,
        });
      }
      console.log("adasdfs", err);
    });
  }, []);
  console.log(finalData);

  const handleSend = async (e) => {
    e.preventDefault();

    try {
      if (Object.keys(finalData).length) {
        const response = await axios({
          method: "post",
          url: "https://t9iijqdfyf.execute-api.us-east-2.amazonaws.com/prod",
          data: finalData,
        });

        console.log(response);
        if (response.status === 200) {
          alert("Mappings Sent");
        }
      } else {
        alert("Data is empty");
        console.log(finalData);
      }
    } catch (err) {
      alert("Error is", JSON.stringify(err));
      console.log(err);
    }
  };

  return (
    <div
      style={{
        width: "30vw",
        minWidth: "300px",
        height: "80vh",
        minHeight: "400px",
        border: "1px solid grey",
        borderRadius: "1%",
        borderBottomRightRadius: "15%",
        marginLeft: "2em",
        // marginTop: "1em",
      }}
    >
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid grey",
          padding: "10px",
          fontWeight: "700",
          marginBottom: "1em",
        }}
      >
        Mapping Results
      </div>
      <div>
        <div>
          {mapToSend?.map((item, index) =>
            Object.keys(item).length ? (
              <Button
                key={index}
                variant="outlined"
                style={{
                  color: "green",
                  textTransform: "capitalize",
                  marginBottom: "1em",
                  width: "90%",
                }}
                onClick={() => handleOpen(item, index)}
              >
                {item.rootPath[0]} ....
                {item.rootPath[3] ? item.rootPath[3] : item.rootPath[2]}
              </Button>
            ) : null
          )}
        </div>
        <div>
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
                    height: "100%",
                    width: "100%",
                    direction: "ltr",
                  }}
                >
                  <img
                    src={kbm}
                    alt="Logo"
                    style={{
                      marginBottom: "1em",
                      marginTop: "1em",
                      width: "90px",
                      height: "90px",
                      alignSelf: "center",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      style={{
                        textTransform: "uppercase",
                        textAlign: "center",
                        textDecoration: "underline",
                        marginBottom: "1em",
                      }}
                    >
                      New Path
                    </Typography>
                    <Typography style={{ textTransform: "capitalize" }}>
                      {rootPath}
                    </Typography>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      style={{
                        textTransform: "uppercase",
                        textAlign: "center",
                        textDecoration: "underline",
                        marginTop: "2em",
                      }}
                    >
                      Items
                    </Typography>
                    <ol>
                      {mappedArticles?.map((item, index) => (
                        <li
                          key={index}
                          style={{
                            textTransform: "capitalize",
                            marginBottom: "1em",
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "60px",
                      paddingBottom: "2em",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        alignSelf: "center",
                        width: "50%",
                      }}
                      onClick={handleDeleteMapping}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
        <div
          style={{
            marginTop: "3em",
          }}
        >
          <Button variant="contained" onClick={handleSend}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MappingResult;
