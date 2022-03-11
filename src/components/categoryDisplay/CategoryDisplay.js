import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as localForage from "localforage";
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  Add,
  DeleteForever,
  KeyboardArrowDown,
  Search,
} from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CSSTransition } from "react-transition-group";
import "./style.css";

const CategoryDisplay = ({
  checkedItems,
  setCheckedItems,
  mappingArticles,
  setMappingArticles,
  allArticles,
  setAllArticles,
  files,
  setFiles,
}) => {
  const [collection, setCollection] = useState({});
  const [subCollection, setSubCollection] = useState({});

  const [allCollections, setAllCollections] = useState([]);
  const [results, setResults] = useState([]);

  const [setterId, setSetterId] = useState();
  const [imageId, setImageId] = useState();
  const [imageURL, setImageURL] = useState();
  const [transition, setTransition] = useState(true);
  const [drawerId, setDrawerId] = useState();

  const getFiles = () => {
    const toUpload = document.getElementById("fileInput").files;
    console.log(document.getElementById("fileInput").files.length);

    for (let index = 0; index < toUpload.length; index++) {
      const singleFile = toUpload[index];
      // console.log();
      setFiles((prev) => [
        ...prev,
        {
          id: setterId,
          image: singleFile,
        },
      ]);
    }
  };

  console.log(files);
  console.log(files[0]);

  //Assign Checked Articles

  const handleCheckbox = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems((prev) => prev.filter((tid) => tid !== id));
      return;
    }

    setCheckedItems((prev) => [...prev, id]);
    setSetterId(id);
    return setterId;
  };

  const handleSearch = (e) => {
    let name = e.target.value;
    const result = mappingArticles?.filter((item, index) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    setResults(result);
    return results;
  };

  // Get Items
  useEffect(() => {
    localForage.getItem("collections", function (err, value) {
      setAllCollections(value);
    });
  }, []);

  const handleCollectionChange = (event) => {
    setCollection(event.target.value);
    setSubCollection({});
    setCheckedItems([]);
  };
  const handleSubCollectionChange = (event) => {
    setSubCollection(event.target.value);
    setCheckedItems([]);
  };

  return (
    <div
      style={{
        width: "30vw",
        minWidth: "100px",
        height: "80vh",
        minHeight: "400px",
        border: "1px solid grey",
        backgroundColor: "#00000010",
        borderRadius: "1%",
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
          backgroundColor: "#fff",
        }}
      >
        Ancienne Collection
      </div>
      <div>
        <FormControl
          style={{ width: "85%", marginBottom: "1em", backgroundColor: "#fff" }}
        >
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
            {!allCollections?.length
              ? null
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
                  return null;
                })}
          </Select>
        </FormControl>
        {Object.keys(collection)?.length === 0 ? null : (
          <FormControl
            style={{
              width: "85%",
              marginBottom: "1em",
              backgroundColor: "#fff",
            }}
          >
            <InputLabel id="demo-simple-select-label">
              sous Collections
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
              {allCollections?.length === 0
                ? null
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
                    return null;
                  })}
            </Select>
          </FormControl>
        )}
        {Object.keys(subCollection)?.length === 0 ? null : (
          <div
            style={{
              width: "100%",
              height: "5vh",
              // backgroundColor: '#fff',
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
                backgroundColor: "#fff",
              }}
            >
              <TextField
                onChange={handleSearch}
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
                  backgroundColor: "#fff",
                }}
              />
              {results?.length
                ? results?.map((item, index) => {
                    if (item.collectionID === subCollection.id) {
                      return checkedItems.includes(item.id) ? (
                        <div
                          key={index}
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "95%",
                            }}
                          >
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
                                width: "100%",
                                backgroundColor: "#fff",
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

                            <h3 style={{ cursor: "pointer" }}>
                              {transition ? (
                                <KeyboardArrowDown
                                  onClick={() => setTransition(false)}
                                />
                              ) : (
                                <Add onClick={() => setTransition(true)} />
                              )}
                            </h3>
                          </div>
                          <CSSTransition
                            in={transition}
                            timeout={400}
                            classNames="addImages"
                            unmountOnExit
                          >
                            <div
                              style={{
                                position: "relative",
                                height: "auto",
                                minHeight: "100px",
                                background: "#c5c6d090",
                                padding: "0.9em 0.5em 0.5em 0.5em",
                              }}
                            >
                              <Typography
                                component="p"
                                style={{ fontSize: "11px", color: "black" }}
                              >
                                Choose up to 4 images (Optional)
                              </Typography>
                              <div
                                style={{
                                  display: "none",
                                }}
                              >
                                <input
                                  type="file"
                                  multiple
                                  hidden
                                  id="fileInput"
                                  onChange={getFiles}
                                  onClick={() => {
                                    setSetterId(item.id);
                                    console.log(item.id);
                                    return setterId;
                                  }}
                                  accept="image/*"
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-evenly",
                                  marginTop: "1em",
                                }}
                              >
                                {files
                                  ?.filter((file) => file.id === item.id)
                                  .map((image, index) => {
                                    return (
                                      <div
                                        onMouseEnter={() => {
                                          setImageId(image.id);
                                        }}
                                        onMouseLeave={() => {
                                          setImageId(null);
                                        }}
                                        style={{
                                          position: "relative",
                                          height: "80px",
                                        }}
                                        key={index}
                                      >
                                        {imageId === image.id && (
                                          <div
                                            style={{
                                              position: "absolute",
                                              top: "-5px",
                                              right: "-8px",
                                              zIndex: "1",
                                              cursor: "pointer",
                                            }}
                                            onClick={() => {
                                              setFiles(
                                                files.filter(
                                                  (file) =>
                                                    file.image !== image.image
                                                )
                                              );
                                              console.log(image.image);
                                              return files;
                                            }}
                                          >
                                            <DeleteForever
                                              style={{
                                                height: "25px",
                                                color: "red",
                                              }}
                                            />
                                          </div>
                                        )}

                                        <Zoom>
                                          <img
                                            src={URL.createObjectURL(
                                              image.image
                                            )}
                                            alt="uploaded"
                                            style={{
                                              width: "100%",
                                              height: "40px",
                                            }}
                                          />
                                        </Zoom>
                                      </div>
                                    );
                                  })}
                              </div>
                              <label
                                htmlFor="fileInput"
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  alignItems: "baseline",
                                  position: "absolute",
                                  right: "0px",
                                  bottom: "10px",
                                }}
                              >
                                <Typography
                                  style={{
                                    padding: "5px",
                                    borderRadius: "5%",
                                    backgroundColor: "#c5c6d0",
                                    cursor: "pointer",
                                    fontSize: "15px",
                                  }}
                                >
                                  Browse Files
                                </Typography>
                              </label>
                            </div>
                          </CSSTransition>
                        </div>
                      ) : (
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
                            width: "100%",
                            backgroundColor: "#fff",
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
                    return null;
                  })
                : mappingArticles?.map((item, index) => {
                    if (item.collectionID === subCollection.id) {
                      return checkedItems.includes(item.id) ? (
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          key={index}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "95%",
                            }}
                          >
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
                                width: "100%",
                                backgroundColor: "#fff",
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

                            <h3 style={{ cursor: "pointer" }}>
                              {transition && drawerId === item.id ? (
                                <KeyboardArrowDown
                                  onClick={() => {
                                    setTransition(false);
                                    setDrawerId(item.id);
                                  }}
                                />
                              ) : (
                                <Add
                                  onClick={() => {
                                    setTransition(true);
                                    setDrawerId(item.id);
                                  }}
                                />
                              )}
                            </h3>
                          </div>
                          <CSSTransition
                            in={transition && drawerId === item.id}
                            timeout={250}
                            classNames="addImages"
                            unmountOnExit
                          >
                            <div
                              style={{
                                position: "relative",
                                height: "auto",
                                minHeight: "100px",
                                background: "#c5c6d090",
                                padding: "0.9em 0.5em 0.5em 0.5em",
                              }}
                            >
                              <Typography
                                component="p"
                                style={{ fontSize: "11px", color: "black" }}
                              >
                                Choose up to 4 images (Optional)
                              </Typography>
                              <div
                                style={{
                                  display: "none",
                                }}
                              >
                                <input
                                  type="file"
                                  multiple
                                  hidden
                                  id="fileInput"
                                  onChange={getFiles}
                                  onClick={() => {
                                    setSetterId(item.id);
                                    console.log(item.id);
                                    return setterId;
                                  }}
                                  accept="image/*"
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-evenly",
                                  marginTop: "1em",
                                }}
                              >
                                {files
                                  ?.filter((file) => file.id === item.id)
                                  .map((image, index) => {
                                    return (
                                      <div
                                        onMouseEnter={() => {
                                          setImageId(image.id);
                                        }}
                                        onMouseLeave={() => {
                                          setImageId(null);
                                        }}
                                        style={{
                                          position: "relative",
                                          height: "80px",
                                        }}
                                        key={index}
                                      >
                                        {imageId === image.id && (
                                          <div
                                            style={{
                                              position: "absolute",
                                              top: "-5px",
                                              right: "-8px",
                                              zIndex: "1",
                                              cursor: "pointer",
                                            }}
                                            onClick={() => {
                                              setFiles(
                                                files.filter(
                                                  (file) =>
                                                    file.image !== image.image
                                                )
                                              );
                                              console.log(image.image);
                                              return files;
                                            }}
                                          >
                                            <DeleteForever
                                              style={{
                                                height: "25px",
                                                color: "red",
                                              }}
                                            />
                                          </div>
                                        )}

                                        <Zoom>
                                          <img
                                            src={URL.createObjectURL(
                                              image.image
                                            )}
                                            alt="uploaded"
                                            style={{
                                              width: "100%",
                                              height: "40px",
                                            }}
                                          />
                                        </Zoom>
                                      </div>
                                    );
                                  })}
                              </div>
                              <label
                                htmlFor="fileInput"
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  alignItems: "baseline",
                                  position: "absolute",
                                  right: "0px",
                                  bottom: "10px",
                                }}
                              >
                                <Typography
                                  style={{
                                    padding: "5px",
                                    borderRadius: "5%",
                                    backgroundColor: "#c5c6d0",
                                    cursor: "pointer",
                                    fontSize: "15px",
                                  }}
                                >
                                  Browse Files
                                </Typography>
                              </label>
                            </div>
                          </CSSTransition>
                        </div>
                      ) : (
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
                            width: "100%",
                            backgroundColor: "#fff",
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
                    return null;
                  })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CategoryDisplay;
