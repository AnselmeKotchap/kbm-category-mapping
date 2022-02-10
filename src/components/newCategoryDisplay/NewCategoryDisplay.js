import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { catergoryData } from "../../data/categoryData";
import { Button } from "@mui/material";

const NewCategoryDisplay = ({ handleMapResult, checkedItems }) => {
  const [collection, setCollection] = useState({});
  const [subCollection, setSubCollection] = useState({});
  const [secondSubCollection, setSecondSubCollection] = useState({});
  const [thirdSubCollection, setThirdSubCollection] = useState({});
  const [fourthSubCollection, setFourthSubCollection] = useState({});
  const [rootPath, setRootPath] = useState([]);

  const handleCollectionChange = (event) => {
    setCollection(event.target.value);
    setRootPath([event.target.value.name]);
    setSubCollection({});
    setSecondSubCollection({});
    setThirdSubCollection({});
    setFourthSubCollection({});

  };
  const handleSubCollectionChange = (event) => {
    setSubCollection(event.target.value);
    setRootPath((prev) => [prev[0], event.target.value.name]);
    setSecondSubCollection({});
    setThirdSubCollection({});
    setFourthSubCollection({});
  };
  const handleSecondSubCollectionChange = (event) => {
    setSecondSubCollection(event.target.value);
    setRootPath((prev) => [prev[0], prev[1], event.target.value.name]);
    setThirdSubCollection({});
    setFourthSubCollection({});
  };
  const handleThirdSubCollectionChange = (event) => {
    setThirdSubCollection(event.target.value);
    setRootPath((prev) => [prev[0], prev[1], prev[2], event.target.value.name]);
    setFourthSubCollection({});
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
    if (rootPath.length === collection.level && checkedItems?.length) {
      const foundValue = catergoryData.find(item => {
        item.rootPath?.push(item.name)
        return JSON.stringify(item.rootPath.map(a => a?.trim().toLocaleLowerCase())) === JSON.stringify(rootPath.map(a => a?.trim().toLocaleLowerCase()))
        
      })

      if (!foundValue) {
        alert("Not a correct rootpath combination")
        return;
      }

      const criteria = foundValue.criteria.map(item => ({ ...item, value: '' }));
      
      handleMapResult(rootPath, criteria);
    } else alert("Make Sure all categories and subcategories are selected");

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
                item.rootPath[0]?.trim().toLocaleLowerCase() === collection.name?.trim().toLocaleLowerCase() &&
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
                item.rootPath[0]?.trim().toLocaleLowerCase() === collection.name?.trim().toLocaleLowerCase() &&
                item.rootPath[1]?.trim().toLocaleLowerCase() === subCollection.name?.trim().toLocaleLowerCase() &&
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
                item.rootPath[0]?.trim().toLocaleLowerCase() === collection.name?.trim().toLocaleLowerCase() &&
                item.rootPath[1]?.trim().toLocaleLowerCase() === subCollection.name?.trim().toLocaleLowerCase() &&
                item.rootPath[2]?.trim().toLocaleLowerCase() === secondSubCollection.name?.trim().toLocaleLowerCase() &&
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
                item.rootPath[3]?.trim().toLocaleLowerCase() === thirdSubCollection.name?.trim().toLocaleLowerCase() &&
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
      {collection?.level === rootPath.length ? <Button
          variant="contained"
          style={{
            width: "50%",
            textTransform: "capitalize",
          }}
          type="submit"
          onClick={handleMap}
        >
          Save Mapping
        </Button>: null}
      </div>
    </div>
  );
};
export default NewCategoryDisplay;
