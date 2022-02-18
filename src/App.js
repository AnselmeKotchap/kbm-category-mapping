import { Button, Modal, Typography } from "@mui/material";
import { AccountBox } from "@mui/icons-material";
import kbm from "./kbm.svg";
import "./App.css";
import CategoryDisplay from "./components/categoryDisplay/CategoryDisplay";
import NewCategoryDisplay from "./components/newCategoryDisplay/NewCategoryDisplay";
import MappingResult from "./components/mappingResult/MappingResult";

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
  const [mappingArticles, setMappingArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [mappedArticles, setMappedArticles] = useState([]);
  const [mapIndex, setMapIndex] = useState(null);
  const [mapToSend, setMapToSend] = useState(mappings || []);
  const [openMap, setOpenMap] = useState(false);
  const [itemIDs, setItemIDs] = useState([]);

  const agent_name = localStorage.getItem("agentName");
  const username = localStorage.getItem("username");

  const handleDeleteMapping = async () => {
    const deletedMap = mappings[mapIndex]?.articleIds;
    console.log(deletedMap);
    const result = allArticles.filter((item) => deletedMap?.includes(item.id));
    console.log(result);
    await localForage.setItem("mappingArticles", [
      ...mappingArticles,
      ...result,
    ]);
    setMappingArticles((previous) => [...previous, ...result]);
    console.log(mappingArticles);
    setMapToSend((prev) => {
      prev.splice(mapIndex, 1);
      console.log(prev);
      localForage.setItem("mappings", prev).then(() => {
        const result = allArticles.filter((item) =>
          prev.articleIds?.includes(item.id)
        );

        setMappedArticles(result);
        setOpenMap(false);

        alert("Articles has been removed");
      });
      return [...prev];
    });

    setOpenMap(false);

    return [mapToSend, mappingArticles];
  };

  const handleDeleteItemInMapping = async (item, index) => {
    alert(`Deleting ${item.name} from Mapping`);
    // setItemIDs(itemIDs.splice(itemIDs.indexOf(item.id), 1));
    // let updatedMappings = await localForage.getItem('mappings')
    let result = mapToSend.filter((i) => i.articleIds.includes(item.id));
    console.log(JSON.stringify(item.id));
    console.log(result);
    console.log(mapToSend);
  };

  const handleMapResult = async (rootpath, criterias) => {
    setMappings((prev) => {
      const mapping = {
        articleIds: checkedItems,
        rootPath: [...rootpath],
        criterias,
      };
      let value = prev.find(
        (item) =>
          JSON.stringify(item.rootPath) === JSON.stringify(mapping.rootPath)
      );
      if (value) {
        let mappedItem = value;
        mappedItem.articleIds = [...mappedItem.articleIds, ...checkedItems];
        console.log(mappedItem);
        localForage.setItem("mappings", prev).then(() => {
          alert("Article ajouté avec succès");
        });
        localForage.setItem("articleIds", checkedItems).then(() => {
          // console.log(checkedItems);
        });
        localForage.setItem("rootPath", rootpath).then(() => {
          // console.log(rootpath);
        });
        return prev;
      } else {
        const map = [...prev, mapping];

        localForage.setItem("mappings", map).then(() => {
          alert("Mapping des catégories achevée");
        });
        localForage.setItem("articleIds", checkedItems).then(() => {
          // console.log(checkedItems);
        });
        localForage.setItem("rootPath", rootpath).then(() => {
          // console.log(rootpath);
        });
        return map;
      }
    });
    const result = mappingArticles.filter(
      (item) => !checkedItems.includes(item.id)
    );
    setCheckedItems([]);
    await localForage.setItem("mappingArticles", result);
    setMappingArticles(result);
  };

  const getDataOnLoad = async () => {
    const map = await localForage.getItem("mappings");
    setAllArticles(await localForage.getItem("articles"));

    setMappingArticles(await localForage.getItem("mappingArticles"));
    if (map?.length) {
      setMappings(map);
    }
  };

  React.useEffect(() => {
    if (!mappings?.length) {
      getDataOnLoad();
    }
  }, [mappings]);
  // console.log(mappings);

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
        <div>
          <Typography
            style={{
              borderBottom: "1px solid grey",
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Mapping des catégories par:
            <Typography
              style={{ color: "purple", fontWeight: "700", marginLeft: "3px" }}
            >
              {agent_name}
            </Typography>
          </Typography>
          <Typography
            style={{
              borderBottom: "1px solid grey",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "10px",
              fontWeight: "700",
              marginBottom: "1em",
              marginRight: "2px",
            }}
          >
            Pour :
            <Typography
              style={{ color: "purple", fontWeight: "700", marginLeft: "3px" }}
            >
              {username}
            </Typography>
          </Typography>
        </div>
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
            mappingArticles={mappingArticles}
            setMappingArticles={setMappingArticles}
            allArticles={allArticles}
            setAllArticles={setAllArticles}
          />
        </div>
        <div>
          <NewCategoryDisplay
            handleMapResult={handleMapResult}
            checkedItems={checkedItems}
          />
        </div>
        <div
          style={{
            marginLeft: "7vw",
          }}
        >
          <MappingResult
            mappings={mappings}
            setMappings={setMappings}
            handleDeleteItemInMapping={handleDeleteItemInMapping}
            mappedArticles={mappedArticles}
            setMappedArticles={setMappedArticles}
            mappingArticles={mappingArticles}
            setMappingArticles={setMappingArticles}
            handleDeleteMapping={handleDeleteMapping}
            mapIndex={mapIndex}
            setMapIndex={setMapIndex}
            mapToSend={mapToSend}
            setMapToSend={setMapToSend}
            openMap={openMap}
            setOpenMap={setOpenMap}
            itemIDs={itemIDs}
            setItemIDs={setItemIDs}
          />
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
                onClick={async () => {
                  localStorage.removeItem("Auth");
                  await localForage.clear();
                  window.location.reload();
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
