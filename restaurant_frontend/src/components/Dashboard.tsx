import Appbar from "./Appbar"
import { createTheme,ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
interface Props {}

function Dashboard(props: Props) {
    const {} = props

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <Appbar/>
            </ThemeProvider>
        </div>
    )
}

export default Dashboard
