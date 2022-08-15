import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../components/DashboardLayout";

describe("With Enzyme", () => {
  it('Total 4 div are using for Main Layout component"', () => {
    const app = shallow(<App />);

    expect(app.find('div')).toHaveLength(4)
  });
});

describe("With Enzyme", () => {
  it('1 h3 is using for text', () => {
    const app = shallow(<App />);

    expect(app.find('h3')).toHaveLength(1)
  });
});

describe("With Enzyme", () => {
  it('Heading displaying with specific text', () => {
    const app = shallow(<App />);

    expect(app.find("h3").text()).toEqual("Future-proof your business. WiFi 6E is here.");
  });
});


describe("With Snapshot Testing", () => {
  it('App shows Future-proof your business. WiFi 6E is here.!"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});