import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import type { NextPage } from "next";
import { List } from "../src/components/List/List";
import { useIndex } from "../src/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
    professores,
    nome,
    setNome,
    email,
    setEmail,
    profSelecionado,
    setProfSelecionado,
    agendarAula,
    messagem,
    setMenssagem,
  } = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: "secondary.main", width: "100%" }}>
        <List
          professores={professores}
          onSelect={(profesor) => setProfSelecionado(profesor)}
        ></List>
      </Box>

      <Dialog
        open={profSelecionado !== null}
        onClose={() => setProfSelecionado(null)}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite o nome"
              type="text"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite o email"
              type="text"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button onClick={() => setProfSelecionado(null)}>Cancelar</Button>
          <Button onClick={() => agendarAula()}>Agendar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        message={messagem}
        open={messagem?.length > 0}
        autoHideDuration={2500}
        onClose={() => setMenssagem("")}
      />
    </div>
  );
};

export default Home;
