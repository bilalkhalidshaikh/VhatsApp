import React from "react";
import { auth, provider } from "./firebase";
import { toastInfo } from "./shared/toastInfo";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import GoogleLogo from "./images/Google G Logo.png";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./Login.css";
import logo from "./images/mirage-message-sent.png"
import cover from "./images/marginalia-delivering-a-message.png"





function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor:"#131c21"
    },
    image: {
      backgroundImage: `url(${cover})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: "#131c21",
      backgroundSize: 'contain',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:"#131c21"

    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
 function Login() {
    const classes = useStyles();
    const signInGoogle = () => {
        const google = "google";
    
        auth
          .signInWithPopup(provider)
          .catch((error) => toastInfo(`${error}`, google, "top-center"));
      };
    
      const loginAnonymously = () => {
        const anonymous = "anonymous";
    
        auth
          .signInAnonymously()
          .catch((error) => toastInfo(`${error}`, anonymous, "top-center"));
      };
  
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
          <div className={classes.paper}>
          <img
          src={logo}
          alt="WhatsApp Logo"
          width={250}
          height={250}
        />
            <Typography component="h1" variant="h5">
            <div className="login__text">
          <h1>Sign in </h1>
        </div>
            </Typography>
            
        <div className="login__withGoogle" onClick={signInGoogle}>
          <img src={GoogleLogo} alt="Google Logo" />
          <span>Sign in with Google</span>
        </div>
<br/>
        <div
          className=" login__Anonymously"
          onClick={loginAnonymously}
        >
          <PermIdentityIcon />
          <span>Login Anonymously</span>
        </div>
          </div>
        </Grid>
      </Grid>
    );
  }








export default Login;
