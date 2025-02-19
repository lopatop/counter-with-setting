import { ChangeEvent, useState } from "react"
import { Button, CssBaseline, Grid2 } from "@mui/material"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { teal } from "@mui/material/colors"

export const CounterW2 = () => {


  const [start, setStart] = useState<number>(0)
  const [max, setMax] = useState<number>(5)
  const [count, setCount] = useState<number>(start)
  const [mode, setMode] = useState<boolean>(true)


  const onClickButtonIncHandler = () => {
    setCount(count + 1)
  }
  const onClickButtonResetHandler = () => {
    setCount(start)
  }
  const onClickButtonSetHandler = () => {
    setMode(!mode)
    setCount(start)
  }
  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMax(+e.currentTarget.value)
  }
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStart(+e.currentTarget.value)
  }

  const errorMax = start >= max
  const errorStart = start < 0 || start === max
  const countMax = count === max

  const theme = createTheme({
      palette: {
        primary: teal,
        secondary: {
          main: "#b2dfdb"
        }
      }
    }
  )

  const containerModalStyled = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh"
  }
  const containerCountStyled = {
    minWidth: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    width: "350px",
    padding: "15px",
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "12px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
  }

  const containerModalCountStyled = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "10px"
  }

  const countModalStyled = {
    color: countMax ? "red" : "#333",
    width: "100%",
    height: "70px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "28px",
    fontWeight: "bold",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)"
  }

  const containerButtonStyled = {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "8px",
    borderRadius: "8px",
    backgroundColor: `${theme.palette.secondary.main}`,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
  }

  const containerInputValueMaxStyled = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px"
  }
  const containerInputValueStartStyled = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px"
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={containerModalStyled}>
        <Container
          sx={containerCountStyled}
        >
          {mode ? (
            <Box sx={containerModalCountStyled}>
              <Box sx={countModalStyled}>{count}</Box>
              <Grid2 sx={containerButtonStyled}>
                <Button size="small" variant="contained" onClick={onClickButtonIncHandler}
                        disabled={count >= max}>inc</Button>
                <Button size="small" variant="contained" onClick={onClickButtonResetHandler}>reset</Button>
                <Button size="small" variant="contained" onClick={onClickButtonSetHandler}>set</Button>
              </Grid2>
            </Box>
          ) : (
            <Box sx={{ width: "100%" }}>
              <Box sx={containerInputValueMaxStyled}>
                <Box sx={{ fontSize: "16px", fontWeight: "bold" }}>Max value:</Box>
                <TextField
                  sx={{
                    "& input": { textAlign: "center" },
                    width: "120px"
                  }}
                  error={errorMax}
                  size="small"
                  type="number"
                  label={errorMax ? "Incorrect" : "Enter max"}
                  variant="outlined"
                  value={max}
                  onChange={onChangeMaxValueHandler}
                />
              </Box>

              <Box sx={containerInputValueStartStyled}>
                <Box sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  Start value:
                </Box>
                <TextField
                  sx={{
                    "& input": { textAlign: "center" },
                    width: "120px"
                  }}
                  error={errorStart}
                  size="small"
                  type="number"
                  label={errorStart ? "Incorrect" : "Enter start"}
                  variant="outlined"
                  value={start}
                  onChange={onChangeStartValueHandler}
                />
              </Box>

              <Button
                fullWidth
                size="small"
                variant="contained"
                onClick={onClickButtonSetHandler}
                disabled={errorStart || errorMax}
              >
                Set
              </Button>
            </Box>
          )}
        </Container>
      </Container>
    </ThemeProvider>

  )
}