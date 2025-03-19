import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { TurnedInNot } from "@mui/icons-material";
import {
  Grid2,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ id, title, body, date, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const newTitle = useMemo(() => {
    return title.length > 13 ? title.substring(0, 13) + "..." : title;
  }, [title]);

  const onClickNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }));
  };

  return (
    <ListItem key={id} disablePadding onClick={onClickNote}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid2 flexDirection={'column'} container>
          <ListItemText primary={newTitle || 'Nueva Nota'} />
          { body && <ListItemText secondary={body} /> }
        </Grid2>
      </ListItemButton>
    </ListItem>
  );
};
