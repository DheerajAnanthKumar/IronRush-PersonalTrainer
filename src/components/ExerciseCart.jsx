import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCart = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml={2}
        color="#000"
        fontWeight="bold"
        mt={2}
        pb={2}
        textTransform="capitalize"
        fontSize={24}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCart;
