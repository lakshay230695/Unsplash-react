import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from "../logo.png";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    typo: {
        fontFamily: '"McLaren", cursive',
        margin: theme.spacing(0.5),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
      },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
  })); 

export default function Search() {
    
    const classes = useStyles();

    const [photo, setPhoto] = useState("");
    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
    const [CLIENT_ID, setClientId] = useState(process.env.REACT_APP_API_KEY);

    const [result, setResult] = useState([]);


    function handleChange(event){
        setPhoto(event.target.value);
    }

    function handleSubmit(event) {
        console.log(photo);
        
        const url = "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+CLIENT_ID;
        
        axios.get(url).then(response => {
            console.log(response);
            setResult(response.data.results);
          });
    }

    return(
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar src={Logo} className={classes.large}/>
    
       
        <Typography className={classes.typo} component="h1" variant="h5">
          What image are you looking for? <br />
        </Typography>
        

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="photo"
            label="Search"
            name="photo"
            value = {photo}
            onChange = {handleChange}
            autoComplete="search"
            autoFocus
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Search
          </Button>
          <Grid item xs={12}>
         {result.map((photo) => (
             <img src={photo.urls.small} key = {photo.id} alt = "ArrayofImages" />
         ))}
         </Grid>
         
      </div>
    </Container>
    )
}