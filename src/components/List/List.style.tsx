import { styled } from "@mui/material";

export const ListStyled = styled("ul")`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(9)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(8)};
  } ;
`;

export const VoidList = styled("span")`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(20, 0)};
`;

export const ItemList = styled("li")`
  list-style: none;
  max-width: 300px;
`;

export const Photo = styled("img")`
  width: 100%;
`;

export const Infos = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Name = styled("h3")`
  margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
`;

export const Value = styled("span")`
  margin: 0;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Description = styled("span")`
  word-break: break-word;
  margin: 8px 0;
`;
