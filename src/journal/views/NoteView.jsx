import {
  DeleteOutlined,
  SaveOutlined,
  UploadFileOutlined,
} from "@mui/icons-material";
import {
  Button,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import {
  setActiveNote,
  startDeleteNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const NoteView = () => {
  const dispatch = useDispatch();

  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        title: "Nota Actualizada",
        text: messageSaved,
        icon: "success",
      });
    }
  }, [messageSaved]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onDeleteNote = () => {
    dispatch(startDeleteNote());
  };

  const fileInputRef = useRef();

  const onFileInputChange = ({ target }) => {
    if (target.length === 0) return;

    dispatch(startUploadingFiles(target.files));
  };

  return (
    <Grid2
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid2>
        <Typography fontSize={30} fontWeight="light">
          {dateString}
        </Typography>
      </Grid2>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        multiple
        onChange={onFileInputChange}
      />

      <Button onClick={() => fileInputRef.current.click()} disabled={isSaving}>
        <UploadFileOutlined color="primary" sx={{ fontSize: 30, mr: 1 }} />
        Subir
      </Button>

      <Grid2>
        <Button disabled={isSaving} onClick={onSaveNote}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid2>

      <Grid2>
        <Button disabled={isSaving} onClick={onDeleteNote}>
          <DeleteOutlined sx={{ fontSize: 30, mr: 1 }} />
          Borrar
        </Button>
      </Grid2>

      <Grid2 size={12} sx={{ mt: 2 }} container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio hoy?"
          label="Titulo"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid2>

      <ImageGallery images={note.imageUrls} />
    </Grid2>
  );
};
