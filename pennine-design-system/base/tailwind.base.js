import typography from "./tokens.typography.js";
import spacing from "./tokens.spacing.js";
import radius from "./tokens.radius.js";
import colors from "./tokens.colors.js";
import wrappers from "./tokens.wrappers.js";

export default {
  theme: {
    extend: {
      ...typography,
      ...spacing,
      ...radius,
      ...colors,
      ...wrappers,
    },
  },
};
