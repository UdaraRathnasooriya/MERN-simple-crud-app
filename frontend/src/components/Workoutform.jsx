import React, { Fragment, useState } from "react";
import {
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
  Heading,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import Axios from "axios";

const Workoutform = () => {
  const [data, setData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    Axios.post("http://localhost:4000/create", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      window.location.reload()
  };

  return (
    <Fragment>
      <div>
        <Heading>Add New One</Heading>
        <FormControl>
          <FormLabel>Workout Title</FormLabel>
          <Input type="text" onChange={handleInputChange} name="title" />
        </FormControl>
        <FormControl>
          <FormLabel>Load (in kg)</FormLabel>
          <NumberInput>
            <NumberInputField onChange={handleInputChange} name="load" />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Reps</FormLabel>
          <NumberInput>
            <NumberInputField onChange={handleInputChange} name="reps" />
          </NumberInput>
        </FormControl>
        <div className="text-center mt-8">
          <Button colorScheme="teal" onClick={handleSubmit}>
            Add Workout
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Workoutform;
