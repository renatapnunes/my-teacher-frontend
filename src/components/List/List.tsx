import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import {
  Description,
  Infos,
  ItemList,
  ListStyled,
  Name,
  Photo,
  Value,
  VoidList,
} from "./List.style";

interface ListProps {
  professores: Professor[] | undefined;
  onSelect: (professor: Professor) => void;
}

export const List = (props: ListProps) => {
  return (
    <div>
      {props.professores?.length ? (
        <ListStyled>
          {props.professores.map((professor) => (
            <ItemList key={professor.id}>
              <Photo src={professor.foto} alt={professor.nome} />
              <Infos>
                <Name>{professor.nome}</Name>
                <Value>R$ ${professor.valor_hora} por hora</Value>
                <Description>{professor.descricao}</Description>
                <Button
                  sx={{ width: "100%" }}
                  onClick={() => props.onSelect(professor)}
                >
                  Agendar aula
                </Button>
              </Infos>
            </ItemList>
          ))}
        </ListStyled>
      ) : (
        <VoidList>Nenhuma aula disponível para agendamento.</VoidList>
      )}
    </div>
  );
};
