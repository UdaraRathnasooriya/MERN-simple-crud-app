import React, { Fragment } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import Axios  from "axios";

const WorkoutCard = ({ workout }) => {
  const handleDelete = (id) => {
    Axios.delete(`http://localhost:4000/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      window.location.reload();
  };

  return (
    <Fragment>
      {workout.map((item) => {
        return (
          <Card key={item._id}>
            <CardHeader>
              <Heading size="md">WorkOut Report</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="2">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    {item.title}
                  </Heading>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Load(kg)
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {item.load}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Reps
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {item.reps}
                  </Text>
                </Box>
                <Box>
                  <Text pt="2" fontSize="sm">
                    Date : {item.createdAt}
                  </Text>
                </Box>
              </Stack>
              <div className="text-center mt-4">
                <IconButton
                  colorScheme="red"
                  aria-label="Search database"
                  icon={<DeleteIcon />}
                  onClick={() => handleDelete(item._id)}
                />
              </div>
            </CardBody>
          </Card>
        );
      })}
    </Fragment>
  );
};

export default WorkoutCard;
