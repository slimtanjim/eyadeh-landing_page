import * as React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

const cards = []

export default function Home() {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position = 'relative' style={{background: 'linear-gradient(to right, #42a5f5, #81c784'}}>
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h5">
                        Eyadeh
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth={"md"}>
                        <Typography variant={"h2"} align={"center"} color={"textPrimary"} gutterBottom>
                            Error 404
                        </Typography>
                        <Typography variant={"h5"} align={"center"} color={"textSecondary"} paragraph>
                            Sorry! The page you tried to navigate to could not be found.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify={"center"}>
                                <Grid item>
                                    <Button className={classes.buttons}>
                                        Return Home
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth={'md'}>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={"https://source.unsplash.com/random"}
                                        title={"bruh"}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant={"h5"}>
                                            Head gud
                                        </Typography>
                                        <Typography>
                                            mmmmmm head
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size={"small"} color={"primary"}>View</Button>
                                        <Button size={"small"} color={"primary"}>Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant={"h6"} align={"center"} gutterBottom>
                    Eyadeh Company
                </Typography>
                <Typography variant={"subtitle1"} align={"center"} color={"textSecondary"}>
                    Copyright stuff blahblahblah
                </Typography>
            </footer>
        </>
    )
}
