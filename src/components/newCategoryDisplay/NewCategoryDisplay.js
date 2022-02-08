import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { catergoryData } from "../../data/categoryData";
import { Button } from "@mui/material";

const NewCategoryDisplay = ({ handleMapResult }) => {
  const [collection, setCollection] = useState({});
  const [subCollection, setSubCollection] = useState({});
  const [secondSubCollection, setSecondSubCollection] = useState({});
  const [thirdSubCollection, setThirdSubCollection] = useState({});
  const [fourthSubCollection, setFourthSubCollection] = useState({});
  const [rootPath, setRootPath] = useState([]);

  let initialRootPath = [
    collection,
    subCollection,
    thirdSubCollection,
    Object.keys(fourthSubCollection).length === 0 ? null : fourthSubCollection,
  ];

  const handleCollectionChange = (event) => {
    setCollection(event.target.value);
    setRootPath([event.target.value.name]);
  };
  const handleSubCollectionChange = (event) => {
    setSubCollection(event.target.value);
    setRootPath((prev) => [prev[0], event.target.value.name]);
    if (collection.level === 3) {
      setThirdSubCollection({});
    }
  };
  const handleSecondSubCollectionChange = (event) => {
    setSecondSubCollection(event.target.value);
    setRootPath((prev) => [prev[0], prev[1], event.target.value.name]);
  };
  const handleThirdSubCollectionChange = (event) => {
    setThirdSubCollection(event.target.value);
    setRootPath((prev) => [prev[0], prev[1], prev[2], event.target.value.name]);
  };
  const handleFourthSubCollectionChange = (event) => {
    setFourthSubCollection(event.target.value);
    setRootPath((prev) => [
      prev[0],
      prev[1],
      prev[2],
      prev[3],
      event.target.value.name,
    ]);
  };

  const handleMap = () => {
    if (rootPath.length >= 3) {
      handleMapResult(rootPath);
    } else alert("Make Sure all categories and subcategories are selected");

    console.log(rootPath);
  };

  return (
    <div
      style={{
        width: "25vw",
        minWidth: "100px",
        height: "80vh",
        minHeight: "400px",
        border: "1px solid grey",
        borderRadius: "1%",
        borderBottomRightRadius: "15%",
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
        New Collections
      </div>
      <div>
        <FormControl style={{ width: "85%", marginBottom: "1em" }}>
          <InputLabel id="demo-simple-select-label">Collections</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={collection?.name}
            label="Collections"
            onChange={handleCollectionChange}
            style={{
              textTransform: "capitalize",
            }}
          >
            {catergoryData.map((item, index) =>
              item.rootPath.length === 0 ? (
                <MenuItem key={index} value={item}>
                  {item.name}
                </MenuItem>
              ) : null
            )}
          </Select>
        </FormControl>
        {Object.keys(collection).length === 0 ? (
          () => setSubCollection(null)
        ) : (
          <FormControl style={{ width: "85%", marginBottom: "1em" }}>
            <InputLabel id="demo-simple-select-label">
              Sub Collections
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subCollection?.name}
              label="Sub Collections"
              onChange={handleSubCollectionChange}
              style={{
                textTransform: "capitalize",
              }}
            >
              {catergoryData.map((item, index) =>
                item.rootPath[0] === collection.name &&
                item.rootPath.length === 1 ? (
                  <MenuItem
                    key={index}
                    value={item}
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ) : null
              )}
            </Select>
          </FormControl>
        )}
        {Object.keys(subCollection).length === 0 ? (
          () => setSecondSubCollection(null)
        ) : (
          <FormControl style={{ width: "85%", marginBottom: "1em" }}>
            <InputLabel id="demo-simple-select-label">
              2nd Sub Collections
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={secondSubCollection?.name}
              label="2nd Sub Collections"
              onChange={handleSecondSubCollectionChange}
              style={{
                textTransform: "capitalize",
              }}
            >
              {catergoryData.map((item, index) =>
                item.rootPath[1] === subCollection.name &&
                item.rootPath.length === 2 ? (
                  <MenuItem
                    key={index}
                    value={item}
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ) : null
              )}
            </Select>
          </FormControl>
        )}

        {Object.keys(secondSubCollection).length === 0 ? (
          () => setThirdSubCollection({})
        ) : secondSubCollection.level === 1 ? null : (
          <FormControl style={{ width: "85%", marginBottom: "1em" }}>
            <InputLabel id="demo-simple-select-label">
              3rd Sub Collections
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={thirdSubCollection?.name}
              label="3rd Sub Collections"
              onChange={handleThirdSubCollectionChange}
              style={{
                textTransform: "capitalize",
              }}
            >
              {catergoryData.map((item, index) =>
                item.rootPath[2] === secondSubCollection.name &&
                item.rootPath.length === 3 ? (
                  <MenuItem
                    key={index}
                    value={item}
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ) : null
              )}
            </Select>
          </FormControl>
        )}

        {Object.keys(thirdSubCollection).length === 0 ? (
          () => setFourthSubCollection({})
        ) : thirdSubCollection.level === 1 ? null : (
          <FormControl style={{ width: "85%", marginBottom: "1em" }}>
            <InputLabel id="demo-simple-select-label">
              4th Sub Collections
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={fourthSubCollection?.name}
              label="4th Sub Collections"
              onChange={handleFourthSubCollectionChange}
              style={{
                textTransform: "capitalize",
              }}
            >
              {catergoryData.map((item, index) =>
                item.rootPath[3] === thirdSubCollection.name &&
                item.rootPath.length === 3 ? (
                  <MenuItem
                    key={index}
                    value={item}
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ) : null
              )}
            </Select>
          </FormControl>
        )}
      </div>
      <div>
        <Button
          variant="contained"
          style={{
            width: "50%",
            textTransform: "capitalize",
          }}
          type="submit"
          onClick={handleMap}
        >
          Save Mapping
        </Button>
      </div>
    </div>
  );
};
export default NewCategoryDisplay;
