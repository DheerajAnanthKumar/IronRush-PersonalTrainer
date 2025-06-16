// import React from "react";
// import { Stack } from "@mui/material";
// import { InfinitySpin } from "react-loader-spinner";

// const Loader = () => {
//   return (
//     <Stack
//       direction="row"
//       justifyContent="center"
//       alignItems="center"
//       width="100%"
//     >
//       <InfinitySpin color="gray" />
//     </Stack>
//   );
// };

// export default Loader;
import { CircularProgress, Stack } from "@mui/material";

const Loader = () => (
  <Stack justifyContent="center" alignItems="center" width="100%">
    <CircularProgress color="secondary" />
  </Stack>
);

export default Loader;
