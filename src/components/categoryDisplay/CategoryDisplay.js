import React, { useEffect, useRef, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as localForage from "localforage";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

const CategoryDisplay = ({ checkedItems, setCheckedItems }) => {
  const [collection, setCollection] = useState({});
  const [subCollection, setSubCollection] = useState({});
  const [allArticles, setAllArticles] = useState([]);
  const [allCollections, setAllCollections] = useState([]);

  //Assign Checked Articles

  const handleCheckbox = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems((prev) => prev.filter((tid) => tid !== id));
      return;
    }

    setCheckedItems((prev) => [...prev, id]);
  };
  console.log(checkedItems);
  // const articleList = allArticles?.map((item, index) => {
  //   if(item.collectionID === subCollection.id){
  //     return <div
  //     key={index}
  //     style={{
  //       width: "85%",
  //       height: "30vh",
  //       border: "1px solid grey",
  //       borderRadius: "3%",
  //       display: "flex",
  //       flexDirection: "column",
  //       alignItems: "flex-start",
  //       margin: "auto",
  //       overflowX: "hidden",
  //       overflowY: "scroll",
  //       scrollBehavior: "smooth",
  //     }}
  //     onClick={() => handleCheckbox(item?.name)}
  //   >
  //     {checkedItems.includes(item?.name) && (
  //       <CheckBox width={20} height={20} />
  //     )}
  //   </div>
  //   }
  // });

  // Get Items
  useEffect(() => {
    localForage.getItem("articles", function (err, value) {
      setAllArticles(value);
      console.log(err);
    });
    localForage.getItem("collections", function (err, value) {
      setAllCollections(value);
      console.log(err);
    });
  }, []);

  const handleCollectionChange = (event) => {
    setCollection(event.target.value);
  };
  const handleSubCollectionChange = (event) => {
    setSubCollection(event.target.value);
  };

  return (
    <div
      style={{
        width: "30vw",
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
        Old Collections
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
            {Object.keys(allCollections)?.length === 0
              ? () => setSubCollection({})
              : allCollections?.map((item, index) => {
                  if (item?.type === "collection") {
                    return (
                      <MenuItem
                        key={index}
                        value={item}
                        style={{
                          textTransform: "capitalize",
                        }}
                      >
                        {item?.name}
                      </MenuItem>
                    );
                  }
                })}
          </Select>
        </FormControl>
        {Object.keys(collection)?.length === 0 ? (
          () => setSubCollection({})
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
              {Object.keys(collection)?.length === 0
                ? () => setSubCollection({})
                : allCollections?.map((item, index) => {
                    if (
                      item?.type === "subCollection" &&
                      item?.parentCollectionID === collection?.id
                    ) {
                      return (
                        <MenuItem
                          key={index}
                          value={item}
                          style={{
                            textTransform: "capitalize",
                          }}
                        >
                          {item?.name}
                        </MenuItem>
                      );
                    }
                  })}
            </Select>
          </FormControl>
        )}
        {Object.keys(subCollection)?.length === 0 ? null : (
          <div
            style={{
              width: "100%",
              height: "5vh",
            }}
          >
            <Typography
              style={{
                textAlign: "left",
                marginLeft: "2em",
              }}
            >
              Articles
            </Typography>
            <div
              style={{
                width: "85%",
                height: "40vh",
                border: "1px solid grey",
                borderRadius: "3%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                margin: "auto",
                overflowX: "hidden",
                overflowY: "scroll",
                scrollBehavior: "smooth",
              }}
            >
              {allArticles.map((item, index) => {
                if (item.collectionID === subCollection.id) {
                  return (
                    <FormControlLabel
                      key={index}
                      style={{
                        textTransform: "capitalize",
                        paddingLeft: "5px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        height: "auto",
                        width: "auto",
                      }}
                      control={
                        <Checkbox
                          key={index}
                          checked={checkedItems.includes(item.id)}
                          onChange={() => handleCheckbox(item.id)}
                          name={item.id}
                          inputProps={{ "aria-label": item?.name }}
                        />
                      }
                      label={item?.name}
                    />
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CategoryDisplay;
