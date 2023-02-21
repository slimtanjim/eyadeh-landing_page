import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(28, 0, 6)
    },
    icon: {
        marginRight: '20px',
    },
    buttons: {
        variant: 'contained',
        marginTop: '40px',
        backgroundColor: theme.palette.success.light
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: '1'
    },
    footer: {
        bacgroundColor: theme.palette.background.paper,
        padding: '155px 0'
    }
}));

export default useStyles;