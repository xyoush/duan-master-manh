import { fade } from "@material-ui/core/styles";
const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    width: " 100%",
    display: "inherit",
    alignItems: "inherit",
    justifyContent: "inherit",
  },
  khungapp: {
    backgroundColor: "#6103aa",
    maxWidth: "100%",
    width: drawerWidth,
    height: "71px",
  },
  stylesapp: {
    backgroundColor: "white",
    width: "239px",
    height: "71px",
    borderRadius: "0 0 40px 0",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  appBar: {
    backgroundColor: "#6103aa",
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    backgroundColor: "#6103aa",
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    maxWidth: "100%",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    maxWidth: "100%",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 44,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  /* chỉnh chữ ở bên thanh menu dọc */
  text: {
    marginLeft: "30px",
    color: "rgb(0 0 0 / 87%)",
    display: "inline-block",
    "&:hover": {
      
    },
  },
  drawerPaper: {
    width: 240,
    maxWidth: 240,
    zIndex: 10,
    height: "100",
    position: "relative",
  },
  menuLink: {
    textDecoration: "none",
    fontColor: "#b366ff",
  },
  listItem: {
    "&:hover": {
      color: "red",
    },
  },
  listIcon: {
    "&:hover": {
      color: "yellow",
    },
  },
  /* khi click vào nút thì màu sẽ giữ ở ngoài */
  menuLinkActive: {
    "&>div": {
      backgroundColor: "#cc99ff",
    },
    color : 'white'
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(8),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 4),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    /* em = 0,25px, spacing = giá trị * 8 */
    marginLeft: "10px",
    paddingLeft: `calc(2em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  /* này dùng để cho logo tròn cái borderRadius */
  imageslogo: {
    backgroundColor: "#f3f3f3",
    borderRadius: "4em",
    width: "45px",
    height: "45px",
    marginLeft: "-10px",
    marginTop: "-5px",
  },
  /* images này dùng để chỉnh logo tròn */
  images: {
    marginRight: "5px",
    marginLeft: "5px",
    marginTop: "7px",
  },
  /* chỉnh nút search dịch qua bên trái */
  editsearch: {
    marginLeft: "850px",
  },
  editbutton: {
    marginLeft: "14px",
  },
  /* large này là chỉnh hình tròn trong avatar nhân viên */
  large: {
    width: "80px",
    height: "80px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "25px",
  },
  /* chỉnh vị trí tên nhân viên */
  nameuser: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
  },
  /* chỉnh vị trí công việc nhân viên */
  namework: {
    fontSize: "13px",
    marginTop: "-12px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  /* none này đc dùng khi vào trang dashboard sẽ tự mở sẵn chứ ko đóng */
  none: {
    display: "none",
  },
  /* Iconbutton này dùng chỉnh logo dài */
  Iconbutton: {
    marginLeft: "2px",
    marginTop: "-14px",
  },
  none : {
    display : 'none'
  }
});

export default styles;
