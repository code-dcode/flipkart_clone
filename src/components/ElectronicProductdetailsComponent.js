import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Paper,
  Divider,
  Typography,
  FormControlLabel,
  FormGroup,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Modal,
  TextField,
  Tabs,
  Tab,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "@mui/material/Slider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp";
import Checkbox from "@mui/material/Checkbox";
import { electronicsProductData } from "../data/ProductDetailsData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function valuetext(value) {
  return `$${value}`;
}

function ElectronicProductdetailsComponent() {
  //Tab
  const [values, setvalues] = React.useState();
  const handleTab = (event, newValue) => {
    setvalues(newValue);
  };
  electronicsProductData.sort((a, b) => a.discountedPrice - b.discountedPrice);
  console.log("Sorted by price (ascending):", electronicsProductData);

  // accordion
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // slider
  const [value, setValue] = React.useState([0, 100]);

  const handleslider = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box style={{ marginTop: "5%" }}>
        <Grid container>
          <Grid
            item
            lg={3}
            style={{ width: "280px", padding: "0px 10px 0px 0px" }}
          >
            <Paper>
              <Box>
                <Typography
                  style={{
                    fontSize: "23px",
                    width: "67px",
                    fontWeight: "500",
                    padding: "20px",
                  }}
                >
                  Filters
                </Typography>
              </Box>
              <Divider />
              <Box>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#212121",
                    marginBottom: "5px",
                    padding: "20px",
                  }}
                >
                  CATEGORIES
                </Typography>

                <a href="/" style={{ textDecoration: "none" }}>
                  <Typography style={{ color: "#878787", padding: "10px" }}>
                    <ArrowBackIosIcon
                      style={{
                        overflow: "hidden",
                        textOverflow: "llipsis",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        verticalAlign: "top",
                        marginLeft: "11px",
                        fontSize: "23px",
                        // padding: "20px",
                      }}
                    ></ArrowBackIosIcon>
                    Computers
                  </Typography>
                </a>
                <a
                  href="/"
                  style={{ fontSize: "19px", textDecoration: "none" }}
                ></a>
              </Box>
              <Divider />
              <Box>
                <Typography style={{ padding: "20px" }}>PRICE</Typography>
                <Box sx={{ width: 300 }} style={{ margin: "10px" }}>
                  <Slider
                    value={value}
                    onChange={handleslider}
                    valueLabelDisplay="auto"
                    aria-labelledby="price-range-slider"
                    getAriaValueText={valuetext}
                  />
                  <Box style={{ display: "flex" }}>
                    <TextField
                      id="min-price"
                      label="Min Price"
                      variant="outlined"
                      value={`${value[0]}`}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="Max-price"
                      label="max-Price"
                      variant="outlined"
                      value={`${value[1]}`}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Divider />
              <Box>
                <Box style={{ padding: "12px", display: "flex" }}>
                  <FormGroup>
                    <FormControlLabel
                      required
                      control={<Checkbox />}
                      // label="MOTOROLA"
                    />
                  </FormGroup>
                  <img
                    style={{ height: "21px", margin: "13px" }}
                    src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt="img"
                  />
                  <Box
                    style={{
                      width: "25px",
                      height: "25px",
                      border: "1px solid",
                      borderRadius: "50%",
                      marginLeft: "47%",
                      marginTop: "11px",
                    }}
                  >
                    <QuestionMarkSharpIcon />
                  </Box>
                </Box>
              </Box>

              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    BRAND
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Checkbox {...label} />
                  <Typography style={{ padding: "10px", fontSize: "18px" }}>
                    McAfee
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    CUSTOMER RATINGS
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Checkbox {...label} />
                  <Typography style={{ padding: "10px", fontSize: "18px" }}>
                    4★ & above
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    OFFERS
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Checkbox {...label} />
                  <Typography style={{ padding: "10px", fontSize: "18px" }}>
                    No Cost EMI
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    TYPE
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Checkbox {...label} />
                  <Typography style={{ padding: "10px", fontSize: "18px" }}>
                    Anti-Virus
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    AVALIBITY
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Checkbox {...label} />
                  <Typography style={{ padding: "10px", fontSize: "18px" }}>
                    Include Out of Stock
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Divider />
            </Paper>
          </Grid>
          <Grid item lg={9}>
            <Paper>
              <Box>
                <Box
                  style={{
                    fontSize: "15px",
                    color: "#878787",
                    display: "inline-block",
                    padding: "7px",
                  }}
                >
                  <a
                    style={{
                      maxWidth: "80px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  >
                    Home
                    <ArrowForwardIosIcon
                      style={{
                        height: "14px",
                        width: "20px",
                        verticalAlign: "middle",
                      }}
                    ></ArrowForwardIosIcon>
                  </a>
                </Box>
                <Box style={{ lineHeight: "1.45", padding: "7px" }}>
                  <a
                    style={{
                      color: "2874f0",
                      fontSize: "14px",
                      display: "inline-block",
                      textDecoration: "none",
                    }}
                    href="/"
                  >
                    Computers
                  </a>
                </Box>
                <Box style={{ padding: "5px" }}>
                  <Typography variant="h6">Monitors</Typography>
                </Box>

               



                <Box style={{ width: "70%" }}>
                  <Tabs
                    value={values}
                    onChange={handleTab}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                  >
                    <Typography
                      style={{
                        fontWeight: "500",
                        padding: "8px 10px 4px 0",
                        fontSize: "18px",
                      }}
                    >
                      Sort By
                    </Typography>
                    <Tab label="Popularity" />
                    <Tab label="Price -- Low to High" />
                    <Tab label="Price -- High to Low" />
                    <Tab label="Newest First" />
                  </Tabs>
                </Box>
              </Box>
              <Divider />
              {electronicsProductData.map((item) => (
                <Box
                  style={{
                    lineHeight: "1",
                    padding: "24px 0 30px 24px",
                    display: "flex",
                  }}
                >
                  <Box>
                    <img src={item.imgUrl} alt="img" />
                  </Box>
                  <Box style={{ padding: "15px", width: "40%" }}>
                    <Typography
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        linHeight: "14px",
                        color: "#bdbdbd",
                      }}
                    >
                      Sponsored
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: "500",
                        fontSize: "18px",
                        display: "block",
                        cursor: "pointer",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Button
                      style={{ backgroundColor: "#388e3c", color: "#fff" }}
                      variant="contained"
                      onClick={handleOpen}
                    >
                      {item.rating}
                    </Button>
                    <span
                      style={{
                        fontWeight: "500",
                        color: "#878787",
                        padding: "17px",
                      }}
                    >
                      {item.reviews}
                    </span>
                    <ul>
                      <li>Panel Type: VA Panel</li>
                      <li>Brightness:300 nit</li>
                    </ul>
                  </Box>

                  <Box>
                    <Box>
                      <Typography
                        style={{ fontSize: "31px", fontWeight: "500" }}
                      >
                        {item.discountedPrice}
                      </Typography>
                      <Box style={{ display: "flex" }}>
                        <Typography
                          style={{
                            textDecorationLine: "line-through",
                            textDecorationColor: "GrayText",
                          }}
                        >
                          {item.realPrice}
                        </Typography>
                        <Typography
                          style={{
                            marginLeft: "12px",
                            color: "#388e3c",
                            fontSize: "16px",
                            letterSpacing: "-.2px",
                            fontWeight: "500",
                            textDecorationLine: "none",
                          }}
                        >
                          {item.offer}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* modal */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box
          style={{
            backgroundColor: "#fff",
            margin: "20% 10% 42px 48%",
            borderRadius: "12px",
          }}
        >
          <Box>
            <Grid container style={{}}>
              <Grid item lg={5}>
                <Box>
                  <Typography
                    style={{
                      fontSize: "32px",
                      color: "#212121",
                      marginTop: "33px",
                      marginLeft: "55px",
                    }}
                  >
                    4.3<span>★</span>
                  </Typography>
                  <Typography
                    style={{
                      fontWeight: "500",
                      color: "#878787",
                      marginLeft: "18px",
                    }}
                  >
                    3,935 Ratings & 491 Reviews
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={7}>
                <Box>
                  <ul>
                    <l1>
                      <Box>
                        <Typography>
                          5<span>★</span>
                          <span>
                            <hr
                              style={{
                                width: "240px",
                                marginTop: "-15px",
                                height: "4px",
                                backgroundColor: "green",
                                borderRadius: "15px",
                              }}
                            />
                          </span>
                        </Typography>
                      </Box>
                    </l1>
                  </ul>
                  <ul>
                    <l1>
                      <Box>
                        <Typography>
                          4<span>★</span>
                          <span>
                            <hr
                              style={{
                                width: "210px",
                                marginTop: "-15px",
                                height: "4px",
                                backgroundColor: "green",
                                marginRight: "23%",
                                borderRadius: "15px",
                              }}
                            />
                          </span>
                        </Typography>
                      </Box>
                    </l1>
                  </ul>
                  <ul>
                    <l1>
                      <Box>
                        <Typography>
                          3<span>★</span>
                          <span>
                            <hr
                              style={{
                                width: "160px",
                                marginTop: "-15px",
                                height: "4px",
                                backgroundColor: "green",
                                marginRight: "37%",
                                borderRadius: "15px",
                              }}
                            />
                          </span>
                        </Typography>
                      </Box>
                    </l1>
                  </ul>
                  <ul>
                    <l1>
                      <Box>
                        <Typography>
                          2<span>★</span>
                          <span>
                            <hr
                              style={{
                                width: "103px",
                                marginTop: "-15px",
                                height: "4px",
                                backgroundColor: "green",
                                marginRight: "53%",
                                borderRadius: "15px",
                              }}
                            />
                          </span>
                        </Typography>
                      </Box>
                    </l1>
                  </ul>
                  <ul>
                    <l1>
                      <Box>
                        <Typography>
                          1<span>★</span>
                          <span>
                            <hr
                              style={{
                                width: "74px",
                                marginTop: "-15px",
                                height: "4px",
                                backgroundColor: "green",
                                marginRight: "61%",
                                borderRadius: "15px",
                              }}
                            />
                          </span>
                        </Typography>
                      </Box>
                    </l1>
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default ElectronicProductdetailsComponent;
