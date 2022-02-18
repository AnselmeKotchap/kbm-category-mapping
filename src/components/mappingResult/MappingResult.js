import { Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as localForage from "localforage";
import axios from "axios";
import { Box } from "@mui/system";
import kbm from "../../kbm.svg";
import loading from "../../Loading_Animation.gif";
import { catFR } from "../../data/catFR";
import { DeleteForever } from "@mui/icons-material";

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
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
  direction: "rtl",
};

function MappingResult({
  mappings,
  setMappings,
  handleDeleteItemInMapping,
  mappedArticles,
  setMappedArticles,
  mappingArticles,
  setMappingArticles,
  handleDeleteMapping,
  mapIndex,
  setMapIndex,
  mapToSend,
  setMapToSend,
  openMap,
  setOpenMap,
  itemIDs,
  setItemIDs,
}) {
  const [hover, setHover] = useState(false);

  const [, setUsername] = useState("");
  const [, setAgentName] = useState("");
  const [finalData, setFinalData] = useState({});
  const [allArticles, setAllArticles] = useState([]);
  const [rootPath, setRootPath] = useState("[]");
  const [selectedItem, setSelectedItem] = useState(null);

  const [criteria, setCriteria] = useState([]);

  const [openSend, setOpenSend] = useState(false);
  const LOGIN_URL =
    "https://3fm2fdckrl.execute-api.us-east-2.amazonaws.com/collection_mapping";

  const handleOpen = (item, index) => {
    const aIDs = item.articleIds;
    setItemIDs(aIDs);
    setCriteria(item.criterias?.map((item) => item.name));
    allArticles?.forEach((i) => {
      if (aIDs.includes(i.id)) {
        setMappedArticles((prev) => [...prev, i]);
      }
    });
    setRootPath(JSON.stringify(item.rootPath));
    setOpenMap(true);
    setMapIndex(index);

    // return mappedArticles, rootPath, mapIndex;
  };
  const handleClose = () => {
    setOpenMap(false);
    setMappedArticles([]);
  };

  const getDataOnLoad = async () => {
    const articles = await localForage.getItem("articles");
    const un = localStorage.getItem("username");
    const an = localStorage.getItem("agentName");
    const map = await localForage.getItem("mappings");
    if (map?.length) {
      setMapToSend(map);
      setUsername(un);
      setAgentName(an);
      setFinalData({
        agent_name: an,
        username: un,
        mappings: map,
      });
    }

    if (articles?.length) {
      setAllArticles(articles);
    }
  };
  // initialize mapping to usestate on load
  useEffect(() => {
    if (!mappings?.length) {
      getDataOnLoad();
    } else {
      const un = localStorage.getItem("username");
      const an = localStorage.getItem("agentName");
      setMapToSend(mappings);
      setUsername(un);
      setAgentName(an);
      setFinalData({
        agent_name: an,
        username: un,
        mappings,
      });
    }
  }, [mappings]);

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      if (Object.keys(finalData).length) {
        setOpenSend(true);
        const response = await axios({
          method: "post",
          url: "https://t9iijqdfyf.execute-api.us-east-2.amazonaws.com/prod",
          data: finalData,
        });
        console.log(finalData);

        console.log(response);
        if (response.status === 200) {
          alert("Mappings Sent");
          setOpenSend(false);
          localForage.clear();
          try {
            const response = await axios({
              method: "post",
              url: LOGIN_URL,
              data: {
                agent_name: localStorage.getItem("agentName"),
                username: localStorage.getItem("username"),
              },
            });
            console.log(response);
            if (response.status === 200) {
              localForage
                .setItem("articles", response.data.articles)
                .then(() => {});
              localForage
                .setItem("collections", response.data.collections)
                .then(() => {});
              window.location.reload();
            }
          } catch (err) {
            alert("La connexion a échoué. Veuillez réessayer");
            localStorage.removeItem("Auth");
            setOpenSend(false);
            window.location.reload();
            console.log(err);
          }
          setOpenSend(false);
        }
      } else {
        alert("Data is empty");
        setOpenSend(false);
      }
    } catch (err) {
      alert("Mapping Error Please Retry");
      setOpenSend(false);

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
        Résultats cartographie
      </div>
      <div>
        <div>
          {mapToSend?.map((item, index) =>
            Object.keys(item)?.length ? (
              <div
                key={index}
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginBottom: "1em",
                }}
              >
                <Button
                  key={index}
                  variant="outlined"
                  style={{
                    color: "green",
                    textTransform: "capitalize",
                    width: "85%",
                  }}
                  onClick={() => handleOpen(item, index)}
                >
                  {catFR[item.rootPath[0].toLowerCase()] || item.rootPath[0]}{" "}
                  ....
                  {item.rootPath[3]
                    ? catFR[item.rootPath[3].toLowerCase()] || item.rootPath[3]
                    : catFR[item.rootPath[2].toLowerCase()] || item.rootPath[2]}
                </Button>
                <DeleteForever
                  onClick={handleDeleteMapping}
                  style={{
                    color: "red",
                    cursor: "pointer",
                    width: "35px",
                    height: "35px",
                  }}
                />
              </div>
            ) : null
          )}
        </div>
        <div>
          <div>
            <Modal
              open={openMap}
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
                      Nouvelle voie
                    </Typography>
                    <Typography style={{ textTransform: "capitalize" }}>
                      {JSON.stringify(
                        JSON.parse(rootPath)?.map(
                          (name) => ` ${catFR[name.toLowerCase()]} `
                        )
                      )}
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
                      Article
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
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              paddingBottom: "10px",
                              borderBottom: "0.5px dotted lightgrey",
                            }}
                          >
                            {item.name}
                            <DeleteForever
                              style={{ color: "red", cursor: "pointer" }}
                              onClick={() => {
                                if (mappedArticles?.length === 1) {
                                  handleDeleteMapping();
                                } else {
                                  handleDeleteItemInMapping(item, index);
                                }
                              }}
                            />
                          </div>
                        </li>
                      ))}
                    </ol>
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
                      Critère
                    </Typography>
                    <ol>
                      {criteria?.map((item, index) => (
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
                      Supprimer
                    </Button>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
          <div>
            <Modal
              open={openSend}
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
        <div
          style={{
            marginTop: "3em",
          }}
        >
          {mapToSend?.length ? (
            <Button variant="contained" onClick={handleSend}>
              Envoyer
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MappingResult;
