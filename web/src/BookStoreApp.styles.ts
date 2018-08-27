import {createStyles, Theme} from "@material-ui/core";

export const styles = (theme: Theme) => createStyles({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: "relative"
  },
  toolbarTitle: {
    flex: 1
  }
});

