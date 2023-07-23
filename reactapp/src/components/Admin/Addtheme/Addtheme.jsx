import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addtheme = (props) => {
  const [ThemeName, setThemeName] = useState("");
  const [ThemePrice, setThemePrice] = useState("");
  const [ThemeDescription, setThemeDescription] = useState("");
  const [error, setError] = useState({
    themeNameError: "",
    themePriceError: "",
    themeDescriptionError: "",
  });

  const handleThemeName = (e) => {
    const inputValue = e.target.value;
    if (/^[a-zA-Z ]+$/.test(inputValue) || inputValue === "") {
      setThemeName(inputValue);
      setError((prevError) => ({ ...prevError, themeNameError: "" })); // Clear error when input is valid
    } else {
      setError((prevError) => ({
        ...prevError,
        themeNameError: "Theme Name should only contain alphabets",
      }));
    }
  };

  const handleThemePrice = (e) => {
    setThemePrice(e.target.value);
    setError((prevError) => ({ ...prevError, themePriceError: "" })); // Clear error when input changes
  };

  const handleThemeDescription = (e) => {
    const inputValue = e.target.value;
    if (/^[a-zA-Z ]+$/.test(inputValue) || inputValue === "") {
      setThemeDescription(inputValue);
      setError((prevError) => ({ ...prevError, themeDescriptionError: "" })); // Clear error when input is valid
    } else {
      setError((prevError) => ({
        ...prevError,
        themeDescriptionError: "Theme Description should only contain alphabets",
      }));
    }
  };

  const handleAddTheme = (e) => {
    e.preventDefault();
    setError({
      themeNameError: "",
      themePriceError: "",
      themeDescriptionError: "",
    });

    let isValid = true;
    if (ThemeName.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        themeNameError: "Theme Name cannot be empty",
      }));
      isValid = false;
    }
    if (ThemePrice.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        themePriceError: "Theme Price cannot be empty",
      }));
      isValid = false;
    }
    if (ThemeDescription.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        themeDescriptionError: "Theme Description cannot be empty",
      }));
      isValid = false;
    }

    if (isValid) {
      const themeData = {
        themename: ThemeName,
        themeprice: ThemePrice,
        themedetails: ThemeDescription,
      };

      const url =
        "https://8080-aeeceaafaebbabadfbbdfdacbcefeddcbcbaffb.project.examly.io/admin/addTheme";
      axios
        .post(url, themeData)
        .then((result) => {
          console.log(result.data);
          if (result.data === "Theme Added") {
            props.onThemeAdded();
            toast.success("Theme Added");
            setThemeName(""); // Clear the ThemeName field
            setThemePrice(""); // Clear the ThemePrice field
            setThemeDescription(""); // Clear the ThemeDescription field
          }
        })
        .catch((error) => {
          toast.warning("Theme Not Added");
        });
    }
  };

  return (
    <Form onSubmit={handleAddTheme}>
      <Form.Text className="text-muted">
        <h1>Add Theme</h1>
      </Form.Text>
      <label>Theme Name:</label>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter the theme name"
          id="enterThemeName"
          onChange={handleThemeName}
          value={ThemeName} // Bind value to state
        />
        <span style={{ color: "red" }}>{error.themeNameError}</span>
      </Form.Group>
      <label>Theme Price:</label>

      <Form.Group className="mb-3">
        <Form.Control
          type="number"
          placeholder="Enter the theme price"
          id="enterThemePrice"
          onChange={handleThemePrice}
          value={ThemePrice} // Bind value to state
        />
        <span style={{ color: "red" }}>{error.themePriceError}</span>
      </Form.Group>
      <label>Theme Description:</label>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter the theme description"
          id="enterThemeDescription"
          onChange={handleThemeDescription}
          value={ThemeDescription} // Bind value to state
        />
        <span style={{ color: "red" }}>{error.themeDescriptionError}</span>
      </Form.Group>
      <Button variant="primary" type="submit" id="add">
        Add Theme
      </Button>
    </Form>
  );
};

export default Addtheme;