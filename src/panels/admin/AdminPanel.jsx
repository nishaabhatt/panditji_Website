import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container, TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import {
  aboutUsPageContent,
  homePageContent,
  servicesData,
} from "../../content/siteContent";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function a11yProps2(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const pages = [
    "Home",
    "About Us",
    "Pooja Services",
    "Pooja details",
    "Downloads",
  ];

  const initialFields = ["text", "image", "number", "mp3"];

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const [currentSelection, setCurrentSelection] = useState();
  const [currentSchema, setCurrentSchema] = useState();

  const [currentField, setCurrentField] = useState();

  const [isImage, setIsImage] = useState();

  useEffect(() => {
    if (currentSelection === "Home") {
      setCurrentSchema(homePageContent);
    } else if (currentSelection === "About Us") {
      setCurrentSchema(aboutUsPageContent);
    } else if (currentSelection === "Pooja Services") {
      setCurrentSchema(servicesData);
    }
  }, [currentSelection, setCurrentSchema]);

  useEffect(() => {
    if (currentSchema) {
      console.log(currentSchema);
    }
  }, [currentSchema]);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value1}
          onChange={handleChange1}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Content" {...a11yProps(0)} />
          <Tab label="Schema" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value1} index={0}>
          <Box
            style={{ marginTop: "-24px" }}
            sx={{
              bgcolor: "background.paper",
              display: "flex",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value2}
              onChange={handleChange2}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              {pages?.map((item, i) => (
                <Tab
                  key={i}
                  name={item}
                  onClick={(e) =>
                    setCurrentSelection(e.currentTarget.getAttribute("name"))
                  }
                  label={item}
                  {...a11yProps2(i)}
                />
              ))}
            </Tabs>
            {pages?.map((item, i) => {
              let isImage;
              let isText;
              return (
                <div key={i}>
                  <TabPanel key={i} value={value2} index={i}>
                    {currentSchema &&
                      Object.keys(currentSchema).map((item2, j) => (
                        <div key={j}>
                          <h3>
                            <b>{item2.toUpperCase()}</b>
                          </h3>
                          {currentSchema[item2]?.map((item3, k) => {
                            if (item3.image) {
                              return (
                                <div key={k}>
                                  <input type="file" />
                                </div>
                              );
                            }
                          })}
                        </div>
                      ))}
                  </TabPanel>
                </div>
              );
            })}
          </Box>
        </TabPanel>
      </Box>
    </Container>
  );
}
