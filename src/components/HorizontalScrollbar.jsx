import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import ExerciseCart from "./ExerciseCart";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography
      onClick={scrollPrev}
      className="left-arrow"
      sx={{ cursor: "pointer", mr: 1 }}
    >
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography
      onClick={scrollNext}
      className="right-arrow"
      sx={{ cursor: "pointer", ml: 1 }}
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

// const HorizontalScrollbar = ({ data, bodyPart, setBodyParts }) => {
//   return (
//     <ScrollMenu
//       LeftArrow={LeftArrow}
//       RightArrow={RightArrow}
//       style={{ width: "100%" }}
//     >
//       {data.map((item) => (
//         // <Box
//         //   key={item.id || item}
//         //   itemID={item.id || item}
//         //   title={item.id || item}
//         //   m="0 40px"
//         //   sx={{
//         //     minWidth: "120px",
//         //     display: "inline-block",
//         //   }}
//         // >
//         //   <BodyPart
//         //     item={item}
//         //     bodyPart={bodyPart}
//         //     setBodyPart={setBodyParts}
//         //   />
//         // </Box>
//         <Box
//           key={item.id || item}
//           itemID={item.id || item}
//           title={item.id || item}
//           m="0 20px"
//           sx={{
//             minWidth: "270px",
//             height: "280px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <BodyPart
//             item={item}
//             bodyPart={bodyPart}
//             setBodyPart={setBodyParts}
//           />
//         </Box>
//       ))}
//     </ScrollMenu>
//   );
// };

const HorizontalScrollbar = ({ data, bodyPart, setBodyParts, isBodyParts }) => {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: 2,
        padding: 2,
      }}
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
          sx={{
            minWidth: "230px",
            display: "inline-block",
          }}
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyParts}
            />
          ) : (
            <ExerciseCart exercise={item} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalScrollbar;
