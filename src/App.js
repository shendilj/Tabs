import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "./Components/Cards";
import { DomainData } from "./Components/DomainD";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="start">
        <Tabs>
          <header className="style">
          <TabList className='Items'>
            <Tab>Domains</Tab>
            <Tab>WebHosting</Tab>
            <Tab>Dedicated Servers</Tab>
            <Tab>Virtual Cloud Servers</Tab>
            <Tab>Email Hosting</Tab>
            <Tab>VPN Hosting</Tab>
            <Tab>WordPress Hosting</Tab>
            <Tab>Free Hosting</Tab>
          </TabList>
          </header>
          <TabPanel>
            <div className="Domain">
              {DomainData.domains.map((el, index) => {
                return (
                  <div className="test">
                    <Card
                      text={el.text}
                      price={el.price}
                      pricee={el.pricee}
                    />
                  </div>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <h1>Content</h1>
          </TabPanel>
          <TabPanel>
            <h6>Any content 3</h6>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 5</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 6</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 7</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 8</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default App;
